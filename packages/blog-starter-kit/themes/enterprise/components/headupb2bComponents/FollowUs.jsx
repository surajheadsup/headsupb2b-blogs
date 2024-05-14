// import Link from 'next/link';
// import React from 'react'
// import { FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

// export default function FollowUs({color}) {

//   const fields = [
//     { _id: 0, title: 'Privacy & Terms', icon: <FaLinkedinIn />, url: 'https://www.linkedin.com/company/headsupb2b/', active: true },
//     { _id: 1, title: 'General Enquiry', icon: <FaFacebookF />, url: 'https://www.facebook.com/headsupb2b/', active: true },
//     { _id: 2, title: 'Want to sell?', icon: <FaInstagram />, url: 'https://www.instagram.com/headsupb2b/', active: true },
//     { _id: 3, title: 'Want to sell?', icon: <FaWhatsapp />, url: 'https://wa.me/+918595736388', active: true },
//     { _id: 4, title: 'Want to sell?', icon: <FaYoutube />, url: 'https://www.youtube.com/@HeadsupB2B', active: true },
//   ]

//   return (
//     <div className='flex flex-col justify-center'>
//       <h2 className={`mb-1 text-lg font-medium text-${color} l:text-left mm:text-center 4k:text-4xl 4k:pb-2`}>Follow Us</h2>
//       <ul className={`font-medium text-${color} flex ms:justify-evenly t:justify-center l:justify-start mm:space-x-12 t:space-x-2 l:space-x-1 ll:space-x-2 4k:space-x-4 `}>
//         {fields?.map((ele) => (
//           <Link href={ele?.url} target='_blank' key={ele._id}>
//             <li className={`font-normal text-xl bg-FooterIconColor ms:p-1 ms:text-xl l:text-md ll:p-2 4k:text-5xl rounded-md delay hover:-translate-y-1 hover:bg-${color} hover:text-headupb2b`}>
//               {ele?.icon}
//             </li>
//           </Link>
//         ))}
//       </ul>
//     </div>
//   )
// }
import React from 'react'

function FollowUs() {
  return (
    <div>FollowUs</div>
  )
}

export default FollowUs