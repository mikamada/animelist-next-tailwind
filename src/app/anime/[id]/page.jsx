import { getAnimeResponse } from "@/services/api";
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import Image from "next/image";

const page = async ({ params: { id } }) => {
	const anime = await getAnimeResponse(`anime/${id}`);
	console.log(anime);

	return (
		<>
			<div className="pt-4 px-4">
				<h3 className="text-2xl font-bold text-color-primary">
					{anime.data.title}
				</h3>
			</div>
			<div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
				<div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
					<h3>Peringkat</h3>
					<p>{anime.data.rank}</p>
				</div>
				<div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
					<h3>Skor</h3>
					<p>{anime.data.score}</p>
				</div>
				<div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
					<h3>Member</h3>
					<p>{anime.data.members}</p>
				</div>
				<div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
					<h3>Episode</h3>
					<p>{anime.data.episodes}</p>
				</div>
			</div>
			<div className="pt-4 px-4 flex sm:flex-nowrap flex-wrap gap-3 text-color-primary">
				<Image
					src={anime.data.images.webp.image_url}
					alt={anime.data.images.jpg.image_url}
					width={350}
					height={250}
					className="w-full rounded object-cover"
				/>
				<div className="pb-8">
					<h3 className="text-xl font-bold">Sinopsis</h3>
          <span>Genres: </span>
					{anime?.data.genres.map((genre) => (
						<span>{genre.name} - </span>
					))}
					<p>{anime.data.synopsis}</p>
				</div>
			</div>
			<div>
				<VideoPlayer videoId={anime.data.trailer.youtube_id} />
			</div>
		</>
	);
};

export default page;
