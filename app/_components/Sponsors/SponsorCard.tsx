"use client";
import React from "react";
import { Button } from "flowbite-react";
import Image from "next/image";

interface SponsorCardProps {
    link: string;
    name: string;
    image: string;
    text: string;
    index: any;
}

const SponsorCard: React.FC<SponsorCardProps> = ({ link, name, image, text, index }) => {
    const changeSides = index % 2 === 0;

    const containerClass ='flex lg:flex-row flex-col relative flex-row-reverse relative hover:shadow-xl shadow-sm bg-white p-4 transition-transform transform duration-500 ease-in-out hover:scale-105 rounded-lg';
    return (
        <>
            <div className="lg:px-20 md:px-10 sm:px-5 py-5">
                <div className={containerClass}>
                    <div className="w-full lg:w-1/3 md:relative">
                        <div className="lg:absolute inset-0 flex justify-center">
                            <Image
                                src={image}
                                alt="image"
                                className="rounded-lg object-scale-down"
                                width={300}
                                height={300}
                            />
                        </div>
                    </div>
                    <div className="lg:w-2/3 w-full text-left px-5 flex-col">
                        <div className={"pb-2"}>
                            <h2 className="text-2xl font-bold">
                                {name}
                            </h2>
                        </div>
                        <div className={"pb-5"}>
                            <p className="text-xl">
                                {text}
                            </p>
                        </div>
                        <div className={"flex justify-end"}>
                            <Button gradientDuoTone={"purpleToPink"} outline href={link}>Learn More</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponsorCard;