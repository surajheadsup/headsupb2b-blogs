import Image from 'next/image'
import React from 'react'
import LogoWhite from './assets/images/logo-light.png'
import Link from 'next/link'


export default function OfficeAddress() {
    return (
        <div>
            <div><Image src={LogoWhite} height={30} className='4k:w-[350px]' /></div>
            <div className='mt-12'>
                <div className='mt-4'><label className='text-xl font-semibold tracking-wide 4k:text-4xl'> Office Address </label></div>
                <div className='my-1'>
                    <label className='text-xs tracking-wide 4k:text-2xl'>2nd floor A4, Aurobindo Marg, Sarvodaya Enclave, New Delhi 110017</label>
                </div>
            </div>
            <div>
                <div className='mt-4'><label className='text-xl font-semibold tracking-wide 4k:text-4xl'> Contact Us </label></div>
                <div className='my-2 flex flex-col'>
                    {/* <label className='text-xs leading-5 tracking-wide flex flex-col font-normal'>

                        <span><Link href={`tel:+91 72101 99772`}>+91 72101 99772</Link></span>
                        <span><Link href={`tel:+91 93133 06060`}>+91 93133 06060</Link></span>
                    </label> */}
                    <Link href={`tel:+91 72101 99772`} class="w-fit font-normal text-xs leading-5 cursor-pointer relative group 4k:text-2xl">Rizwan - +91 72101 99772<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></Link>
                    <Link href={`tel:+91 93133 06060`} class="w-fit font-normal text-xs leading-5 cursor-pointer relative group 4k:text-2xl">Rishabh - +91 93133 06060<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></Link>
                </div>
            </div>
        </div>
    )
}
