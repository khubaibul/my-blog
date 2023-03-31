import React from 'react';
import {BsInstagram} from "react-icons/bs";
import bg from "../public/images/SupportMeBg.jpg";
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
                className='bg-cover bg-fixed h-[600px] w-full bg-opacity-60'
            >
            <div className='h-[600px] w-full'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis atque inventore recusandae nisi error, ab, quo dolorem itaque vitae cum ullam illum animi. Magni, dolore?</p>
            </div>
            </div>
        </div>
    );
};

export default SupportMe;