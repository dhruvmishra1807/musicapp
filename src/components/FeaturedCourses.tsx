'use client';
import React from 'react'
import courseData from "../data/music_data.json"
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course{
        id: Number,
        title: String,
        slug: String,
        description: String,
        price: Number,
        instructor: String,
        isFeatured: boolean,
}

function FeaturedCourses() {
    const featuredcourses=courseData.courses.filter((course:Course)=>course.isFeatured)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base  text-teal-600 font-semibold tracking-wide'>FEATURED COURSES</h2>
                <p className='mt-2 text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with best courses.</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featuredcourses.map((course:Course)=>(
                    <div className="flex justify-center"><BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                        <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                        <p className="text-lg sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">{course.title}</p>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-grow">{course.description}</p>
                        <Link href={`/courses/${course.slug}`}><button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border mt-4 border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        Learn More
      </button></Link>
                        </div></BackgroundGradient>
                        
                        </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href="/coureses"><button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        View All Courses
      </button></Link>
        </div>
      
    </div>
  )
}

export default FeaturedCourses
