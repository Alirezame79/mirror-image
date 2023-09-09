import React, {useRef} from "react"
import './styles/SearchImage.scss'
import { imageProp } from "../types/imageProp"

export default function SearchImage({url}: any) {
    const imageUrl = useRef<HTMLInputElement>(null)

    function urlEntered() {
        console.log(imageUrl.current!.value)
        
        const newUrl: imageProp = {
            url: imageUrl.current!.value
        }
        url(newUrl)
    }

    return (
        <div className="search-image-container">
            <input className="search-input" ref={imageUrl} type="text"/>
            <button className="search-btn" onClick={urlEntered}>Search!</button>
        </div>
    )
} 