import Link from "next/link";
import React from "react";
import InputSearch from "./InputSearch";

const Navbar = () => {
	return (
		<header className="bg-color-dark sticky shadow-xl top-0 right-0 z-20">
			<nav className="flex justify-between md:items-center p-4 gap-2 md:flex-row flex-col">
				<Link href={"/"} className="font-bold text-color-primary text-2xl">
					MyNime
				</Link>
				<InputSearch />
			</nav>
		</header>
	);
};

export default Navbar;
