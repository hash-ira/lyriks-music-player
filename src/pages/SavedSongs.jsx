import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Error, Loader, SongCard } from '../components';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { genres } from '../assets/constants';


function SavedSongs() {
    const dispatch = useDispatch();
    const { savedSongs } = useSelector((state) => state.saved);
    const { activeSong, isPlaying } = useSelector((state) => state.player);
    console.log(savedSongs);
    const data = savedSongs;
    // if (isFetching) return <Loader title="Loading songs..." />;

    // if (error) return <Error />;


  return (
    <div className="flex flex-col">
      <div className="mt-2 mb-6 w-full flex flex-col sm:flex-row justify-between items-center">
        <h2 className="text-left text-white font-bold text-3xl">Saved Songs</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-5">
        {data?.map((song, index) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={index}
          />
        ))}
      </div>
    </div>
  )
}

export default SavedSongs;
