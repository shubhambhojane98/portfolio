import Link from "next/link";
import React from "react";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      img: "",
      link: "https://shubhambhojane98.github.io/box-office/#/",
      title: "Box-Office-App",
      desc: "A movie search app that consumes an external API to display data.",
    },
    {
      id: 2,
      img: "",
      link: "https://tictac2.surge.sh/",
      title: "Tic Tac Toe",
      desc: "The Tic Tac Toe Game in React",
    },
    {
      id: 3,
      img: "",
      link: "https://airbnb-clone-53d70.web.app/",
      title: "Airbnb",
      desc: "Airbnb UI Clone",
    },
    {
      id: 4,
      img: "",
      link: "https://chat-web-app-54ef0.firebaseapp.com/signin",
      title: "Chat-App",
      desc: "Real-time chat with rooms, message likes, social media auth, role-based permissions, file upload, audio messages and real-time notifications.",
    },
    {
      id: 5,
      img: "",
      link: "https://crypto-tracker-e5741.web.app/",
      title: "Crypto-Tracker",
      desc: " Cryptocurrency Tracker App in React JS, Material UI and Chart JS",
    },
  ];

  return (
    <div className="py-10">
      <h3 className="text-3xl py-1 dark:text-white ">Portfolio</h3>
      <div className="md:grid grid-cols-3 gap-5">
        {data.map((product) => (
          <div className=" flex flex-col justify-around max-w-xl text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <h1 className="mb-5">{product.title}</h1>
            <p className="mb-5">{product.desc}</p>
            <Link href={product.link}>
              <p className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 mb-5 rounded-md ">
                View
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
