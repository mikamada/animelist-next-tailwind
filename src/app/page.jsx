import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/services/api";

const Page = async () => {
	
	const topAnime = await getAnimeResponse("top/anime", "limit=8");

	return (
		<>
			{/* Top Anime */}
			<section>
				<Header title={"Top Anime"} href={"/populer"} label={"Lihat semua"} />
				<AnimeList api={topAnime} />
			</section>
		</>
	);
};

export default Page;
