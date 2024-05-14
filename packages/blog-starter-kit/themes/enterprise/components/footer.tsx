// import Link from 'next/link';
// import { Container } from './container';
// import { useAppContext } from './contexts/appContext';
// import { SocialLinks } from './social-links';

// export const Footer = () => {
// 	const { publication } = useAppContext();
// 	const PUBLICATION_LOGO = publication.preferences.logo;
// 	return (
// 		<footer className="border-t py-20 dark:border-neutral-800 ">
// 			<Container className="px-5">
// 				{PUBLICATION_LOGO ? (
// 					<div className="mb-20 flex w-full flex-row justify-center">
// 						<Link
// 							href={'/'}
// 							aria-label={`${publication.title} home page`}
// 							className="flex flex-row items-center gap-5"
// 						>
// 							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
// 						</Link>
// 					</div>
// 				) : (
// 					<p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
// 						{publication.title}
// 					</p>
// 				)}
// 				<div className="grid w-full grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-5">
// 					<div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
// 						<div className="col-span-full md:col-span-2 lg:col-span-1">
// 							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
// 								Stay in touch
// 							</p>
// 							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Contact us
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Book a demo
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Newsletter
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Slack
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 						<div className="col-span-full md:col-span-2 lg:col-span-1">
// 							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Resources</p>
// 							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Community
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Use Cases
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Source Code
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Blog
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 						<div className="col-span-full md:col-span-2 lg:col-span-1">
// 							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Product</p>
// 							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Pricing
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Documentation
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Integrations
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Support
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 						<div className="col-span-1">
// 							<p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Other links</p>
// 							<ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Events
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Careers
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										Newsroom
// 									</a>
// 								</li>
// 								<li>
// 									<a href="#" className="hover:underline">
// 										About us
// 									</a>
// 								</li>
// 							</ul>
// 						</div>
// 					</div>
// 					<div className="col-span-2 flex flex-col items-end gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left">
// 						<SocialLinks />
// 						<p>&copy; 2023 Company Inc.</p>
// 						<p>
// 							<a href="#" className="hover:underline">
// 								Privacy Policy
// 							</a>{' '}
// 							·{' '}
// 							<a href="#" className="hover:underline">
// 								Terms
// 							</a>
// 						</p>
// 					</div>
// 				</div>
// 			</Container>
// 		</footer>
// 	);
// };

import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

import OfficeAddress from './headupb2bComponents/OfficeAddress';
import Category from './headupb2bComponents/Category';
import Support from './headupb2bComponents/Support';
import Company from './headupb2bComponents/Company';
import FollowUs from './headupb2bComponents/FollowUs';
import Copyright from './headupb2bComponents/Copyright';


export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<div className='bg-headupb2b text-white ll:pt-10 ll:pb-3 ms:pb-14 ms:pt-8 '>
		<div className='ms:px-6 t:px-20 l:px-20 ll:mx-10'>
		  <div className='grid grid-cols-2 ms:grid-cols-2 t:grid-cols-2 l:grid-cols-5 gap-4 l:gap-7 ll:mx-38 imac:px-44 4k:px-56'>
			<div className=''><OfficeAddress /></div>
			<div className='ll:ml-14'><Category /></div>
			<div className='ll:ml-14'><Support /></div>
			<div className='ll:ml-10'><Company /></div>
			<div className='ll:ml-1 ms:col-span-2 t:col-span-4 l:col-span-1 ll:col-span-1'><FollowUs color={"white"}/></div>
		  </div>
		  <div className='text-center pt-6'><Copyright /></div>
		</div>
	  </div>
	);
};

