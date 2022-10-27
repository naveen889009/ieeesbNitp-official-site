import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
    return (
        <>
            <main className="h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-[#181F2A]">
                <h1 className="text-9xl font-extrabold dark:text-white text-gray-500 tracking-widest">404</h1>
                <div className="bg-amber-600 px-2 text-sm rounded rotate-12 absolute">
                    Page Not Found
                </div>
                <button className="mt-5">
                    <Link to='/' className="relative inline-block text-sm font-medium text-amber-600 group active:text-orange-500 focus:outline-none focus:ring">
                        <span
                            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-amber-600 group-hover:translate-y-0 group-hover:translate-x-0"
                        ></span>

                        <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
                            <router-link to="/">Go Home</router-link>
                        </span>
                    </Link>
                </button>
            </main>
        </>
    )
}

export default Error