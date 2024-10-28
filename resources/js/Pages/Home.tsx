import { Button } from "@/components/ui/button";
import { Head, Link, usePage } from "@inertiajs/react";
import Dashboard from "./Dashboard";


export default function Home() {
    const user = usePage().props.auth.user;
    const userhome = () => {
        if (user) {
            return (
                <>
                    <Dashboard />
                </>
            )
        }
        return (
            <>
                <Head title="Home" />
                {/* Mobile */}
                <div className="flex sm:hidden flex-col items-center justify-center mx-4">
                    <div className="flex  items-center justify-center my-7 text-[#C8D208] text-[28px] font-canva">
                        <div className="font-bold">
                            Your next favorite book
                        </div>
                        <div className="flex">
                            <div className="font-bold ">
                                is an
                            </div>
                            <div className="font-bold ml-2 text-[#D69C9C]">
                                EXCHA
                            </div>
                            <div className="font-bold">
                                nge away.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <button className="bg-[#5CE1E6] text-[#13171F] text-[18px] rounded-full px-4 py-2 font-extrabold font-canva">
                            <Link href={route('register')}>Register
                            </Link> /
                            <Link href={route('login')}> Login
                            </Link>
                        </button>

                        <Link href={route('about')}><p className="font-fredoka font-bold text-[13px] my-1">To know more about us, click here.</p></Link>
                    </div>

                    <div className="flex  flex-col my-4">
                        <img src="/img/maninchair.png" alt="wow" />
                        <div className="flex flex-col items-center justify-center my-7 font-canva">
                            <p>
                                We aim to make it easier for students
                            </p>
                            <p>
                                to buy second-hand books.
                            </p>
                        </div>
                    </div>

                    <div className="text-[#F27F4F] text-[31px] font-bold font-canva">
                        <h1>How to use?</h1>
                    </div>
                </div>

                {/* // Tablet */}
                <div className="hidden tablet:block">
                    <div className="flex flex-col items-center  mx-4">
                        <div className="flex flex-col mt-7 text-[#C8D208] text-[55px] font-canva">
                            <h1 className="font-bold">
                                Your next favorite book is
                            </h1>
                            <div className="flex">
                                <h1 className="font-bold ">
                                    an
                                </h1>
                                <h1 className="font-bold ml-2 text-[#D69C9C]">
                                    EXCHA
                                </h1>
                                <h1 className="font-bold">
                                    nge away.
                                </h1>
                            </div>
                        </div>

                        <div className="font-cooper my-2 mr-14 text-[22px] font-bold">
                            <p>
                                We aim to make it easier for students to buy second-hand books.
                            </p>
                            <p>
                                Register below to get started.
                            </p>
                        </div>

                        <div className="flex justify-between ml-14  my-5">
                            <div className="flex item-center justfiy-center flex-col w-2/4">
                                <button className="bg-[#5CE1E6] text-[#13171F] text-[18px] rounded-full py-2 font-bold font-canva mt-10">
                                    Click here to
                                    <Link href={route('register')}> Register
                                    </Link> /
                                    <Link href={route('login')}> Login
                                    </Link>
                                </button>
                                <Link href={route('about')}><p className="font-fredoka font-bold text-[15px] my-2 mx-3">To know more about us, click here</p></Link>
                            </div>
                            <img src="/img/maninchair.png" alt="wow" className="w-3/4" />
                        </div>

                    </div>
                    <div className="text-[#F27F4F] text-[50px] font-bold font-canva mx-14 ">
                        <h1>How to use?</h1>
                    </div>
                </div>

                {/* Laptop */}
                <div className="hidden laptop:block ">
                    <div className="flex flex-row items-center mx-4 justify-evenly mt-14">
                        {/* left */}
                        <div>
                            <div className="flex flex-col mt-7 text-[#C8D208] text-[60px] font-bold font-canva">
                                <h1>
                                    Your next favorite book is
                                </h1>
                                <div className="flex">
                                    <h1 >
                                        an
                                    </h1>
                                    <h1 className="ml-2 text-[#D69C9C]">
                                        EXCHA
                                    </h1>
                                    <h1 >
                                        nge away.
                                    </h1>
                                </div>

                            </div>
                            <div className="font-cooper my-2 mr-14 text-[24px] font-bold">
                                <p>
                                    We aim to make it easier for students to buy second-hand books.
                                </p>
                                <p>
                                    Register below to get started.
                                </p>
                            </div>
                            <div className="flex item-center justfiy-center flex-col w-2/4">
                                <button className="bg-[#5CE1E6] text-[#13171F] text-[24px] rounded-full py-3 font-bold font-canva mt-10">
                                    Click here to
                                    <Link href={route('register')}> Register
                                    </Link> /
                                    <Link href={route('login')}> Login
                                    </Link>
                                </button>
                                <Link href={route('about')}><p className="font-fredoka font-bold text-[20px] my-2 mx-3">To know more about us, click here</p></Link>
                            </div>
                        </div>
                        {/* right */}
                        <div className="">
                            <img src="/img/maninchair.png" alt="wow" className="w-[900px]" />
                        </div>
                    </div>
                    <div className="text-[#F27F4F] text-[90px] font-bold font-canva mx-14 ">
                        <h1>How to use?</h1>
                    </div>

                </div>



            </>
        )
    }
    return (
        userhome()
    )
}
