import { useEffect, useState } from 'react';
import { imageProp } from '../types/imageProp';
import './styles/ShowImage.scss';
import demoImage from './../images/demo-image.jpg';

export default function ShowImage({url}: any) {
    const [imageUrl, setImageUrl] = useState<string>()

    useEffect(() => {
        if (url === undefined) {
            setImageUrl(demoImage)
        } else {
            setImageUrl(url.url)
        }
    }, [url])

    return (
        <div className='image-container'>
            <img className='result-image' src={imageUrl} alt="result"/>
        </div>
    )
}