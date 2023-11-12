import Image from "next/image";
import Link from "next/link";

const AnimeList = (props) => {
	const { api } = props;
	return (
		<div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
			{api.data?.map((item) => {
				return (
					<Link
						key={item.mal_id}
						href={`/anime/${item.mal_id}`}
						className="cursor-pointer bg-white shadow-lg text-color-primary hover:text-color-accent transition">
						<Image
							src={item.images.webp.image_url}
							alt="..."
							width={350}
							height={350}
							className="w-full max-h-48 object-cover"
						/>
						<h3 className="font-bold md:text-lg text-md p-4">{item.title}</h3>
					</Link>
				);
			})}
		</div>
	);
};

export default AnimeList;
