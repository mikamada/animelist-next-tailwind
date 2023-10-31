import Link from "next/link";
import React from "react";

const Header = ({ title, href, label }) => {
	return (
		<div className="flex justify-between items-center p-4">
			<h1 className="text-xl font-bold text-color-primary">{title}</h1>
			{href && label ? (
				<Link
					href={href}
					className="md:text-md text-sm underline text-color-primary hover:text-color-accent transition-all">
					{label}
				</Link>
			) : null}
		</div>
	);
};

export default Header;
