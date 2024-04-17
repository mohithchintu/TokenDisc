import React from 'react'
import { SidebarItem } from './SidebarItems'

interface sidebarprops {
    course: string,
    progressc: number,
}
const Sidebar = ({
    course,
    progressc
}: sidebarprops) => {
    return (
        <div className='h-full border-r flex flex-col overflow-y-auto shadow-sm'>
            <div className='p-8 flex flex-col border-b'>
                <h1 className='font-semibold' >
                    {course}
                </h1>
            </div>
            <div className='flex flex-col w-full'>
                <SidebarItem
                    id={1}
                    label="SubBlock1"
                    isCompleted={true}
                    isActive={false}
                />
                <SidebarItem
                    id={2}
                    label="SubBlock2"
                    isCompleted={false}
                    isActive={true}
                />
                <SidebarItem
                    id={3}
                    label="SubBlock3"
                    isCompleted={false}
                    isActive={false}
                />
            </div>
        </div>
    )
}

export default Sidebar
