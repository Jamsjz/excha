import AuthenticatedLayout from "./AuthenticatedLayout";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import React, { PropsWithChildren, ReactNode } from 'react';

interface DashboardProps {
    marked: any;  // Replace 'any' with a more specific type if possible
    products: any; // Replace 'any' with a more specific type if possible
}

const DashBoard: React.FC<PropsWithChildren<DashboardProps>> = ({
    children,
    marked,
    products
}) => {
    return (
        <>
            <AuthenticatedLayout
                header={
                    <>
                        <div className="flex justify-between items-center">
                            <div>
                                Dashboard
                            </div>
                            {/* <div> */}
                            {/*     <form action={route('api.book.search')} method="get" className=''> */}
                            {/*         <div className="flex ml-auto items-center space-x-4"> */}
                            {/*             <div className="relative rounded-lg bg-gray-100 dark:bg-gray-800 w-48"> */}
                            {/*                 <Input type="text" placeholder="Search" name="bookSearchQuery" className="rounded-lg appearance-none w-48 pl-8 text-xs" /> */}
                            {/*                 <SearchIcon className="absolute left-2.5 top-2.5 w-4 h-4 text-gray-400 dark:text-gray-600" /> */}
                            {/*             </div> */}
                            {/*         </div> */}
                            {/*     </form> */}
                            {/* </div> */}
                        </div>
                    </>
                }
            >
                <div className='flex justify-center my-5'>
                    <Tabs className='w-[90%] lg:w-[50%] sm:w-[80%] md:w-[70%]' defaultValue='mybooks'>
                        <TabsList className='w-full'>
                            <TabsTrigger value="mybooks" className='w-full'>
                                Marked Books
                            </TabsTrigger>
                            <TabsTrigger value="myproducts" className='w-full'>
                                My Products
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="mybooks" >
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Books
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {marked}
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="myproducts">
                            <Card>
                                <CardHeader>
                                    <CardTitle>
                                        Books
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    {products}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
                {children}

            </AuthenticatedLayout>
        </>

    )
};

export default DashBoard;
