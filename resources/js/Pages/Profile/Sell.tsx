import { Input } from "@/components/ui/input";
import { Head, router } from "@inertiajs/react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Sell() {
    const [values, setValues] = useState({
        bookname: "",
        author: "",
        price: 0,
    })

    function handleChange(e: any) {
        const key = e.target.name;
        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    function handleSubmit(e: any) {
        e.preventDefault()
        router.post(route('api.book.store'), values)
        toast({
            title: "Book Added",
            description: "Your book has been added to the marketplace",
        })
        e.reset();
    }

    return (
        <>
            <Head title="Sell" />
            <div className="flex  justify-center my-5">
                <form onSubmit={handleSubmit} className="w-[90%] lg:w-[50%] sm:w-[80%] md:w-[70%]">
                    <Card className="">
                        <CardHeader>
                            <CardTitle className="">
                                Add a book
                            </CardTitle>
                            <CardDescription className="">
                                Enter the details for the book.
                            </CardDescription>
                        </CardHeader>

                        <CardContent>

                            <label htmlFor="bookname">Name</label>
                            <Input value={values.bookname} onChange={handleChange} type="text" name="bookname" required />

                            <label htmlFor="author">Author</label>
                            <Input value={values.author} onChange={handleChange} type="text" name="author" required />

                            <label htmlFor="price">Price</label>
                            <Input value={values.price} onChange={handleChange} type="number" name="price" required />

                            {/* <label htmlFor="tags">Tags</label> */}
                            {/* <Input onChange={handleChange} type="text" name="tags" required /> */}
                            {/* <small>The tags are comma separated with a space, eg: "horror, comedy"</small> */}

                        </CardContent>
                        <CardFooter>
                            <Button type="submit" className="btn btn-primary" >
                                Add Book
                            </Button>
                        </CardFooter>
                    </Card>
                </form>

            </div >
        </>
    )
}
