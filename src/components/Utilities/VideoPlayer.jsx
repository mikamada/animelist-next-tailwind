"use client";

import { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = (props) => {
	const { videoId } = props;
	const [isOpen, setIsOpen] = useState(true);

	const handleVideoPlayer = () => {
		setIsOpen((prevState) => !prevState);
	};

	const Player = () => {
		return (
			<div className="fixed bottom-2 right-2">
				<button
					onClick={handleVideoPlayer}
					className="text-color-primary float-right bg-color-secondary px-3 mb-1">
					X
				</button>
				<YouTube
					videoId={videoId}
					onReady={(e) => e.target.pauseVideo}
					opts={{ width: "300", height: "250" }}
				/>
			</div>
		);
	};

	return isOpen ? (
		<Player />
	) : (
		<button
			onClick={handleVideoPlayer}
			className="rounded fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark hover:bg-color-accent transition-all shadow-xl">
			Tonton Trailer
		</button>
	);
};

export default VideoPlayer;
