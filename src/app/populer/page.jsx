"use client";

import React, { useEffect, useState } from "react";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import AnimeList from "@/components/AnimeList";
import { getAnimeResponse } from "@/services/api";

const page = () => {
	const [page, setPage] = useState(1);
	const [animes, setAnimes] = useState([]);

	const fetchData = async () => {
		const topAnime = await getAnimeResponse("top/anime", `page=${page}`);
		setAnimes(topAnime);
	};

	useEffect(() => {
		fetchData();
	}, [page]);

	return (
		<>
			<HeaderMenu title={`Anime Terpopuler #${page}`} />
			<AnimeList api={animes} />
			<Pagination
				page={page}
				lastPage={animes.pagination?.last_visible_page}
				setPage={setPage}
			/>
		</>
	);
};

export default page;
