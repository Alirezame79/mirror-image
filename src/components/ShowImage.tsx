import { useEffect, useState } from 'react';
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
        <div className='image-download-container'>
            <img className='result-image' src={imageUrl} alt="result"/>
            <a href={imageUrl}>
                <button className='open-image-btn'>Open Image</button>
            </a>
        </div>
    )
}