"use client";
import { useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/Button";
import { FaRegEye } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

const data = [
  {
    name: "Web Development",
    count: "24",
    img: "https://magenest.com/wp-content/uploads/2021/02/website-development-and-design-1.jpg",
  },
  {
    name: "DSA",
    count: "16",
    img: "https://miro.medium.com/v2/resize:fit:1358/1*4ZcW5tSdizlbtDQyVpRTuA.jpeg",
  },
  {
    name: "DevOps",
    count: "25",
    img: "https://img.freepik.com/free-vector/gradient-devops-illustration_23-2149369792.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1709942400&semt=sph",
  },
  {
    name: "Android Development",
    count: "24",
    img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Android_Developer.jpg",
  },
  {
    name: "Web Development",
    count: "24",
    img: "https://magenest.com/wp-content/uploads/2021/02/website-development-and-design-1.jpg",
  },
  {
    name: "Web Development",
    count: "24",
    img: "https://magenest.com/wp-content/uploads/2021/02/website-development-and-design-1.jpg",
  },
];

export default function SimilarTopics() {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div className="bg-[#f7f5d1] p-10">
      <h2 className="text-4xl font-bold mb-6 text-center">Learning topics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((d, index) => (
          <motion.div
            key={index}
            ref={ref}
            className="bg-white rounded-3xl overflow-hidden shadow-lg p-8 border border-gray-500"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={controls}
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Image
              alt="Project management"
              className="w-full rounded-3xl"
              height="100"
              src={d.img}
              style={{
                aspectRatio: "300/200",
                objectFit: "cover",
              }}
              width="300"
            />
            <div className="pt-4">
              <h3 className="text-sm mb-3"> {d.count} readings</h3>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">{d.name}</h3>
                <Badge
                  variant="secondary"
                  className="border border-gray-500 p-1 rounded-lg w-16 text-center flex justify-center cursor-pointer"
                >
                  <FaRegEye size={22} />
                </Badge>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-6">
        <Button
          variant="outline"
          className="bg-black text-white p-2 rounded-lg"
        >
          More topics
        </Button>
      </div>
    </div>
  );
}
