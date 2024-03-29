"use client";
import {motion} from "framer-motion";
import React from "react";
import {SocialIcon} from "react-social-icons";

const Header = () => {
    return (
        <header className="sticky top-0 z-20 backdrop-blur-sm shadow-sm">
            <div className="flex items-start justify-between max-w-7xl mx-auto xl:items-center p-2">
                <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5,
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.6,
                    }}
                    className="flex flex-row items-center"
                >
                    {/* Social Icons */}
                    <SocialIcon
                        url="https://github.com/owuraku-zenas"
                        fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/owuraku-zenas"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <SocialIcon
                    url="https://github.com/owuraku-zenas"
                    fgColor="gray"
                    bgColor="transparent"
                />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.7,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon
                    className="cursor-pointer"
                    network="email"
                    fgColor="gray"
                    bgColor="transparent"
                />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
                    Get In Touch
                </p>
            </motion.div>
            </div>
        </header>
    );
};

export default Header;
