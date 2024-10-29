import { Head, Link, usePage } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { useState, useEffect } from 'react';
import DashBoard from '@/Layouts/DashBoardLayout';
import { PencilIcon, TrashIcon, XIcon } from "lucide-react";
import { ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "@/hooks/use-toast";
import { DataTable } from './Profile/Buy';
import { ColumnDef } from '@tanstack/react-table';

export type Book = {
    id: number;
    name: string;
    author: string;
    price: number;
    user_id: number;
}

type DashboardProps = {
    markedBooks: Book[];
    userProducts: Book[];
}

export function Dashboard({ markedBooks, userProducts }: DashboardProps) {
    const { auth } = usePage().props;
    const user = auth.user;

    const [minPrice, setMinPrice] = useState<string>('');
    const [maxPrice, setMaxPrice] = useState<string>('');
    const [filteredMarkedBooks, setFilteredMarkedBooks] = useState(markedBooks);
    const [filteredUserProducts, setFilteredUserProducts] = useState(userProducts);

    const isBookMarked = (bookId: number) => {
        return markedBooks.some(markedBook => markedBook.id === bookId);
    };

    useEffect(() => {
        const filterBooks = (books: Book[]) => {
            return books.filter(book => {
                const price = book.price;
                const meetsMinPrice = !minPrice || price >= parseFloat(minPrice);
                const meetsMaxPrice = !maxPrice || price <= parseFloat(maxPrice);
                return meetsMinPrice && meetsMaxPrice;
            });
        };

        setFilteredMarkedBooks(filterBooks(markedBooks));
        setFilteredUserProducts(filterBooks(userProducts));
    }, [minPrice, maxPrice, markedBooks, userProducts]);

    const PriceRangeFilter = () => (
        <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
                <Input
                    type="number"
                    placeholder="Min Price"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-32"
                />
                <span>to</span>
                <Input
                    type="number"
                    placeholder="Max Price"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-32"
                />
            </div>
            <Button
                variant="outline"
                onClick={() => {
                    setMinPrice('');
                    setMaxPrice('');
                }}
            >
                Reset
            </Button>
        </div>
    );

    const columns: ColumnDef<Book>[] = [
        {
            accessorKey: "id",
            header: "ID",
        },
        {
            accessorKey: "name",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Book Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
            cell: ({ row }) => (
                <Button onClick={() => {
                    router.get(route('book.show', {
                        'book': row.getValue('id')
                    }), {
                        preserveScroll: true,
                        preserveState: true
                    });
                }
                } className="" variant='ghost' >
                    {row.original.name}
                </Button >
            )
        },
        {
            accessorKey: "author",
            header: ({ column }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Author
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
        },
        {
            accessorKey: "price",
            header: ({ column }: { column: ColumnDef<Book> }) => (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            ),
        },
        {
            id: "actions",
            cell: ({ row }) => {
                const book = row.original;

                const handleDelete = () => {
                    router.delete(
                        route('api.book.destroy', { book: book.id }),
                        {
                            preserveScroll: true,
                            onSuccess: () => {
                                toast({
                                    title: "Success",
                                    description: "Book deleted successfully",
                                });
                            },
                            onError: () => {
                                toast({
                                    title: "Error",
                                    description: "Failed to delete book",
                                    variant: "destructive",
                                });
                            },
                        }
                    );
                };

                if (user.id === book.user_id) {
                    return (
                        <div className="flex items-center gap-2">
                            <Link href={`${route('book.edit', { 'book': book.id })}`}>
                                <Button variant="ghost" size="icon" className="h-8 w-8 p-0">
                                    <PencilIcon className="h-4 w-4" />
                                </Button>
                            </Link>
                            {isBookMarked(book.id) && (
                                <Button
                                    variant="ghost"
                                    className="h-8 w-8 p-0"
                                    onClick={() => {
                                        router.delete(route('api.book.mark.destroy', { 'book': book.id }))
                                    }}
                                >
                                    <XIcon className="h-4 w-4 p-0" />
                                </Button>
                            )}
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <Button variant="destructive" size="icon" className="h-8 w-8 p-0">
                                        <TrashIcon className="h-4 w-4" />
                                    </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Delete Book</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete this book
                                            and remove the data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction onClick={handleDelete}>
                                            Delete
                                        </AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </div>
                    );
                }

                return (
                    <Button
                        size="icon"
                        className="h-8 w-8 p-0"
                        onClick={() => {
                            router.delete(route('api.book.mark.destroy', { 'book': book.id }), { preserveScroll: true })
                            toast({
                                title: "Book Removed!",
                                description: "Book has been removed from marked books.",
                            })
                        }}
                    >
                        <XIcon className="h-4 w-4" />
                    </Button>
                );
            }
        }
    ];

    return (
        <>
            <Head title="Dashboard" />
            <DashBoard
                marked={
                    <div>
                        {/* <PriceRangeFilter /> */}
                        <DataTable columns={columns} data={filteredMarkedBooks} />
                    </div>
                }
                products={
                    <div>
                        {/* <PriceRangeFilter /> */}
                        <DataTable columns={columns} data={filteredUserProducts} />
                    </div>
                }
            />
        </>
    );
}

export default Dashboard;
