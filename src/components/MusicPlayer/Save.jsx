import React, { useEffect } from 'react'
import { HiBookmark } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { addSong , removeSong } from '../../redux/features/savedSongsSlice';

function Save({activeSong}) {
  const dispatch = useDispatch();
  const { savedSongs }= useSelector((state) =>state.saved);
  const [svd , setSaved] = React.useState(false);


  useEffect( ()=>{
    setSaved(savedSongs.includes(activeSong));
  } , [activeSong]);

  const saveSong = () => {
    const songPresent = savedSongs.includes(activeSong);
    if(!svd){
      if( !songPresent ) dispatch(addSong(activeSong)); 
      setSaved(true);
    }else{
      if(songPresent) dispatch(removeSong(activeSong));
      // console.log(savedSongs);
      setSaved(false);
    }
  }

  return (
    <div>
      <HiBookmark onClick={saveSong} color={svd ? 'cyan' : 'white'} className="hidden sm:block cursor-pointer w-6 h-6 mr-2"/>
    </div>
  )
}

export default Save
