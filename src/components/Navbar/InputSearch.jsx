"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

const InputSearch = () => {
	const searchRef = useRef();
	const router = useRouter();

	const handleSearch = (e) => {
		const keyword = searchRef.current.value;

		if (!keyword || keyword.trim() == "") return;

		if (e.key == "Enter" || e.type === "click") {
			router.push(`/search/${keyword}`);
			searchRef.current.value = "";
		}
	};

	return (
		<div className="relative">
			<input
				type="text"
				placeholder="Cari anime..."
				className="w-full p-2 rounded-lg"
				ref={searchRef}
				onKeyDown={handleSearch}
			/>
			<button className="absolute top-2 end-2" onClick={handleSearch}>
				<MagnifyingGlass size={24} />
			</button>
		</div>
	);
};

export default InputSearch;
