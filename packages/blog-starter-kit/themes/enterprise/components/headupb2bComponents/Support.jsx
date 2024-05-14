import Link from 'next/link'
import React from 'react'

export default function Support() {

  const fields = [
    { _id: 0, title: 'Privacy & Terms', url: '/privacy-policy', active: true },
    { _id: 0, title: 'General Enquiry', url: '/contact', active: true },
    { _id: 0, title: 'Want to sell?', url: '/contact', active: true },
    { _id: 0, title: 'Want to buy?', url: '/contact', active: true },
  ]
  const handleClick = (ele) =>{
    // router.push({pathname:ele?.url})
    window.location.href = ele?.url

}
  return (
    <div>
      <div className='mb-2'><label className='text-xl font-bold tracking-wide 4k:text-4xl'> Support </label></div>
      <ul>
        {fields?.map((ele, index) =>
          <li key={index}><label onClick={() => handleClick(ele)} class=" font-normal text-xs leading-5 cursor-pointer relative inline-block group 4k:text-2xl">{ele?.title}<span class="absolute inset-x-0 bottom-0 h-[0.2px] bg-white transform scale-x-0  group-hover:scale-x-100 transition-transform duration-300"></span></label> </li>
        )}
      </ul>
    </div>
  )
}
