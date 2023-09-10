import { useState } from 'react';
import SearchImage from './components/SearchImage';
import './App.scss';
import ShowImage from './components/ShowImage';
import { imageProp } from './types/imageProp';

export default function App() {
  const [imageUrl, setImageUrl] = useState<imageProp>()

  function getUrl(url: imageProp) {
    console.log(url)
    setImageUrl(url)
  }

  return (
    <div className='main-container'>
      <ShowImage url={imageUrl}/>
      <SearchImage url={getUrl}/>
    </div>
  );
}
