import { PrimaryMenuItems, SecondaryMenuItems } from "./MenuItems";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isVisible: boolean;
};

export default function MobileMenu({ isVisible }: Props) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "-100%", opacity: 0.25 }}
          animate={{ y: 0, opacity: 1 }}
          //exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.85, ease: "easeInOut" }}
          className="lg:hidden absolute top-full left-0 w-full bg-hemglass-darkblue h-screen z-10 p-6 pt-8.5 flex flex-col gap-2.5"
        >
          {PrimaryMenuItems.map((text) => (
            <a
              key={text}
              href="#"
              className="text-hemglass-white text-[32px] font-burbank"
            >
              {text}
            </a>
          ))}

          <motion.div
            initial={{ y: "-2.5%", opacity: 0.25 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.6, ease: "easeInOut" }}
            className="flex flex-col pt-5 gap-1.5"
          >
            {SecondaryMenuItems.map((text) => (
              <a
                key={text}
                href="#"
                className="font-bariol text-hemglass-white text-base"
              >
                {text}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
