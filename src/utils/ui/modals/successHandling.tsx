import { motion } from "framer-motion";
import Backdrop from "../backdrop/backdrop";

export default function HandleSuccess({message, handleClose}: any){
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
    return (
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
                <h3>{message}</h3>
            </form>
        </motion.div>
    </Backdrop>
    )
}