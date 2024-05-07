"use client"
import React from 'react';
import CardUI from '../components/CardUI';

const CoursePage = () => {
    const courses = [
        {
            courseId: "blockchain",
            title: "Blockchain",
            chapterslength: 5,
            chapters: [
                { id: "chapter1" },
                { id: "chapter2" },
                { id: "chapter3" },
                { id: "chapter4" },
                { id: "chapter5" }
            ],
            progress: 3
        },
        {
            courseId: "cryptocurrency",
            title: "Crypto Currency",
            chapterslength: 5,
            chapters: [
                { id: "chapter1" },
                { id: "chapter2" },
                { id: "chapter3" },
                { id: "chapter4" },
                { id: "chapter5" }
            ],
            progress: 3
        },
        {
            courseId: "crypto_trading_and_analysis",
            title: "Crypto Trading And Technical Analysis",
            chapterslength: 5,
            chapters: [
                { id: "chapter1" },
                { id: "chapter2" },
                { id: "chapter3" },
                { id: "chapter4" },
                { id: "chapter5" }
            ],
            progress: 3
        },
    ];

    return (
        <div className='p-5'>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
                {courses.map((course, index) => (
                    <CardUI
                        key={index}
                        courseId={course.courseId}
                        title={course.title}
                        chapterslength={course.chapterslength}
                        chapters={course.chapters}
                        progress={course.progress}
                    />
                ))}
            </div>
        </div>
    );
};

export default CoursePage;
