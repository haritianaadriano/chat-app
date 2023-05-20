import Backdrop from "../backdrop/backdrop";
import { motion } from "framer-motion";

const dropIn = {
    hidden: {
        y: "-100vh"
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 100,
            stiffness: 500,
        }
    },
    exit: {
        y: "100vh",
        opacity: 0
    }
};

export default function CreatedSuccessfully({handleClose}: any){
    return(
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation}
                className="success"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <form>
                    <h3>User was save successfully !</h3>
                </form>
            </motion.div>
        </Backdrop>
    )
}