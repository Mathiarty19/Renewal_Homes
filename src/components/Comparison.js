import * as React from "react";
import {
    motion,
    useMotionValue,
    useTransform,
  } from "framer-motion"
  
  export const Comparison = () => {
    const x = useMotionValue(0)
    const background = useTransform(
      x,
      [-10, 0, 10],
      ["#ff008c", "#7700ff", "rgb(230, 255, 0)"]
    )
  
    return (
      <div className="container">
      <div className="col-2 offset-5">
      <motion.div style={{ background }}>
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          style={{ x }}
        >
          {/* <Icon x={x} /> */}
          <p>Old to New Slider</p>
        </motion.div>
      </motion.div>
      </div>
      </div>
    )
  }