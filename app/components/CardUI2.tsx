
import React from 'react'
import { FaLock } from 'react-icons/fa'

const CardUI2 = () => {
    return (
        <div className='group-hover:shadow-sm transition overflow-hidden border rounded-lg p-3 h-full'>
            <div className='flex flex-col pt-2'>
                <div className='text-lg md:text-base font-medium group-hover:text-sky-700 transition line-clamp-2'>
                    SubTitle
                </div>
                <p className='text-xs text-muted-foreground'>
                    cata
                </p>
                <div className='my-3 flex items-center gap-x-2 text-sm md:text-xs'>
                    <div className='flex items-center gap-x-1 text-slate-500'>
                        <FaLock />
                        <span>
                            Chapter
                        </span>
                    </div>
                </div>
                <div>
                    45
                </div>
            </div>
        </div>
    )
}

export default CardUI2
