import React from 'react';
import { useNavigate } from 'react-router-dom';

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col w-[14rem] p-3 bg-white/5 backdrop-blur-sm animate-slideup rounded-md cursor-pointer"
      onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}
    >
      <img alt="song_img" src={track?.images?.coverart} className="w-full h-56 rounded-lg" />
      <p className="mt-3 font-semibold text-lg text-white truncate text-center">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
