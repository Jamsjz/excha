import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import { Button } from "@/components/ui/button"
import { Link, usePage } from "@inertiajs/react";
import { HouseIcon, IdCardIcon, LogInIcon, LogOutIcon, MenuIcon, PlusCircle, ShoppingCartIcon } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { PropsWithChildren, ReactNode } from "react";

const getInitials = (name: string) => {
    let names = name.split(" ");
    let initials = [];

    for (let i = 0; i < names.length; i++) {
        initials.push(names[i].charAt(0));
    }

    return initials.join("");

}

function ProfileDropdown() {
    const user = usePage().props.auth.user;
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <span className="">
                    <button
                        type="button"
                        className=""
                    >
                        <Avatar>
                            <AvatarFallback>
                                {getInitials(user.name)}
                            </AvatarFallback>
                        </Avatar>

                    </button>
                </span>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link
                        href={route('profile.edit')}
                    >
                        Profile
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        href={route('logout')}
                        method="post"
                        as="button"
                    >
                        Log Out
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link
                        href={route('dashboard')}
                    >
                        Dashboard
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium">
                                {user.name}
                            </div>
                            <div className="">
                                {user.email}
                            </div>
                            <div className="">
                                {user.phone}
                            </div>
                        </div>
                    </div>
                </DropdownMenuItem>

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default function NavBar({
    header,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const usernav = () => {
        if (user) {
            return (
                <div className="flex justify-between items-center mx-2 mt-2 sticky top-0 z-50" >
                    <div className="flex mx-1 items-center justify-evenly">
                        <Link href={route('root')} className="mx-2">
                            <img
                                src="img/exchal.png"
                                alt="Excha"
                                className="block dark:hidden  cursor-pointer w-[4rem]"
                            />
                            <img
                                src="img/excha_text_logo.png"
                                alt="Excha"
                                className="hidden dark:block cursor-pointer w-[4rem]"
                            />
                        </Link>
                        <NavigationMenu >
                            <NavigationMenuItem className="md:hidden">
                                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <Link href={route('dashboard')} className="flex cursor-pointer hover:bg-gray-800 rounded">
                                                <HouseIcon /> Home
                                            </Link>
                                        </li>
                                        <li className="row-span-3">
                                            <Link href={route('profile.buy')} className="flex cursor-pointer hover:bg-gray-800 rounded">
                                                <ShoppingCartIcon /> Buy
                                            </Link>
                                        </li>
                                        <li className="row-span-3">
                                            <Link href={route('profile.sell')} className="flex cursor-pointer hover:bg-gray-800 rounded">
                                                <PlusCircle /> Sell
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenu>
                        <Link href={route('profile.buy')} className="cursor-pointer hidden sm:flex ml-2" >
                            <Button>
                                <ShoppingCartIcon />
                            </Button>
                        </Link>
                        <Link href={route('profile.sell')} className="cursor-pointer hidden sm:flex ml-2">
                            <Button>
                                <PlusCircle />
                            </Button>
                        </Link>
                    </div >


                    <div className="flex">
                        <Link href={route('logout')} method="post" as="button">
                            <Button className="hidden sm:flex ml-2">
                                <LogOutIcon />
                            </Button>
                        </Link>

                        <div className="items-center gap-2  ml-2">
                            <ModeToggle />
                        </div>

                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="cursor-pointer mx-2">
                                    <AvatarImage src="img/excha.jpeg" />
                                    <AvatarFallback>EX</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>

                                    <a href="https://instagram.com/excha_business" target="_blank">
                                        Instagram
                                    </a>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/about">About Us</Link>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <div>
                            <ProfileDropdown />
                        </div>
                    </div>
                </div >

            )
        }
        return (
            <>
                <div className="flex justify-between items-center mx-2 mt-2 sticky top-0 z-50" >
                    <div className="flex mx-1 items-center justify-evenly">
                        <Link href={route('root')} className="mx-2">
                            <img
                                src="img/exchal.png"
                                alt="Excha"
                                className="block dark:hidden  cursor-pointer w-[4rem]"
                            />
                            <img
                                src="img/excha_text_logo.png"
                                alt="Excha"
                                className="hidden dark:block cursor-pointer w-[4rem]"
                            />
                        </Link>
                        <NavigationMenu className="mx-2">
                            <NavigationMenuItem className="md:hidden">
                                <NavigationMenuTrigger>Explore</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        <li className="row-span-3">
                                            <Link href={route('dashboard')} className="flex cursor-pointer hover:bg-gray-800 rounded">
                                                <HouseIcon /> Home
                                            </Link>
                                        </li>
                                        <li className="row-span-3">
                                            <Link href={route('profile.buy')} className="flex cursor-pointer hover:bg-gray-800 rounded">
                                                <ShoppingCartIcon /> Buy
                                            </Link>
                                        </li>
                                        <li className="row-span-3">
                                            <Link href={route('profile.sell')} className="flex cursor-pointer hover:bg-gray-800 rounded">
                                                <PlusCircle /> Sell
                                            </Link>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenu>
                        <Link href={route('profile.buy')} className="cursor-pointer hidden sm:flex ml-2" >
                            <Button>
                                <ShoppingCartIcon />
                            </Button>
                        </Link>
                        <Link href={route('profile.sell')} className="cursor-pointer hidden sm:flex ml-2">
                            <Button>
                                <PlusCircle />
                            </Button>
                        </Link>
                    </div >


                    <div className="flex">
                        <Link href={route('login')}>
                            <Button className="hidden sm:flex ml-2">
                                <LogInIcon />
                            </Button>
                        </Link>

                        <div className="items-center gap-2 hidden sm:flex ml-2">
                            <ModeToggle />
                        </div>



                        <div className="md:hidden">
                            <Sheet>
                                <SheetTrigger asChild>
                                    <Button variant="outline">
                                        <MenuIcon />
                                    </Button>
                                </SheetTrigger>
                                <SheetContent>
                                    <SheetHeader>
                                        <SheetTitle>Menu</SheetTitle>
                                    </SheetHeader>
                                    <Link href={route('login')}>
                                        <Button className="my-2">
                                            <LogInIcon /> Login
                                        </Button>
                                    </Link>
                                    <br />
                                    <Link href={route('register')}>
                                        <Button className="my-2">
                                            <IdCardIcon />Register
                                        </Button>
                                    </Link>
                                    <br />
                                    <Link href={route('about')}>
                                        <Button className="my-2">
                                            About us
                                        </Button>
                                    </Link>
                                    <div className="my-2">
                                        <ModeToggle />
                                    </div>
                                    <SheetFooter>
                                        <SheetClose asChild>
                                            <Button>Close</Button>
                                        </SheetClose>
                                    </SheetFooter>
                                </SheetContent>
                            </Sheet>
                        </div>
                    </div>
                </div >
            </>
        )
    }

    return usernav()
}
