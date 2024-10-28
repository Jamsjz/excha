import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Head } from "@inertiajs/react";

export default function About() {
    return (
        <>
            <Head title="About" />
            <div className="">
                <h1 className="text-[4rem] align-middle text-center">About Us</h1>
            </div>
            <div className="flex flex-col items-center ">
                <Card className="sm:w-[50%] w-[90%] my-2">
                    <CardTitle className="text-center">
                        Kaustuv Pant
                    </CardTitle>
                    <CardContent>
                        <a href="https://instagram.com/sinkaustan" target="_blank">
                            <img src="img/kaustuv.png" alt="" />
                        </a>
                    </CardContent>
                </Card>
                <Card className="sm:w-[50%] w-[90%] my-2">
                    <CardTitle className="text-center">
                        Bhashkar Paudyal
                    </CardTitle>
                    <CardContent>
                        <a href="https://jamsjz.github.io" target="_blank">
                            <img src="img/bhashkar.png" alt="" />
                        </a>
                    </CardContent>
                </Card>
            </div>
        </>
    );

}
