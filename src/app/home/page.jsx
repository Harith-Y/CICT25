"use client";

import React from "react";
import './home.css';
import InfoCards from "./InfoCards";
import { homeAboutCICT } from "../data/homeAboutCICT";
import { homeUsefulButtons } from "../data/homeUsefulButtons"
import OrganizerCards from "./OrganizerCards";

const previousOrganizersList=()=>{
    const organizerList=homeAboutCICT.previousOrganizers.map((organizers,index)=>{
        return(
            <li key={index}>
                <a href={organizers.link} target="_blank">{organizers.name}</a>
            </li>
        )
    });
    return(
        <>
            {organizerList}
        </>
    )
}

const buttonList=()=>{
    const buttons=homeUsefulButtons.map((button,index)=>{
        return(
            <a
                href={button.link}
                key={index}
            >
                <button
                    className="
                        bg-[#61CE70] text-black font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                        hover:bg-[#279E64] hover:text-white duration-200
                    "
                >
                    {button.name}
                </button>
            </a>
        )
    })
    return(
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-center mt-28">
            {buttons}
        </div>
    )
}

const Home=()=>{
    return(
    <>
    <div className="md:flex bg-[#E6F7FF] w-full h-fit px-4 py-10 md:p-0">
        <div className="flex flex-col w-fit bg-[#E6F7FF] py-8 mx-8 md:w-1/2 md:mx-20 md:my-24">
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <img className="w-2/6 md:w-1/6 slight-tilt duration-500" src="/logos/iiitdm_logo.png"/>
                <div className="text-2xl font-bold">
                    Indian Institute of Information Technology, Design and Manufacturing, Kancheepuram
                </div>
            </div>
            <div className="text-6xl font-black text-[#13287D] my-4">
                IEEE CICT 2025
            </div>
            {/* <button className="bg-[#0800F4] w-fit px-8 py-4 text-white font-bold rounded-md my-4">
                CERTIFICATES
            </button> */}
            <div className="text-lg">
                The 8th edition of the Annual IEEE International Conference on Information Communication Technology (CICT) jointly organized by all CFIIITs.
            </div>
            <div className="flex flex-col md:flex-row">
                <a href="/calls/papers">
                    <button className="
                        bg-[#279E64] text-white font-bold rounded-full px-8 py-4 border-solid border-2 border-[#279E64] md:mr-8 my-5 text-center
                        hover:bg-transparent hover:text-[#279E64] duration-200 pop
                        ">
                        CALL FOR PAPER
                    </button>
                </a>
                <a href="/calls/synopsis">
                    <button className="
                        bg-transparent text-[#13287D] font-bold rounded-full px-8 py-4 border-solid border-2 border-[#13287D] my-5 text-center
                        hover:bg-[#13287D] hover:text-white duration-200 pop
                        ">
                        CALL FOR SYNOPSIS
                    </button>
                </a>
            </div>
        </div>
        <img className="md:w-1/2 w-full" src='/home_img/institute.jpg'/>
    </div>

    <div className="pb-24 bg-[#13287D]">
        <InfoCards/>
    </div>
    
    <div className="mx-5 my-20">
        <div className="flex flex-col md:flex-row items-center justify-center w-full gap-20">
            <img className="rounded-lg" src='/temp/some.jpg' alt="Brochure"/>
            <div className="flex flex-col gap-5">
                <span className="text-[#279E64] font-bold text-xl">
                    About CICT 2025
                </span>
                <span className="text-[#13287D] font-extrabold text-3xl">
                    IEEE CICT 2025 IIITDM Kancheepuram
                </span>
                <div className="text-xl text-gray-500">
                    The International Conference on Information and Communication Technology (CICT) is an annual event organized by five Indian Institutes of Information Technology (IIITs), namely:
                    <ul className="list-disc ml-24">
                        <li>IIITDM Kancheepuram</li>
                        <li>IIIT Allahabad</li>
                        <li>PDPM-IIITDM Jabalpur</li>
                        <li>IIITDM Kurnool</li>
                        <li>Atal Bihari Vajpayee Indian Institute of Information Technology and Management (ABV-IIITM) Gwalior</li>
                    </ul>
                    All these institutes are fully funded by the Government of India, and the conference venue rotates among them in a round-robin fashion.
                    Since its inception, CICT has been technically and financially co-sponsored by IEEE, with all past eight editions having their proceedings available on IEEE Xplore. Additionally, prestigious government organizations like DST, ISRO, DRDO, CSIR, and several private companies have provided financial support, further strengthening the conference’s impact and outreach in the field of Information and Communication Technology (ICT).
                </div>
                <div className="text-[#13287D] font-bold">
                    Previous Edition of CICT:
                    <a href="https://ieeexplore.ieee.org/xpl/conhome/1823245/all-proceedings" target="_blank">
                        <button className="
                            bg-[#61CE70] text-black font-bold rounded-full mx-4 px-8 py-4 md:mr-8 my-5 text-center
                            hover:bg-[#279E64] hover:text-white duration-200
                        ">
                            ieeeXplore Link
                        </button>
                    </a>
                </div>
                <ul className="text-black text-lg list-disc marker:text-[#61CE70] marker:text-2xl pl-8">
                    {previousOrganizersList()}
                </ul>
            </div>
        </div>
        {buttonList()}
    </div>

    <div className="flex flex-col items-center bg-[#279E64] rounded-xl pb-40">
        <img className="w-2/6 md:w-1/12 mb-5 mt-16 slight-tilt duration-500" src="/logos/iiitdm_white.png"/>
        <div className="text-center text-white text-3xl font-bold">
            Organizing Institutes<br/>
            CICT 2025
        </div>
        <div className="text-center text-white text-xl font-bold mt-10 mb-2">
            Organizers & Co-Organizers
        </div>
    </div>
    <OrganizerCards/>
    <div>
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4083.458581912919!2d80.13489620547216!3d12.839539742543696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525851fbcd3b6b%3A0x9f1067aa71e3898e!2sIndian%20Institute%20of%20Information%20Technology%2C%20Design%20and%20Manufacturing%2C%20Kancheepuram!5e0!3m2!1sen!2sin!4v1738208729609!5m2!1sen!2sin" 
            className="w-full h-96 border-0"
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>
    </div>
    <div className="flex justify-center">
        <div className="max-w-[70rem] relative -top-28 mt-10 mx-10 grid grid-cols-2 md:grid-cols-3 rounded-xl overflow-hidden bg-white">
            <div className="flex py-5 px-20 bg-yellow-500 justify-center col-span-2 md:col-span-1">
                <img className="w-32 aspect-square" src="/logos/iiitdm.png"/>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center border-solid border-r-[1px] pt-5 pb-10 px-10 gap-2">
                <div className="text-5xl text-[#279E64] pr-2 shake">
                    &#9993;
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <p>Main Email: cict@iiitdm.ac.in</p>
                    <p>Inquiries: cict@iiitdm.ac.in</p>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center border-solid border-l-[1px] pt-5 pb-10 px-10 gap-2">
                <div className="text-5xl text-[#279E64] shake pr-2">
                    &#9743;
                </div>
                <div className="text-sm flex flex-col gap-2">
                    <p>Office Telephone: </p>
                    <p>Mobile: </p>
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default Home
