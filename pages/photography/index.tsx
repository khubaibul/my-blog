import React from "react";
import { FaCalendar, FaCamera, FaLocationArrow, FaTimes } from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BAU from "../../public/images/BAU.png";
import Cox from "../../public/images/Cox's_Bazar.jpg";
import Crop_Field from "../../public/images/Crop_Field.jpg";
import Fruits from "../../public/images/Fruits.jpg";
import Mosque from "../../public/images/Mosque.jpg";
import Majar from "../../public/images/Majar-Sharif.jpg";
import My_School from "../../public/images/My_School.jpeg";
import TigerPass from "../../public/images/Tiger_Pass.jpg";
import ZACS from "../../public/images/ZACS.jpeg";
import Image from "next/image";
import Link from "next/link";

const index = () => {
  return (
    <div>
      <Header />
      <h1 className="text-3xl">My Clickz 📸</h1>
      <div className="flex flex-col gap-y-10 pt-10">
        <div className="grid grid-cols-11 gap-8 px-10">
          <Link
            href={""}
            className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-4"
          >
            <figure>
              <Image
                className=""
                src={BAU}
                loading={"eager"}
                alt="bannerImgOne"
              />
            </figure>
            <div className=" absolute inset-0 transition-opacity duration-200 bg-purple-600 bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center p-10">
              <div className="w-full text-center text-purple-600 bg-bgColor opacity-90 p-5">
                <div className="flex justify-start items-center gap-0">
                  <FaLocationArrow className="text-4xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Bangladesh Agriculture University, Mymensingh, Bangladesh
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCamera className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Xiaomi Redmi7
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCalendar className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    24 December 2021
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={""}
            className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-3"
          >
            <figure>
              <Image
                className=""
                src={Cox}
                loading={"eager"}
                alt="bannerImgOne"
              />
            </figure>
            <div className=" absolute inset-0 transition-opacity duration-200 bg-purple-600 bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center p-10">
              <div className="w-full text-center text-purple-600 bg-bgColor opacity-90 p-5">
                <div className="flex justify-start items-center gap-0">
                  <FaLocationArrow className="text-4xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Cox's Bazar Sea Beach, Cox's Bazar, Bangladesh
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCamera className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Xiaomi Redmi7
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCalendar className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    17 August 2023
                  </h3>
                </div>
              </div>
            </div>
          </Link>
          <Link
            href={""}
            className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-4"
          >
            <figure>
              <Image
                className=""
                src={Crop_Field}
                loading={"eager"}
                alt="bannerImgOne"
              />
            </figure>
            <div className=" absolute inset-0 transition-opacity duration-200 bg-purple-600 bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center p-10">
              <div className="w-full text-center text-purple-600 bg-bgColor opacity-90 p-5">
                <div className="flex justify-start items-center gap-0">
                  <FaLocationArrow className="text-4xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Countryside, Pekua, Cox's Bazar Bangladesh
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCamera className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Yashica Junior MK-11
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCalendar className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    28 November 2020
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-8 px-10">
          <Link
            href={""}
            className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-2"
          >
            <figure>
              <Image
                className="h-[497px]"
                src={Fruits}
                loading={"eager"}
                alt="bannerImgOne"
              />
            </figure>
            <div className=" absolute inset-0 transition-opacity duration-200 bg-purple-600 bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center p-10">
              <div className="w-full text-center text-purple-600 bg-bgColor opacity-90 p-5">
                <div className="flex justify-start items-center gap-0">
                  <FaLocationArrow className="text-4xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Bangladesh Agriculture University, Mymensingh, Bangladesh
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCamera className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Xiaomi Redmi7
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCalendar className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    24 December 2021
                  </h3>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href={""}
            className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-2"
          >
            <figure>
              <Image
                className=""
                src={Mosque}
                loading={"eager"}
                alt="bannerImgOne"
              />
            </figure>
            <div className=" absolute inset-0 transition-opacity duration-200 bg-purple-600 bg-opacity-40 opacity-0 hover:opacity-100 flex justify-center items-center p-10">
              <div className="w-full text-center text-purple-600 bg-bgColor opacity-90 p-5">
                <div className="flex justify-start items-center gap-0">
                  <FaLocationArrow className="text-4xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Countryside, Pekua, Cox's Bazar Bangladesh
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCamera className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    Yashica Junior MK-11
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-x-4">
                  <FaCalendar className="text-2xl" />
                  <h3 className="font-titleFont text-lg font-semibold">
                    28 November 2020
                  </h3>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
