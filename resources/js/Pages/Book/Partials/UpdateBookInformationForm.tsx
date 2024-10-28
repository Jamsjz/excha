// export default function UpdateBookInformationForm(
//     {
//         mustVerifyEmail,
//         status
//     }: {
//         mustVerifyEmail: boolean,
//         status?: string
//     }
//
//
// ) {
//     return (
//         <>
//
//         </>
//     )
// }


import InputError from '@/Components/InputError';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import TextInput from '@/Components/TextInput';
import { Transition } from '@headlessui/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { Input } from '@/components/ui/input';
import { CardHeader, Card, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';

export default function UpdateBookInformationForm({
    mustVerifyEmail,
    status,
    className = '',
    book
}: {
    mustVerifyEmail: boolean;
    status?: string;
    className?: string;
    book: {
        id: number,
        name: string,
        author: string,
        price: number
    }
}) {
    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
            id: book.id,
            name: book.name,
            author: book.author,
            price: book.price
        });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        patch(route('book.update', book = book));
    };

    return (
        <section className={className}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        Book Information
                    </CardTitle>
                    <CardDescription>
                        Update your book's information.
                    </CardDescription>
                </CardHeader>
                <form onSubmit={submit} className="">
                    <CardContent>
                        <div>
                            <Label htmlFor="name">
                                Book Name
                            </Label>

                            <Input
                                id="name"
                                className="mt-1 block w-full"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                                autoComplete="name"
                            />

                            <InputError className="mt-2" message={errors.name} />
                        </div>


                        <div>
                            <Label htmlFor="email">
                                Author
                            </Label>

                            <Input
                                id="author"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.author}
                                onChange={(e) => setData('author', e.target.value)}
                                required
                                autoComplete="author"
                            />

                            <InputError className="mt-2" message={errors.author} />
                        </div>
                        <div>
                            <Label htmlFor="email">
                                Price
                            </Label>

                            <Input
                                id="price"
                                type="text"
                                className="mt-1 block w-full"
                                value={data.price}
                                onChange={(e) => setData('price', Number(e.target.value))}
                                required
                            />

                            <InputError className="mt-2" message={errors.price} />
                        </div>

                    </CardContent>
                    <CardFooter>
                        <div className="flex items-center gap-4">
                            <Button disabled={processing}>Save</Button>

                            <Transition
                                show={recentlySuccessful}
                                enter="transition ease-in-out"
                                enterFrom="opacity-0"
                                leave="transition ease-in-out"
                                leaveTo="opacity-0"
                            >
                                <p className="text-sm text-gray-600">
                                    Information Saved.
                                </p>
                            </Transition>
                        </div>
                    </CardFooter>
                </form>
            </Card>
        </section>
    );
}
