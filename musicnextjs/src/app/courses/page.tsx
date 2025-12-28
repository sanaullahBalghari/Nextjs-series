"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";

function page() {
  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All Courses ({courseData.courses.length})
      </h1>

      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (
          <CardContainer key={course.id} className="inter-var m-4">
            <CardBody className="relative group/card bg-black border border-white/10 w-auto sm:w-[26rem] h-auto rounded-xl p-5 dark:hover:shadow-2xl dark:hover:shadow-white/[0.05]">
              
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-white"
              >
                {course.title}
              </CardItem>

              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-400 text-sm max-w-sm mt-2"
              >
                {course.description}
              </CardItem>

              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src={course.image}
                  height="800"
                  width="800"
                  className="h-48 w-full object-cover rounded-lg group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>

              <div className="flex justify-between items-center mt-12">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="#"
                  className="px-3 py-2 rounded-lg text-xs text-gray-300 hover:text-white transition"
                >
                  View →
                </CardItem>

                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-lg bg-white text-black text-xs font-bold hover:bg-gray-200 transition"
                >
                  Enroll
                </CardItem>
              </div>

            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}

export default page;
