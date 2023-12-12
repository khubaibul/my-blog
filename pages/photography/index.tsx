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
      <div className="flex gap-x-4">
        <Image
          className="w-[400px] object-cover"
          src={BAU}
          loading={"eager"}
          alt="bannerImgOne"
        />
        <Image
          className="object-cover w-80"
          src={Cox}
          loading={"eager"}
          alt="bannerImgOne"
        />
        <Image
          className="w-[450px]"
          src={Crop_Field}
          loading={"eager"}
          alt="bannerImgOne"
        />
      </div>
      <Footer />
    </div>
  );
};

export default index;
