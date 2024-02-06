"use client";
import SponsorCard from "@/app/Components/SponsorCard";
import { Button } from "flowbite-react";
import Image from "next/image";


const Platinum = [{
    text: "The Michigan College of Engineering strives to anticipate the changes ahead and provide scientific and technological leadership - for the common good. Michigan Engineering is home to top-ranked departments that collaborate within the nation's number one public research institution - The University of Michigan.",
    name: "Skater",
    zone: "Platinum",
    image: "/Sponsors/Platinum/Skater.png",
    learnMore: "31 hp",
},{
    text: "The Michigan NAME Department trains naval architects and marine engineers who lead, setting the global standard for design and research in every endeavor that touches water.",
    name: "Liberator Boats",
    zone: "Platinum",
    image: "/Sponsors/Platinum/Liberator_Logo.png",
    learnMore: "31 hp",
},{
    text: "EY provides consulting, assurance, tax and transaction services that help solve challenges and build a better working world for all. The insights and services EY provides helps to create long-term value for society and to build trust in the capital markets.",
    name: "EY",
    zone: "Platinum",
    image: "/Sponsors/Platinum/EY.png",
    learnMore: "31 hp",
}, {
    text: "Cadence is a pivotal leader in electronic systems design, building upon more than 30 years of computational software expertise. Cadence applies its underlying Intelligent System Design strategy to deliver software, hardware, and IP that turn design concepts into reality.",
    name: "Cadence",
    zone: "Platinum",
    image: "/Sponsors/Platinum/Cadence.png",
    learnMore: "31 hp",
},{
    text: "The UM College of Engineering strives to provide scientific and technological leadership for the common good. Michigan Engineering is home to top-ranked departments that collaborate within the nation's number one public research institution - The University of Michigan.",
    name: "University of Michigan College of Engineering",
    zone: "Platinum",
    image: "/Sponsors/Platinum/COE.png",
    learnMore: "31 hp",
},{
    text: "The UM Naval Architecture and Marine Engineering (NAME) Department is a world leader in the education of engineers for the marine environment, and provides leadership and service to the state, national, and international marine community.",
    name: "University of Michigan Department of Naval Architecture and Marine Engineering",
    zone: "Platinum",
    image: "/Sponsors/Platinum/NAME.png",
    learnMore: "31 hp",
},{
    text: "McNaughton-McKay Electric Company is a wholesale electrical distributor serving markets in Michigan, Ohio, Georgia, North Carolina and South Carolina. MM offers a full line of products ranging from pipe and wire to complex automation control systems.",
    name: "Mcnaughton Mckay",
    zone: "Platinum",
    image: "/Sponsors/Platinum/McNaughton.png",
    learnMore: "31 hp",
},]

const Gold = [{
    text: "Axial flux e-motors are the next step in electric propulsion solutions. Used in marine, aviation, automotive and racing industries across the globe. Beyond Motors have the best continuous power-to-weight ratio on the market, and work in the most robust applications.",
    name: "Beyond Motors",
    zone: "Gold",
    image: "/Sponsors/Gold/Beyond.png",
    learnMore: "",
}]

const Silver = [{
    url: "/Sponsors/Silver/ASNE.png",
},{
    url: "/Sponsors/Silver/Ford.png",
},{
    url: "/Sponsors/Silver/GM.png",
},{
    url: "/Sponsors/Silver/CSE.png",
},{
    url: "/Sponsors/Silver/MaterialsSolutions.png",
},{
    url: "/Sponsors/Silver/18650Battery.png",
}]

const Bronze = [{
    url: "/Sponsors/Bronze/Eecs.png",
},{
    url: "/Sponsors/Bronze/MechE.png",
},{
    url: "/Sponsors/Bronze/BruceRosenblatt.png",
},{
    url: "/Sponsors/Bronze/NuclearEngineering.png",
},{
    url: "/Sponsors/Bronze/Evolve.png",
},{
    url: "/Sponsors/Bronze/Rincon.png",
},{
    url: "/Sponsors/Bronze/Sabelt.png",
}]


