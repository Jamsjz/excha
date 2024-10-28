import NavBar from "@/Components/NavBar";
import { Toaster } from "@/components/ui/toaster"
import { Head } from "@inertiajs/react";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div>
                <NavBar />
                <hr className="my-1" />
            </div>

            <div>
                <main>
                    {children}
                </main>
            </div>
            <Toaster />
        </>
    )
}
