import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeResponse, reproduce } from "@/services/api";

const Page = async () => {
	const topAnime = await getAnimeResponse("top/anime", "limit=8");
	let recommendedAnime = await getNestedAnimeResponse(
		"recommendations/anime",
		"entry"
	);

	recommendedAnime = reproduce(recommendedAnime, 10);

	return (
		<>
			<section>
				<Header title={"Top Anime"} href={"/populer"} label={"Lihat semua"} />
				<AnimeList api={topAnime} />
			</section>
			<section>
				<Header title={"Recommendation"} />
				<AnimeList api={recommendedAnime} />
			</section>
		</>
	);
};

export default Page;
