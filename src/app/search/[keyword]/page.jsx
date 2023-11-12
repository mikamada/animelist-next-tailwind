import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse } from "@/services/api";

const Page = async ({ params }) => {
	const { keyword } = params;
	const decodedKeyword = decodeURI(keyword);
	// const response = await fetch(
	// 	`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`
	// );
	const searchAnime = await getAnimeResponse("anime", `q=${decodedKeyword}`);

	return (
		<>
			<section>
				<Header
					title={`Pencarian untuk ${decodedKeyword}...`}
					href={"/populer"}
				/>
				<AnimeList api={searchAnime} />
			</section>
		</>
	);
};

export default Page;
