import React from 'react'
import CategoryData from './categoryResponse/CategoryResponse'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Category() {
    const router = useRouter()
    // const handleClick = (ele) => {
    //     router.push({pathname:`ele?.url`})
    //     // window.location.href = ele?.url

    // }

    return (
        <div>
            <div className='mb-2'><label className='text-xl font-bold tracking-wide 4k:text-4xl'> Categories </label></div>
            <div>
                <ul>
                    {CategoryData?.map((ele, index) =>
                        // <li key={index}><label onClick={() => handleClick(ele)} class=" font-normal text-xs leading-5 cursor-pointer relative inline-block group 4k:text-2xl">{(ele?.displayName ?? ele?.footerText) || ele?.categoryName}<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></label> </li>
                        <a href={`/${ele?.url}`} key={index}><label className=" font-normal text-xs leading-5 cursor-pointer relative inline-block group 4k:text-2xl">{(ele?.displayName ?? ele?.footerText) || ele?.categoryName}<span className="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></label> </a>
                        // <li key={index} className='hvr-underline-from-center font-normal text-xs leading-5 cursor-pointer hover:text-red-500 '><label onClick={()=>handleClick(ele)} className='cursor-pointer '>{(ele?.displayName??ele?.footerText) || ele?.categoryName}</label></li>
                    )}
                </ul>

            </div>
        </div>
    )
}


