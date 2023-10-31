import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
	);
	const respManga = await fetch(`
	${process.env.NEXT_PUBLIC_API_BASE_URL}/top/manga?limit=10`);

	const topAnime = await response.json();
	const manga = await respManga.json();

	console.log({manga})

	https: return (
		<>
			{/* Top Anime */}
			<section>
				<Header title={"Top Anime"} href={"/populer"} label={"Lihat semua"} />
				<AnimeList api={topAnime} />
			</section>

			{/* Top Manga */}
			<section>
				<Header title={"Top Manga"} href={"/new"} label={"Lihat semua"} />
				<AnimeList api={manga} />
			</section>
		</>
	);
};

export default Page;
