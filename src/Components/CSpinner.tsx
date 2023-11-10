import React from 'react'

function CSpinner({ caption }: { caption: string }) {
    return (
        <div className='flex flex-col items-center justify-center gap-4 h-screen w-full'>
            <span className="border-4 rounded-full border-b-transparent animate-spin border-red-500 w-10 h-10 flex"></span>
            <p className='text-lg text-center'>{caption}</p>
        </div>
    )
}

export default CSpinner