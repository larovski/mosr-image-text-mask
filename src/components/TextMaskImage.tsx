"use client";

import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { MutableRefObject } from "react";

type TextMaskImageProps = {
  mainRef: MutableRefObject<null>;
  image: string;
  text: string;
};

function TextMaskImage({ mainRef, image, text }: TextMaskImageProps) {
  // To track the scroll position of a scrollable target element.
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end end"],
  });

  // A spring animation that maps to the target element scroll process.
  const scrollYProgressSpring = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 40,
  });

  // A color motion value from transparent to black based on the scrollYProgressSpring value.
  const bgColor = useTransform(
    scrollYProgressSpring,
    [0, 1],
    ["rgba(0,0,0,0)", "rgba(0,0,0,1)"]
  );

  // A scale motion value from 1 to 1.5 based on the scrollYProgressSpring value.
  const scale = useTransform(scrollYProgressSpring, [0, 1], [1, 1.5]);

  return (
    <motion.div
      className="sticky h-screen overflow-hidden inset-0"
      style={{
        backgroundColor: bgColor,
      }}
    >
      <motion.div
        className="h-full w-full flex justify-center items-center bg-no-repeat bg-center bg-cover bg-clip-text"
        style={{
          backgroundImage: `url(${image})`,
          scale,
        }}
      >
        {/* Text is min 56px and at max 160px */}
        <h1 className="uppercase text-transparent text-[clamp(56px,10vw,160px)] font-bold">
          {text}
        </h1>
      </motion.div>
    </motion.div>
  );
}

export default TextMaskImage;
