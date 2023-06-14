"use client";
import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.2,
      }}
      className="flex flex-col md:flex-row relative h-screen text-center md:text-left max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.2,
        }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] shadow-lg"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#aec2e7]">liitle</span>{" "}
          background
        </h4>
        <p className="text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
          laboriosam accusamus ducimus itaque, accusantium vero atque doloribus
          sapiente nobis maxime rem architecto quos expedita, reprehenderit
          sequi! Soluta nemo dolor quas. Voluptatem, magni possimus totam
          exercitationem quas animi atque esse ipsa. Dicta officia aliquam
          voluptates, et officiis, saepe repellat tempore corporis temporibus
          tempora dolor atque, nam quas libero aspernatur! Veritatis, in.
          Excepturi voluptate veniam laudantium fugit quas sapiente, est illo
          animi voluptas odit facilis eveniet dolorem, perspiciatis laboriosam,
          vero sed dolor earum officiis assumenda deleniti debitis. Nisi
          pariatur laudantium nostrum repellat?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
