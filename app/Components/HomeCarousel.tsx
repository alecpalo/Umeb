"use client";

import Image from 'next/image';
import { Carousel } from 'flowbite-react';

interface CustomCarouselProps {
}

const carouselInfo = [
    {
        title: "Collaboration",
        text:
            "No one member is capable of creating such an ambitious project on their own. UMEB members thrive in the pursuit of over 15 different majors across an array of different colleges and apply the knowledge they learn from said classes on our boat.",
        image: "/Home/Collaboration.JPG",
    },
    {
        title: "Innovation",
        text:
            "No idea is a bad idea. UMEB is a safe place to take risks and fully unleash one's creativity. We offer a chance for members to apply their theoretical skills to an actual project. Of course, with a chance to add their own twist of creativity as well.",
        image: "/Home/Innovation.png",
    },
    {
        title: "Adaptability",
        text:
            "UMEB does not settle for less. As such, our designs are ambitious, and our timeline is tight. We often face many setbacks, but we remain undeterred. Adaptability is an integral part of who we are, and it allows us to strive for greatness. We were founded in the uncertain times that were the pandemic, but have grown to what we are today.",
        image: "/Home/adapt.JPG",
    },
    {
        title: "Sustainability",
        text:
            "Our vessel will be powered by electrical energy, proving its capabilities in marine applications. We aim to advance eco-friendly marine transportation solutions, contributing to a cleaner and more sustainable future for our waterways.",
        image: "/Home/Sustainability.JPG",
    },
];

const HomeCarousel: React.FC<CustomCarouselProps> = () => {
    return (
            <Carousel slideInterval={5000}>
                <div className="w-full h-full">
                    <Image src={carouselInfo[0].image} alt="temp" fill={true} className={"object-cover"}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="md:text-4xl text-2xl lg:text-left text-center font-bold text-white">{carouselInfo[0].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-80 md:px-20 px-2">
                        <p className="text-center md:text-2xl text-xl text-white">{carouselInfo[0].text}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image src={carouselInfo[1].image} alt="temp" fill={true} className={"object-cover"}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="md:text-4xl text-2xl font-bold lg:text-left text-center text-white">{carouselInfo[1].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-80 md:px-20 px-2">
                        <p className="text-center md:text-2xl text-xl text-white">{carouselInfo[1].text}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image src={carouselInfo[2].image} alt="temp" fill={true} className={"object-cover"}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="md:text-4xl text-2xl lg:text-left text-center font-bold text-white">{carouselInfo[2].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-80 md:px-20 px-2">
                        <p className="text-center md:text-2xl text-xl text-white">{carouselInfo[2].text}</p>
                    </div>
                </div>
                <div className="w-full h-full">
                    <Image src={carouselInfo[3].image} alt="temp" fill={true} className={"object-cover"}/>
                    <div className="absolute inset-0 bg-black opacity-40"></div>
                    <div className="absolute top-8 left-10 py-3">
                        <h2 className="md:text-4xl text-2xl lg:text-left text-center font-bold text-white">{carouselInfo[3].title}</h2>
                    </div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center lg:px-80 md:px-20 px-2">
                        <p className="text-center md:text-2xl text-xl text-white">{carouselInfo[3].text}</p>
                    </div>
                </div>
            </Carousel>
    );
}

export default HomeCarousel;