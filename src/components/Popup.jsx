/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Emmy from '../assets/images/dp-1.png'

const PopUp = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsOpen(true);
            playNotificationSound();
        }, 2000); // Appears after 2 seconds

        return () => clearTimeout(timeout);
    }, []);

    const closePopUp = () => {
        setIsOpen(false);
    };

    const playNotificationSound = () => {
        const audio = new Audio("/notification-sound.mp3"); // Ensure this file exists in public/
        audio.play().catch(error => console.log("Sound play failed:", error));
    };

    return (
        <>
            {isOpen && (
                <motion.div
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed top-0 left-0 right-0 mx-auto max-w-[95%] bg-white shadow-lg p-4 rounded-2xl text-center flex items-center gap-3 border border-gray-300 z-[9999] pt-6"
                    style={{
                        maxWidth: "350px", // Limit width for a notification feel
                        marginTop: "env(safe-area-inset-top)", // Prevents notch overlap on iPhones
                    }}
                >
                    {/* Sender's Name & Profile Icon */}
                    <div className="flex flex-col items-center">
                        <div className="w-10 h-10 bg-blue-500 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                            <img src={Emmy} alt="E" className="bg-cover rounded-full"/>
                        </div>
                    </div>

                    {/* Notification Content */}
                    <div className="flex-1 text-left">
                        <p className="text-sm font-semibold">Emmy from ELIAS</p>
                        <p className="text-xs text-gray-500 font-medium">FREE Instagram Revamp Offer</p>
                        <p className="text-xs text-gray-500">Limited slots available – check homepage for details!</p>
                    </div>

                    {/* Close Button */}
                    <button
                        className="text-gray-500 hover:text-black text-lg"
                        onClick={closePopUp}
                    >
                        ×
                    </button>
                </motion.div>
            )}
        </>
    );
};

export default PopUp;
