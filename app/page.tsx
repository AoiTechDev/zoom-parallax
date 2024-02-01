"use client";
import Image from "next/image";

import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.webp";
import img5 from "@/assets/5.webp";
import img6 from "@/assets/6.jpg";
import img7 from "@/assets/7.jpg";
import img8 from "@/assets/8.webp";
// import img5 from "@/assets/5.avif";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
  const scale10 = useTransform(scrollYProgress, [0, 1], [1, 10]);
  const scale11= useTransform(scrollYProgress, [0, 1], [1, 11]);




  const images = [
    {
      src: img1,
      scale: scale4,
      styles: {
        top: "30vh",
        left: "10vw",
      },
    },
    {
      src: img2,
      scale: scale5,
      styles: {
        top: "-25vh",
        left: "16vw",
      },
    },
    {
      src: img3,
      scale: scale6,
      styles: {
        top: "-5vh",
        left: "-12vw",
      },
    },
    {
      src: img4,
      scale: scale7,
      styles: {
        top: "0",
        left: "0",
      },
    },
    {
      src: img5,
      scale: scale8,
      styles: {
        top: "-35vh",
        left: "0",
      },
    },
    {
      src: img6,
      scale: scale9,
      styles: {
        top: "30vh",
        left: "-15vw",
      },
    },
    {
      src: img7,
      scale: scale10,
      styles: {
        top: "-20vh",
        left: "-25VW",
      },
    },
    {
      src: img8,
      scale: scale11,
      styles: {
        top: "3vh",
        left: "20VW",
      },
    },

  ];
  return (
    <div ref={container} className="h-[300vh] w-full relative">
      <div className="h-[100vh] sticky top-0 bg-gray-500 overflow-hidden">
        {images.map((item) => (
          <motion.div
            style={{
              scale: item.scale,
            }}
            className="w-full h-full absolute top-0   flex justify-center items-center"
          >
            {" "}
            <div
              style={{
                top: item.styles?.top,
                left: item.styles?.left,
              }}
              className="w-[25vw] h-[25vh] relative"
            >
              <Image
                src={item.src}
                fill
                alt=""
                className="object-cover w-full h-full "
                style={{ objectFit: "contain" }}
                placeholder="blur"
              />
            </div>
          </motion.div>
        ))}
        {/* <motion.div style={{
            scale: scale4
          }} className="w-[25vw] h-[25vh] relative">
            
            <Image src={img4} fill alt="" className="object-cover w-full h-full"  style={{ objectFit: 'contain' }}  placeholder="blur" />
          </motion.div> */}
      </div>
    </div>
  );
}
