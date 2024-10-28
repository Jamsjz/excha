import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Head, Link } from "@inertiajs/react";

export default function Show(
    { book, seller }: {
        book: {
            name: string,
            author: string,
            price: number,
            user_id: number,
            description: string
            id: number
        },
        seller: {
            name: string,
            phone: string,
            email: string,

            id: number
        }
    }
) {
    return (
        <>
            <Head title={book.name} />
            <Card>
                <CardHeader>
                    <CardTitle>
                        {book.name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex-col justify-between">
                        <div>
                            <h1 className="text-xl underline">Book</h1>
                            <div className="flex">
                                <strong>Author: </strong><p className="ml-2">{book.author}</p>
                            </div>
                            <div className="flex">
                                <strong>Price: </strong><p className="ml-2">{book.price}</p>
                            </div>
                            <div className="flex">
                                <strong>Description: </strong><p className="ml-2">{book.description}</p>
                            </div>
                        </div>
                        <hr />
                        <div>
                            <h1 className="text-xl underline">Seller</h1>
                            <div className="flex">
                                <strong>Name: </strong><p className="ml-2">{seller.name}</p>
                            </div>
                            <div className="flex">
                                <strong>Email: </strong>
                                <p className="ml-2">
                                    <a href={`
mailto:${seller.email}?subject=Regarding%20Book%20Purchase&body=I%20want%20to%20purchase%20${book.name}%20of%20id%20${book.id}
`}
                                        target="_blank">
                                        {seller.email}
                                    </a>
                                </p>
                            </div>

                            <div className="flex">
                                <strong>Phone Number: </strong><p className="ml-2">{seller.phone}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}
