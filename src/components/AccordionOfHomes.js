import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HouseCard  from './AccordionCards';


const Accordion = ({ i, expanded, setExpanded }) => {
    const isOpen = i === expanded;

      // By using `AnimatePresence` to mount and unmount the contents, we can animate
      // them in and out while also only rendering the contents of open accordions
    
    return (
        <>
        <motion.header
          initial={false}
          onClick={() => setExpanded(isOpen ? false : i)}
          animate={{ backgroundColor: isOpen ? "#64b411" : "#1164b4" }}
        ><h2>Home: Address {i} </h2></motion.header>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.section
              key="content"
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={{
                open: { opacity: 1, height: "auto" },
                collapsed: { opacity: 0, height: 0 }
              }}
              transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
            >
              <HouseCard i={i}/>
            </motion.section>
          )}
        </AnimatePresence>
      </>
    );
  };
  
  export const AccordionOfHomes = () => {
    // This approach is if you only want max one section open at a time. If you want multiple
    // sections to potentially be open simultaneously, they can all be given their own `useState`.
    const [expanded, setExpanded] = useState(false);
  
    return accordionIds.map(i => (
      <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
    ));
  };
  
  const accordionIds = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; //needs to match number of houses
