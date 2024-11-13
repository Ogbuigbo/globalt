"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { NAV_LINKS } from "../utils/data"
import Hamburger from "../../assets/Hamburger"
import Close from "../../assets/Close"
import { usePathname } from "next/navigation"

interface NavLink {
	key: string
	href: string
	label: string
}

function Header () {
	const [nav, setNav] = useState(false)
	const [activeLink, setActiveLink] = useState<string>("/") // Set default active link to 'home'
	const router = usePathname()
	console.log(router)

	useEffect(() => {
		const handleResize = () => {
			//       // Close the mobile menu when screen size increases from mobile view
			if (window.innerWidth >= 768) {
				setNav(false)
			}
		}
		//     // Add event listener for window resize
		window.addEventListener("resize", handleResize)

		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	// Function to handle link click
	const handleLinkClick = (link: NavLink) => {
		setActiveLink(link.href)
		setNav(false)
	}

	const handleClick = () => {
		setNav(!nav)
	}

	useEffect(() => {
		// Set active link based on current path on initial render and on route change
		setActiveLink(router)
	}, [router])

	const handleLogoClick = () => {
		setActiveLink("/") // Set active link to home page
		setNav(false) // Close the mobile menu
	}

	return (
		<div className="flex justify-between items-center md:px-10  px-4 w-full py-2 z-40 md:bg-white bg-lightPurple">
			<Link href="/" passHref onClick={handleLogoClick}>
				<div className="flex items-center">
					<Image
						src="https://res.cloudinary.com/dfwhhjcit/image/upload/v1721226071/Group_26086234_t2ijnn.png"
						alt="logo"
						width={200}
						height={200}
						className="md:w-[168px] xl:w-[200px] xl:h-full w-[98px] h-[42px] md:h-[60px] lg:h-[100px]"
					/>
				</div>
			</Link>
			<ul className="gap-8 text-[14px] hidden lg:flex">
				{NAV_LINKS.map((link) => (
					<Link
						href={link.href}
						key={link.key}
						className={`hover:text-green hover:border hover:border-green py-1 px-2 transition ease-in-out duration-200 leading-[19.07px] text-[14px] rounded-md ${
							activeLink === link.href
								? "text-green border border-green font-bold text-[16px]"
								: "hover:text-green hover:border hover:border-green text-[14px]"
						}`}
						onClick={() => handleLinkClick(link)}
					>
						{link.label}
					</Link>
				))}
			</ul>

            <div className="hidden xl:flex">
                <Link href="/contact" className="z-10">
                    <button className="z-10 inline-block  bg-green md:px-6 md:py-3 px-4 py-2 font-medium sm:w-auto rounded-sm md:rounded-lg text-white text-[14px] md:text-[16px]">
                        Contact Us
                    </button>
                </Link>
            </div>

			<div className="lg:hidden">
				{!nav ? (
					<Hamburger onClick={handleClick} />
				) : (
					<Close onClick={handleClick} />
				)}
			</div>

			<div
				className={`absolute top-[46px] left-0 w-full bg-white bg-opacity-50 shadow-md text-white transform z-50 ${
					!nav
						? "opacity-0 pointer-events-none translate-y-full"
						: "opacity-100 pointer-events-auto translate-y-0"
				} transition-all duration-500 ease-in-out`}
			>
				<ul className="py-3  flex flex-col items-center border-b-2">
					{NAV_LINKS.map((link) => (
						<Link
							href={link.href}
							key={link.key}
							className={`regular-16 text-black text-center hover:text-purple  border-b  cursor-pointer transition-all hover:font-bold w-full py-2 active:text-orange ${
								activeLink === link.href
									? " border-b-2 border-b-green  bg-lightGreen text-green  font-bold text-[16px]"
									: " border-b bg-lightPurple border-b-[#C4C4C4]    text-[14px]"
							}`}
							onClick={() => {
								handleLinkClick(link)
								handleClick() // Close the mobile menu when a link is clicked
							}}
						>
							{link.label}
						</Link>
					))}
				</ul>

             
			</div>
		</div>
	)
}

export default Header
