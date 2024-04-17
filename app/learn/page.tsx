"use client"
import React from 'react'
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { tabs } from '../assets/data.js'
import CardUI from '../components/CardUI';

const LearnPage = () => {
    const course = {
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
    };
    return (
        <div className='p-5'>
            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4'>
                <CardUI
                    title={course.title}
                    chapterslength={course.chapterslength}
                    chapters={course.chapters}
                    progress={course.progress}
                />
                <CardUI
                    title={course.title}
                    chapterslength={course.chapterslength}
                    chapters={course.chapters}
                    progress={course.progress}
                />
                <CardUI
                    title={course.title}
                    chapterslength={course.chapterslength}
                    chapters={course.chapters}
                    progress={course.progress}
                />
            </div>
        </div>

    );
}

export default LearnPage

