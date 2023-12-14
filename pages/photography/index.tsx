import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import BAU from "../../public/images/BAU.png";
import Cox from "../../public/images/Cox's_Bazar.jpg";
import Crop_Field from "../../public/images/Crop_Field.jpg";
import Fruits from "../../public/images/Fruits.jpg";
import Majar from "../../public/images/Majar-Sharif.jpg";
import Mosque from "../../public/images/Mosque.jpg";
import My_School from "../../public/images/My_School.jpeg";
import TigerPass from "../../public/images/Tiger_Pass.jpg";
import ZACS from "../../public/images/ZACS.jpeg";
import Image from "next/image";

const index = () => {
  return (
    <div>
      <Header />
      <h1>This is photography</h1>
      <div className="grid grid-cols-11 gap-8 px-10">
        <Image
          className="col-span-4 hover:p-4 transition-all delay-500"
          src={BAU}
          loading={"eager"}
          alt="bannerImgOne"
        />
        <div className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-4">
        <figure>
          <Image
            className=""
            src={Crop_Field}
            loading={"eager"}
            alt="bannerImgOne"
          />
        </figure>
        <div className=" absolute inset-0 pt-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-end">
          <div className="bg-red-600 w-full text-center text-slate-200">
            <p>Khubaibul Islam</p>
            {/* <p>
              <FontAwesomeIcon
                className="mr-1"
                icon={faMoneyBill1}
              ></FontAwesomeIcon>
              BDT {course_price}
            </p>
            <p>
              <FontAwesomeIcon
                className="mr-1"
                icon={faClock}
              ></FontAwesomeIcon>
              {course_duration}
            </p> */}
          </div>
        </div>
      </div>
        <div className="relative overflow-hidden transition duration-200 transform shadow-lg col-span-4">
          <figure>
            <Image
              className=""
              src={Crop_Field}
              loading={"eager"}
              alt="bannerImgOne"
            />
          </figure>
          <div className=" absolute inset-0 pt-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100 flex justify-center items-end">
            <div className="bg-red-600 w-full text-center text-slate-200">
              <p>Khubaibul Islam</p>
              {/* <p>
              <FontAwesomeIcon
                className="mr-1"
                icon={faMoneyBill1}
              ></FontAwesomeIcon>
              BDT {course_price}
            </p>
            <p>
              <FontAwesomeIcon
                className="mr-1"
                icon={faClock}
              ></FontAwesomeIcon>
              {course_duration}
            </p> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default index;
