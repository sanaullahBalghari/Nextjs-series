'use client'
import Link from 'next/link'
import courseData from '@/data/music_courses.json'
import { BackgroundGradient } from './ui/background-gradient'


interface Course{
    id: Number,
    title: string,
    slug: string,
    description: string,
    price: Number,
    instructor: string,
    isFeatured: boolean,
   
}
function Featuredcourses() {

const featuredcourses=courseData.courses.filter((course:Course) =>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
       <div className="text-center space-y-3 my-12">
  <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-teal-600">
    Featured Courses
  </h2>

  <p className="text-gray-600 text-lg dark:text-gray-300">
    Learn with the Best
  </p>
</div>

        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
  { featuredcourses.map((course:Course)=>(
<div key={course.id} className='flex justify-center'>

<BackgroundGradient>
  <div className="flex flex-col rounded-[22px] bg-gray-900 dark:bg-zinc-800 overflow-hidden h-full max-w-sm p-4 sm:p-6 text-center">

    <p className="text-lg font-semibold">{course.title}</p>

    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
      {course.description}
    </p>

    <Link
      href={`/courses/${course.slug}`}
      className="mt-4  text-white rounded-lg transition text-center"
    >
      Learn More
    </Link>

  </div>
</BackgroundGradient>


</div>
  ))}

            </div>
        </div>
        <div className="mt-20 text-center">
  <Link
    href="/courses"
    className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition inline-block"
  >
    View All Courses
  </Link>
</div>



    </div>
  )
}

export default Featuredcourses