import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import UpdateBookInformationForm from './Partials/UpdateBookInformationForm';
import DeleteBookForm from './Partials/DeleteBookForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <>
            <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight ">
                        Profile
                    </h2>
                }
            >
                <Head title="Profile" />

                <div className="py-12">
                    <div className="mx-auto max-w-7xl space-y-6 sm:px-6 lg:px-8">
                        <div className="max-w-xl">
                            <UpdateBookInformationForm
                                mustVerifyEmail={mustVerifyEmail}
                                status={status}
                            />
                            <div>

                                <div className="max-w-xl">
                                    <DeleteBookForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
