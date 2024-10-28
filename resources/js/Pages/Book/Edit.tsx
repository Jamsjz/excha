import { Head } from "@inertiajs/react";
import UpdateBookInformationForm from "./Partials/UpdateBookInformationForm";

export default function Edit(
    {
        mustVerifyEmail,
        status,
        book
    }: {
        mustVerifyEmail: boolean;
        status?: string;
        book: {
            name: string,
            author: string,
            price: number
            user_id: number
        }
    }
) {
    return (
        <>
            <Head title="Edit Book" />
            <UpdateBookInformationForm
                mustVerifyEmail={mustVerifyEmail}
                book={book}
                status={status}
                className=""
            />
        </>
    )

}
