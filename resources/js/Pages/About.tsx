import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
    return (
        <>
            <div className="">
                <h1 className="text-[4rem] align-middle text-center">About Us</h1>
            </div>
            <div className="flex flex-col items-center ">
                <Card className="sm:w-[50%] w-[90%] my-2">
                    <CardTitle className="text-center">
                        Kaustuv Pant
                    </CardTitle>
                    <CardContent>
                        <img src="img/kaustuv.png" alt="" />
                    </CardContent>
                </Card>
                <Card className="sm:w-[50%] w-[90%] my-2">
                    <CardTitle className="text-center">
                        Bhashkar Paudyal
                    </CardTitle>
                    <CardContent>
                        <img src="img/bhashkar.png" alt="" />
                    </CardContent>
                </Card>
            </div>
        </>
    );

}
