'use client'

import { cn } from "@nextui-org/react";
import { FaLock } from "react-icons/fa"
import { IoMdDoneAll } from "react-icons/io";

interface sideprops {
    id: number,
    label: string,
    isCompleted: boolean,
    isActive: boolean
}
export const SidebarItem = ({
    id,
    label,
    isCompleted,
    isActive,
}: sideprops) => {
    const Icon = isCompleted ? (<IoMdDoneAll size={22} />) : (<FaLock size={22} />)
    return (
        <button
            type="button"
            className={cn(
                "flex items-center gap-x-2 text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
                isActive && "text-slate-700 bg-slate-200/20 hover:bg-slate-200/20 hover:text-slate-700",
                isCompleted && "text-emerald-700 hover:text-emerald-700",
                isActive && isCompleted && "bg-emerald-200/20"
            )}
        >
            <div className="flex items-center gap-x-2 py-4">
                {Icon}
                {label}
            </div>
            {/* <div className={cn(
                "ml-auto opacity-0 border-2 border-slate-700 h-full transition-all",
                isActive && "opacity-100",
                isCompleted && "border-emerald-700"
            )} /> */}
        </button>
    )
}