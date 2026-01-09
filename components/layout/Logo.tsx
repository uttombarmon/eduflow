import Link from 'next/link'
import React from 'react'

const Logo = () => {
    return (
        <Link
            href={"/"}
            className="flex items-center gap-2 font-bold text-xl tracking-tight"
        >
            <div className="flex h-8 w-8 items-center justify-center rounded bg-slate-900 text-slate-50">
                <span className="italic text-sm">E</span>
            </div>
            <span>EduFlow</span>
        </Link>
    )
}

export default Logo