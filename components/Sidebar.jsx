import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TiHomeOutline} from "react-icons/ti";
import { RxDashboard, RxPerson } from "react-icons/rx";
import { FiSettings } from "react-icons/fi";
import { IoVideocamOutline } from "react-icons/io5";
import { SlNotebook } from "react-icons/sl";
const Sidebar = ({children}) => {
    return (
        <div className='flex'>Sidebar
            <div className='fixed w-20 h-screen p-4 bg-white border-r-[1px] flex-col justify-between'>
                <div className='flex flex-col items-center'>
                    <Link href='/'>
                        <div className='bg-orange-600 text-white p-3 rounded-lg inline-black'>
                            <TiHomeOutline size={20}/>
                        </div>
                    </Link>
                    <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
                    <Link href='/'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-black'>
                            <RxDashboard size={20}/>
                        </div>
                    </Link>
                    <Link href='/trainee'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-black'>
                            <RxPerson size={20}/>
                        </div>
                    </Link>
                    <Link href='/blog'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-black'>
                            <SlNotebook size={20}/>
                        </div>
                    </Link>
                    <Link href='/video'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-black'>
                            <IoVideocamOutline size={20}/>
                        </div>
                    </Link>
                    <Link href='/setting'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-black'>
                            <FiSettings size={20}/>
                        </div>
                    </Link>

                </div>
            </div>
            <main className='ml-20 w-full'>
                {children}
            </main>
        </div>
    );
}

export default Sidebar;