import React from 'react';
import { FaLock } from 'react-icons/fa';
import { TbChecks } from "react-icons/tb";

type CardUIProps = {
    title: string,
    subTitle: string,
    chaptersCount: number,
    progress: number
};

const CardUI2 = ({
    title,
    subTitle,
    chaptersCount,
    progress
}: CardUIProps) => {
    return (
        <div className='group'>
            <div className='hover:shadow-md hover:-translate-y-1 transition overflow-hidden border border-black rounded-lg p-3 h-full'>
                <div className='flex flex-col pt-2'>
                    <div className='text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
                        {title}
                    </div>
                    <p className='text-xs text-muted-foreground'>
                        {subTitle}
                    </p>
                    <div className='my-3 flex items-center gap-x-2 text-sm md:text-xs'>
                        <div className='flex items-center gap-x-1 text-slate-500'>
                            {progress === 0 ? (<TbChecks size={18} color='green' />):(<FaLock />)}
                            
                            <span>
                                {chaptersCount} {chaptersCount === 1 ? 'Chapter' : 'Chapters'}
                            </span>
                        </div>
                    </div>
                    <div>
                        {progress}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardUI2;
