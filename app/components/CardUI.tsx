import Image from 'next/image';
import React from 'react';
import { PiBookOpenBold } from "react-icons/pi";
import BlockchainImage from '../assets/blockchain.png';
import Link from 'next/link';

interface CourseStructure {
    courseId: string;
    title: string;
    chapterslength: number;
    chapters: { id: string }[];
    progress: number;
}

const CardUI: React.FC<CourseStructure> = ({
    courseId,
    title,
    chapterslength,
    progress
}: CourseStructure) => {
    return (
        <Link href={`/courses/${courseId}`}>
            <div className='bg-[#E9EBE7] hover:shadow-md hover:-translate-y-1 transition overflow-hidden border rounded-lg p-3 h-full'>
                <div className='relative w-full aspect-video rounded-md overflow-hidden'>
                    <Image
                        src={BlockchainImage}
                        alt="Blockchain Course Image"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
                <div className='flex flex-col pt-2'>
                    <div className='text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
                        {title}
                    </div>
                    <p className='text-xs text-muted-foreground'>
                        category
                    </p>
                    <div className='my-3 flex items-center gap-x-2 text-sm md:text-xs'>
                        <div className='flex items-center gap-x-1 text-slate-500'>
                            <PiBookOpenBold size={14} />
                            <span>
                                {chapterslength} {chapterslength === 1 ? 'Chapter' : 'Chapters'}
                            </span>
                        </div>
                    </div>
                    <div>
                        Progress: {progress}%
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default CardUI;
