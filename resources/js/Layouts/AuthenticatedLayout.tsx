import { usePage } from '@inertiajs/react';
import { PropsWithChildren, ReactNode, useState } from 'react';


console.log(route('login'));


export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;

    return (
        <div className="">
            {header && (
                <header className="shadow">
                    <div className="font-bold text-xl px-4 py-6 sm:px-6 lg:px-8 my-2">
                        {header}
                    </div>
                    <hr className="hidden dark:block" />
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
