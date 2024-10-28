'use client';

import { motion } from 'framer-motion'; // Import motion
import { Message, NotificationIcon, Profile } from "../icons/icons";
import SearchBar from "./HeaderComponents/SearchBar";

const Header = () => {
    // Define animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="bg-white border-gray-200 rounded-lg shadow-sm py-3 px-8 drop-shadow"
            initial="hidden" // Initial state
            animate="visible" // Animate to visible state
            variants={headerVariants} // Animation variants
            transition={{ duration: 0.3 }} // Transition properties
        >
            <div className="lg:flex justify-between items-center">
                <div>
                    <div><SearchBar /></div>
                </div>

                <div className="flex gap-[30px]">
                    <div className="flex gap-4 items-center">
                        <NotificationIcon />
                        <Message />
                    </div>
                    <div className="h-[44px] w-[1px] bg-[#C2C2C2]"></div>
                    <div className="items-end">
                        <p className="font-bold text-sm items-end">Nayamul Roni</p>
                        <p className="text-xs text-[#757D85] items-end">Super Admin</p>
                    </div>
                    <div>
                        <Profile />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Header;
