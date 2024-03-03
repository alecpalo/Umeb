"use client";

import TitlePhoto from "@/app/_components/TitlePhoto";
import React from "react";
import Youtube from 'react-youtube';
import Button from "../_components/Button";
import Image from 'next/image';


const titlePhoto = "/TitlePhotos/OurRaces.jpg?v=2"
const titleText = "Our Races"
export default function Home() {
    return (
        <>
            <TitlePhoto title={titleText} image={titlePhoto}/>
            <div className="w-full bg-stone-100">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
                    <div className={"lg:w-1/4 w-full flex justify-center p-5 lg:p-0 relative order-last lg:order-first"}>
                        <Image src={"/Races/PEP.JPG"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                    <div className={"w-full lg:w-1/2 px-5 lg:px-0 lg:pl-8 tracking-tight leading-relaxed"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            Promoting Electric Propulsion - April 2024
                        </h1>
                        <p className={"text-lg lg:text-xl text-blue-950"}>
                            UM Electric Boat has participated in the &apos;Promoting Electric Propulsion&apos; competition since 2021, consistently competing against top engineering schools nationwide. In 2021, UMEB secured second place in a heat of 10+ teams, showcasing prowess in both manned and unmanned races. In June of 2023, UMEB and our fellow competitors were tasked with completing a 5-mile race over 5 laps in a short out-and-back circuit.
                        </p>
                        <p className={"text-lg lg:text-xl text-blue-950 pt-5"}>
                            The team aims to continue this tradition, aiming for even better results in 2024. The competition&apos;s flexible rules and talented competitors enable us to push boundaries and create innovative designs.
                        </p>
                        <div className={"py-2 flex md:justify-end justify-center"}>
                            <Button width={64} text={"Check Out PEP!"} href={"https://www.navalengineers.org/Education/Promoting-Electric-Propulsion-PEP"}></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
                    <div className={"w-full lg:w-1/2 px-5 lg:px-0 lg:pr-8 tracking-tight leading-loose"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            Lake of the Ozarks Shootout - August 2024
                        </h1>
                        <p className={"text-lg lg:text-xl text-blue-950"}>
                            The Lake of the Ozarks Shootout (LOTO) stands out as a thrilling annual spectacle for boat racing enthusiasts at the Lake of the Ozarks in Missouri, USA. Renowned as one of the largest unsanctioned boat races in the world, it&apos;s an event that showcases the sheer speed and power of high-performance boats. Racing boats regularly break speeds of over 200 mph, with the top speed recorded at 244 mph in 2014.
                        </p>
                        <p className={"text-lg lg:text-xl text-blue-950 pt-5"}>
                            UMEB will be attending LOTO this summer and racing as one of the few electric boats, with hopes of breaking records for the fastest electric boat to compete at LOTO.
                        </p>
                        <div className={"py-2 flex md:justify-start justify-center"}>
                            <Button text={"Check Out LOTO!"} width={64} href={"https://www.navalengineers.org/Education/Promoting-Electric-Propulsion-PEP"}></Button>
                        </div>
                    </div>
                    <div className={"lg:w-1/4 w-full p-5 lg:p-0 relative flex lg:justify-end justify-center"}>
                        <Image src={"/Races/Ozark.jpg"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                </div>
            </div>
            <div className="w-full bg-stone-100">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2 md:py-4 "}>
                    <div className={"lg:w-1/4 w-full flex justify-center p-5 lg:p-0 relative order-last lg:order-first"}>
                        <Image src={"/Races/Wye.png"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                    <div className={"w-full lg:w-1/2 px-5 lg:px-0 lg:pl-8 tracking-tight leading-loose"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 md:text-2xl sm:text-xl font-extrabold pb-2"}>
                            Wye Island Electric Boat Marathon
                        </h1>
                        <p className={"text-lg lg:text-xl text-blue-950"}>
                            To prepare ourselves for higher endurance races, UM Electric Boat will compete in the Wye Island Challenge. The challenge consists of a 24 mile course with 8 miles of open water in the Chesapeake Bay, and 16 miles of sheltered water around Wye Island itself.
                        </p>
                        <p className={"text-lg lg:text-xl text-blue-950 pt-5"}>
                            The team’s goals for this challenge are to demonstrate TiDE’s range at speed, and preparing for longer competitions in the future.
                        </p>
                        <div className={"py-2 flex md:justify-end justify-center"}>
                            <Button width={64} text={"Check Out Monaco!"} href={"https://www.electricboats.org/wye-island-challenge"}></Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white">
                <div className={"w-full flex flex-col lg:flex-row justify-center items-center lg:py-6 py-2"}>
                    <div className={"w-full lg:w-1/2 pr-2 lg:pr-8 px-5 lg:px-0 tracking-tight leading-loose"}>
                        <h1 className={"text-2xl lg:text-4xl text-blue-900 font-extrabold pb-2"}>
                            Monaco Energy Boat Challenge - July 2025
                        </h1>
                        <p className={"text-lg lg:text-xl text-blue-950"}>
                            UM Electric Boat plans to attend the Monaco Energy Boat Challenge in the summer of 2025. The event gathers more than 50 teams from universities and companies worldwide. The competition seeks to further innovation in alternative propulsion fuel sources such as solar, hydrogen, wind, and more.
                        </p>
                        <p className={"text-lg lg:text-xl text-blue-950 pt-5"}>
                            UMEB plans on competing in the Sea Lab, which is a new competition specifically for novel prototypes and new designs. The team also plans on demonstrating our best speed at range in the E-Boat Rally, which is a 21 nautical mile trip between Port Hercules in Monaco and Cala del Forte in Ventimiglia in Italy.
                        </p>
                        <div className={"py-2 flex md:justify-start justify-center"}>
                            <Button width={64} text={"Check Out Monaco!"} href={"https://energyboatchallenge.com/"}></Button>
                        </div>
                    </div>
                    <div className={"lg:w-1/4 w-full p-5 lg:p-0 relative flex lg:justify-end justify-center"}>
                        <Image src={"/Races/Monaco.jpg"} alt={"Image Not Found"} width={500} height={500} className={"object-scale-down"}></Image>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center bg-blue-950 py-10">
                <Youtube videoId="kEx7j_lCZ-k" ></Youtube>
            </div>
        </>
    )
  }