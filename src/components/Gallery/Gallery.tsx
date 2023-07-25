import React from 'react'

import oakBg from '../../assets/images/oak-bg.webp'
import villaBg from '../../assets/images/villa-bg.webp'
import maple from '../../assets/images/maple.webp'
import oakvilleBg from '../../assets/images/oakville-bg.webp'
import Image from 'next/image'

import './Gallery.scss'

const Gallery = () => {
    return (
        <section className="gallery">
            <h4 className="gallery__title">Live in the future</h4>
            <div className="gallery__grid">
                <div className="gallery__grid-1">
                    <Image
                        className="gallery__grid-image"
                        src={villaBg}
                        alt="building"
                    />
                    <p className="gallery__grid-name"> 15 VILLA</p>
                </div>
                <div className="gallery__grid-2">
                    <Image
                        className="gallery__grid-image"
                        src={oakBg}
                        alt="building"
                    />
                    <p className="gallery__grid-name"> 150 OAK</p>
                </div>
                <div className="gallery__grid-3">
                    <Image
                        className="gallery__grid-image"
                        src={oakvilleBg}
                        alt="building"
                    />
                    <p className="gallery__grid-name"> 30 OAKVILLE</p>
                </div>
                <div className="gallery__grid-4">
                    <Image
                        className="gallery__grid-image"
                        src={maple}
                        alt="building"
                    />
                    <p className="gallery__grid-name"> 234 MAPLE</p>
                </div>

                <div className="gallery__grid-text">
                    <p>Comfort is a choice</p>
                    <p className="gallery__grid-subtext">
                        and we offer 4 of those
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Gallery
