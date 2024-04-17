import Image from 'next/image'
import React from 'react'
import { PiBookOpenBold } from "react-icons/pi"
import Blockchain from '../assets/blockchain.png'
import Link from 'next/link'

type CourseStructure = {
    title: string,
    chapterslength: number,
    chapters: { id: string }[],
    progress: number
}

const CardUI = ({
    title,
    chapterslength,
    chapters,
    progress
}: CourseStructure) => {
    return (
        <Link href={`/courses`}>
            <div className='group-hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
                <div className='relative w-full aspect-video rounded-md overflow-hidden'>
                    <Image
                        fill
                        className='objrct-cover'
                        alt="Title"
                        src={Blockchain}
                    />
                </div>
                <div className='flex flex-col pt-2'>
                    <div className='text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
                        {title}
                    </div>
                    <p className='text-xs text-muted-foreground'>
                        cata
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
                        {progress}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardUI
