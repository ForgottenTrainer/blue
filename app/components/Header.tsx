'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import { useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import Image from 'next/image';

const images = [
    'https://images.unsplash.com/photo-1643966398552-0bb0bf0c78cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBjfGVufDB8MHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1640955014216-75201056c829?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGN8ZW58MHwwfDB8fHww',
    'https://images.unsplash.com/photo-1742470536905-311b8ef20522?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1726057403600-725ebb4a20b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D',
];

const Header = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    return (
        <div className="w-full h-[75vh] mx-auto relative">
            {/* Main Image Slider */}
            <Swiper
                modules={[Autoplay, Thumbs]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                thumbs={{ swiper: thumbsSwiper }}
                className="rounded-xl overflow-hidden w-full h-full"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={`Image ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Header;