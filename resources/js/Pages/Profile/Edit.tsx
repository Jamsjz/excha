import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { PageProps } from '@/types';
import { Head } from '@inertiajs/react';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Edit({
    mustVerifyEmail,
    status,
}: PageProps<{ mustVerifyEmail: boolean; status?: string }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight ">
                    Profile
                </h2>
            }
        >
            <Head title="Profile" />

            <div className="flex flex-col  items-center my-7">
                <div className="w-full flex flex-col sm:flex-row items-center sm:justify-center">

                    <UpdateProfileInformationForm
                        mustVerifyEmail={mustVerifyEmail}
                        status={status}
                        className="w-[90%] lg:w-[90%] sm:w-[80%] md:w-[70%] "
                    />

                    <UpdatePasswordForm className="w-[90%] lg:w-[90%] sm:w-[80%] md:w-[70%] mt-7" />
                </div>

                <DeleteUserForm className="w-[90%] sm:w-[100%] mt-7" />
            </div>
        </AuthenticatedLayout>
    );
}
