import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import Image from "next/image";
import deved from "../public/dev-ed-wave.png";
import Link from "next/link";

const Main = () => {
  return (
    <div>
      <div className="text-center p-10">
        <h2 className="text-5xl text-teal-600  dark:text-teal-400 font-medium md:text-6xl">
          Shubham Bhojane
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Frontend Developer
        </h3>
        <p className="text-md py-3  text-gray-800 dark:text-gray-200 md:text-xl">
          Designing frontend with JavaScript framework like React Js .
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-6 text-gray-600 dark:text-gray-400 ">
        <Link href="https://github.com/shubhambhojane98">
          <AiFillGithub />
        </Link>
        <Link href="https://www.linkedin.com/in/shubham-bhojane/">
          <AiFillLinkedin />
        </Link>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image alt="image" src={deved} fill objectFit="cover" />
      </div>
    </div>
  );
};

export default Main;