export default function Home() {
    return (
        <>
            <div className="relative">
                <img src="/images/OurSponsors.JPG" className="w-full h-screen object-cover" alt="Sponsors" />
                <div className="absolute inset-0 flex items-center justify-center bg-blue-800 opacity-30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2">
                    <h1 className="text-white lg:text-6xl text-4xl font-bold">Our Sponsors</h1>
                    <Button gradientDuoTone={"purpleToPink"} outline>Sponsor Us</Button>
                </div>
            </div>
            <div className={"bg-[url('/images/OurSponsorsBG.png')] bg-repeat tracking-wide"}>
            <div>
                {/*<Image src="/images/OurSponsorsBG.png" alt="bg" fill={true}/>*/}
                <div className="flex flex-col py-5">
                    <h1 className="lg:text-6xl text-4xl text-center font-bold">
                        Thank you to our Sponsors!
                    </h1>
                    <div className={"flex justify-center py-10"}>
                        <div className={"w-full md:w-1/2 text-center"}>
                            <p className={"text-normal lg:text-xl"}>
                                The University of Michigan Electric Boat team was founded in 2020, yet we have already placed 2nd in the national PEP competition. Such a feat was only possible due to the hard work of our members as well as the generous contributions of current sponsors. We have only just begun our journey and are looking for corporate and private partners to help build our organization together.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="text-center p-10">
                    <h1 className="lg:text-6xl text-4xl  font-bold"> Platinum Sponsors</h1>
                    <div>
                        {Platinum.map((sponsor: { text: any; name: any; zone: any; image: any; learnMore: any; }, index: any) => (
                            <SponsorCard
                                key={index}
                                text={sponsor.text}
                                name={sponsor.name}
                                learnMore={sponsor.learnMore}
                                image={sponsor.image}
                                zone={sponsor.zone}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center p-10">
                    <h1 className="lg:text-6xl text-4xl  font-bold">Gold Sponsors</h1>
                    <div>
                        {Gold.map((sponsor: { text: any; name: any; zone: any; image: any; learnMore: any; }, index: any) => (
                            <SponsorCard
                                key={index}
                                text={sponsor.text}
                                name={sponsor.name}
                                learnMore={sponsor.learnMore}
                                image={sponsor.image}
                                zone={sponsor.zone}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
                <div className="text-center p-10">
                    <h1 className="lg:text-6xl text-4xl pb-20 font-bold"> Silver Sponsors </h1>
                    <div className={"grid md:grid-cols-3 gap-5 lg:px-20 md:px-10"}>
                        {Silver.map((sponsor: { url: any}) => (
                            <div key={0} className={"flex justify-center"}>
                                <img src={sponsor.url} alt={"Sponsor"} className={"object-scale-down h-64"}></img>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center p-10">
                    <h1 className="lg:text-6xl text-4xl pb-20 font-bold"> Bronze Sponsors </h1>
                    <div className={"grid md:grid-cols-4 gap-5 lg:px-20 md:px-10"}>
                        {Bronze.map((sponsor: { url: any}) => (
                            <div key={0} className={"flex justify-center"}>
                                <img src={sponsor.url} alt={"Sponsor"} className={"object-scale-down h-64"}></img>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex lg:flex-row flex-col">
                    <div className="lg:w-1/3 w-full p-2">
                        <h1 className="text-4xl font-bold lg:text-right text-center justify-center">
                            Become A Sponsor
                        </h1>
                    </div>
                    <div className="lg:w-2/3 w-full lg:px-40 py-2 px-5">
                        <p className="lg:text-xl lg:text-left text-center">
                            UM Electric Boat was founded with a commitment to testing alternative, cleaner forms of energy in the maritime industry. As such, we partner with organizations that believe in our mission and want to invest in new naval technologies.
                        </p>
                    </div>
                </div>
                <div className={"flex justify-center py-10"}>
                    <Button gradientDuoTone={"purpleToPink"} outline>
                        <p className={"md:text-2xl text-xl font-bold"}>
                            How to Become a UMEB Sponsor
                        </p>
                    </Button>
                </div>
            </div>
        </div>
        </>
    );
}