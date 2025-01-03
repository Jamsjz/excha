import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Head, Link, router } from "@inertiajs/react"
import { PlusIcon } from "lucide-react"

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"


import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import React from 'react';
import { Input } from '@/components/ui/input';
import { toast } from "@/hooks/use-toast"



export const thiscolumns: ColumnDef<Book>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Book Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            return (
                <>
                    <Link href={`/book/${row.getValue("id")}`}>{row.getValue("name")}</Link>
                </>
            )
        }
    },
    {
        accessorKey: "author",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Author
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "price",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Price
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        id: "actions",
        cell: ({ row }) => {
            const payment = row.original

            return (
                <>
                    <Button variant="ghost" className="h-8 w-8 p-0" >
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger>
                                    <Button className="h-8 w-8 p-0"
                                        onClick={() => {
                                            toast({
                                                title: "Book Added!",
                                                description: "Book has been added to Marked Books."
                                            });
                                            router.post(
                                                route('api.book.mark',
                                                    {
                                                        'book': row.getValue('id')
                                                    }
                                                )
                                            );
                                        }}>
                                        <PlusIcon />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p> Mark book</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </Button>
                </>
            )
        }
    }
]





interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({
    columns,
    data,
}: DataTableProps<TData, TValue>) {
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [rowSelection, setRowSelection] = React.useState({})
    const [sorting, setSorting] = React.useState<SortingState>([])
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        onRowSelectionChange: setRowSelection,
        state: {
            sorting,
            columnFilters,
            rowSelection,
        },
    })

    return (
        <>
            <div className="flex-col justify-center my-5 items-center">
                <div className="flex flex-col my-5  sm:flex-row w-full items-center justify-between">
                    <Input
                        placeholder="Book Name"
                        value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("name")?.setFilterValue(event.target.value)
                        }
                        className="mb-2 mr-2"
                    />
                    <Input
                        placeholder="Author"
                        value={(table.getColumn("author")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("author")?.setFilterValue(event.target.value)
                        }
                        className="mb-2"
                    />
                </div>
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((headerGroup) => (
                                <TableRow key={headerGroup.id}>
                                    {headerGroup.headers.map((header) => {
                                        return (
                                            <TableHead key={header.id}>
                                                {header.isPlaceholder
                                                    ? null
                                                    : flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                            </TableHead>
                                        )
                                    })}
                                </TableRow>
                            ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length ? (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow
                                        key={row.id}
                                        data-state={row.getIsSelected() && "selected"}
                                        className="cursor-pointer"
                                    >
                                        {row.getVisibleCells().map((cell) => (
                                            <TableCell key={cell.id}>
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={columns.length} className="h-24 text-center">
                                        No results.
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                    <div className="flex items-center justify-end space-x-2 py-4">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.previousPage()}
                            disabled={!table.getCanPreviousPage()}
                        >
                            Previous
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => table.nextPage()}
                            disabled={!table.getCanNextPage()}
                        >
                            Next
                        </Button>
                    </div>
                </div>
            </div>

        </>
    )
}

export type Book = {
    id: number;
    name: string;
    author: string;
    price: number;
}



export default function Buy({ allBooks }: any) {
    return (
        <>
            <Head title="Buy" />
            <div className="flex justify-center my-5 items-center">
                <Card className="w-[90%] lg:w-[50%] sm:w-[80%] md:w-[70%]">
                    <CardHeader>
                        <CardTitle>
                            Search for a book
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex-col">
                        <DataTable columns={thiscolumns} data={allBooks} />
                    </CardContent>
                </Card>
            </div>
        </>
    )
}
