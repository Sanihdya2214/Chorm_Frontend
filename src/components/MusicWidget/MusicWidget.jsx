import React, { useState } from "react";
import MusicLogo from "../../assests/MusicLogo.jpg"; // Import your logo image from assets

const MusicWidget = () => {
  // Define your list of songs with URLs and titles
  const songs = [
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
      title: "Song 1",
      cover: "https://via.placeholder.com/150",
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
      title: "Song 2",
      cover: "https://via.placeholder.com/150",
    },
    {
      url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
      title: "Song 3",
      cover: "https://via.placeholder.com/150",
    },
  ];

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(new Audio(songs[0].url));

  const togglePlayPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playSong = (index) => {
    if (index !== currentSongIndex) {
      audio.pause();
      const newAudio = new Audio(songs[index].url);
      newAudio.play();
      setAudio(newAudio);
      setIsPlaying(true);
      setCurrentSongIndex(index);
    }
  };

  const nextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    playSong(nextIndex);
  };

  const prevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    playSong(prevIndex);
  };

  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6 transition-transform transform hover:scale-105 duration-300 rounded-2xl shadow-lg text-center flex flex-col items-center">
      <div className="text-white text-2xl font-semibold mb-4">Now Playing</div>
      <div className="relative mb-4">
        <img
          src={songs[currentSongIndex].cover}
          alt="Album Cover"
          className="w-40 h-40 rounded-full shadow-md object-cover"
        />
        <img
          src={MusicLogo} // Use the imported image from assets
          alt="Music Logo"
          className="absolute inset-0 w-36 h-36 object-cover rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
      <div className="text-white text-xl mb-4">
        {songs[currentSongIndex].title}
      </div>
      <div className="flex space-x-4 mb-4 items-center">
        <button
          onClick={prevSong}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Prev
        </button>
        <button
          onClick={togglePlayPause}
          className={`relative w-16 h-16 flex items-center justify-center rounded-full bg-white text-purple-600 font-semibold shadow-md transition-transform transform hover:scale-105 ${
            isPlaying
              ? "bg-green-500 hover:bg-green-600"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            {isPlaying ? (
              <path d="M6 19L19 12L6 5V19Z" /> // Pause icon
            ) : (
              <path d="M5 3H19V21H5V3Z" /> // Play icon
            )}
          </svg>
        </button>
        <button
          onClick={nextSong}
          className="bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-transform transform hover:scale-105"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MusicWidget;
