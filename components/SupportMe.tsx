import React from 'react';
import {BsInstagram} from "react-icons/bs";
import bg from "../public/images/SupportMeBg.jpg";
import patreon from "../public/images/patreon.png";
import paypal from "../public/images/paypal.webp";
import Image from 'next/image';

const SupportMe = () => {
    return (
        <div className='my-10'>
            <div className='flex flex-col items-center mb-8'>
                <h4>Follow me on Instagram</h4>
                <div className='uppercase flex items-center text-3xl text-secondaryColor font-titleFont font-bold gap-x-2 mt-1'>
                    <BsInstagram/>
                    <h1>ki_shakib</h1>
                </div>
            </div>
            <div 
                style={{ backgroundImage: `url(${bg.src})`, }}
                className='bg-cover bg-center bg-fixed lg:h-[600px] h-[650px] w-full'
            >
            <div className='lg:h-[600px] h-[650px] w-full backdrop-brightness-50 bg-bgColor/10 text-white'>
                <h2 className='uppercase text-center text-4xl font-bold font-titleFont tracking-wider lg:pt-28 pt-4'>Support Me</h2>
                <div className='flex lg:flex-row flex-col items-center justify-center w-2/3 mx-auto gap-x-10 gap-y-10 text-center lg:pt-16'>
                    <div className='lg:h-48 flex flex-col items-center justify-between gap-y-4'>
                        <Image src={patreon} className='w-36 h-14' alt='Patreon'/>
                        <h3>If you want to help me fund the blog, become a producer and potentially some fun other perks. Much love for all the support and thanks for sticking with me.</h3>
                        <button className="uppercase text-sm font-bold px-4 py-2 tracking-wider hover:bg-transparent hover:text-white hover:outline active:bg-secondaryColor bg-white rounded-full text-black transition-all duration-300">
                            More info
                        </button>
                    </div>
                    <div className='lg:h-48 flex flex-col items-center justify-between gap-y-4'>
                        <Image src={paypal} className='w-36 h-14' alt='Paypal'/>
                        <h3>If you would like to support the show at your discretion, please click the donation button below. Your support and generosity is very much appreciated.</h3>
                        <button className="uppercase text-sm font-bold px-4 py-2 tracking-wider hover:bg-transparent hover:text-white hover:outline active:bg-secondaryColor bg-white rounded-full text-black transition-all duration-300">
                            Donate
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default SupportMe;