"use client";

import  CustomCarousel  from "../Components/CustomCarousel";
import LeaderShip from "../Components/Leadership";
import TeamLeader from "../Components/TeamLeader";
import teamleader from "../Components/TeamLeader"

const officers = [{
  title: "CAPTAIN",
    name: "Arend Vyn",
    bio: "Arend joined UMEB at first to better understand and learn about what goes into the engineering process. Being a part of the process to create a complex, powerful vehicle with peers and friends is why Electric Boat has been such a big part of his life thus far. Arend is looking forward to working with the team again to design and engineering the most powerful electric boat the world has seen, and have fun doing it.",
    image: "/Members/Arend.JPG",
    info: "Mechanical Engineering | 2025"
}, {
  title: "CHIEF ENGINEER",
    name: "Caroline Kahwati",
    bio: "Caroline joined UMEB to get hands-on experience with an engineering challenge. She enjoys being a part of the process from the design stage to manufacturing the final product and learning from encountered roadblocks to improve future processes. Caroline recognizes the importance of sustainable technologies and enjoys the opportunity to work with electric powertrain systems. Outside of UMEB she enjoys running and watching Michigan sports.",
    image: "/Members/Caroline.jpeg",
    info: "NAME | 2025"
}]

const teamleaders = [{
  title: "MECHANICAL DIRECTOR",
    name: "Evan Branson",
    team: "Meet the Mechanical Team",
    image: "/Members/Evan.jpg",
    info: "Robotics Engineering | 2024"
}, {
  title: "ELECTRICAL DIRECTOR",
    name: "Michael Sharashenidze",
    team: "Meet the Electrical Team",
    image: "/Members/Michael.png",
    info: "Electrical Engineering | 2024"
},
{
  title: "BUSINESS DIRECTOR",
    name: "Prahlad Pant",
    team: "Meet the Business Team",
    image: "/Members/Prah.png",
    info: "Business Administration | 2026"
},
{
  title: "OPERATIONS DIRECTOR",
    name: "Lyn Tran",
    team: "Meet the Operations Team",
    image: "/Members/Prah.png",
    info: "NAME | 2026"
}]

const consultants = [{
  title: "WEB DESIGN & DEVELOPMENT",
    name: "Alec Palo",
    team: "",
    image: "/Members/Arend.JPG",
    info: "Computer Science & Business | 2024"
}, {
  title: "WEB DEVELOPMENT",
    name: "Grace Dwyer",
    team: "",
    image: "/Members/Caroline.jpeg",
    info: "SoI - Information Analytics | 2023"
}, {
  title: "HEAD FACULTY ADVISOR",
    name: "Krzysztof Fidkowski",
    team: "",
    image: "/Members/Caroline.jpeg",
    info: "Associate Professor, Graduate Program Chair | Aerospace Engineering Department"
}]


export default function Home() {
  var images = ["/images/cadence.png", "/images/Ford.png", "/images/OurBoats.png"]
    return (
      <><div className='relative'>
        <img src="/images/OurTeams.png" className='w-full h-screen object-cover'></img>
        <div className="absolute inset-0 bg-blue-800 opacity-30"></div>
      </div>
      <div className="p-10">
        <CustomCarousel></CustomCarousel>
      </div>
      <h1 className="font-bold text-5xl py-5 flex items-center justify-center"> Meet Our LeaderShip Team </h1>
      <div className="p-10">
        {officers.map((leader: { title: any; name: any; bio: any; image: any; info: any; }, index: any) => (
          <LeaderShip
            key={index}
            title={leader.title}
            name={leader.name}
            bio={leader.bio}
            image={leader.image}
            info={leader.info}
          />
        ))}
      </div>
      <div className="flex justify-center items-center p-2 text-center pt-10">
        {teamleaders.map((leader: any, index: any) => (
          <TeamLeader
            key={index}
            title={leader.title}
            name={leader.name}
            team={leader.team}
            image={leader.image}
            info={leader.info}
          />
        ))}
      </div>
      <h1 className="font-bold text-5xl py-5 flex items-center justify-center pt-10"> Meet Our Consultants </h1>
      <div className="flex flex-wrap justify-center items-start p-2 text-center pt-10">
        {consultants.map((leader: any, index: any) => (
          <TeamLeader
            key={index}
            title={leader.title}
            name={leader.name}
            team={leader.team}
            image={leader.image}
            info={leader.info}
          />
        ))}
      </div>
      <h1 className="font-bold text-5xl pt-20 py-5 flex items-center justify-center"> Our Alumni </h1>
      <div className="flex flex-col justify-center items-center">
      <p className="text-center max-w-prose text-2xl">These are only some of the prestigious firms that UMEB alumni have gone on to work for after graduation. UMEB members have pursued career opportunities across a diverse array of industries including naval architecture, automotive, aerospace, investment banking, consulting, and many more. UMEB has an extensive network and mentorship opportunities for students across all majors and passions.</p>

      </div>
      </>
    )
  }