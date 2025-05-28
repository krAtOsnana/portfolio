import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <div className="w-full mt-10">
      <div className="flex justify-between">

        <div className="">
        <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-900 shadow-lg">
          <Image
            src="/profile.jpeg"
            height={96}
            width={96}
            alt="profile_picture"
            className="object-cover w-full h-full"
          />
        </div>
        </div>

        <div className="">
            <h1 className="text-3xl font-semibold pb-2">Hi, I am Kushagra Kumar</h1>
            <p className="font-extralight">a frontend developer, specializing in UI design and creating engaging user <br/> experiences with a strong attention to detail.</p>
            <h3 className="pt-2">Prayagraj, India </h3>
        </div>

      </div>
    </div>
  );
};

export default Intro;
