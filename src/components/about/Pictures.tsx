"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css/bundle';
import { EffectCoverflow } from 'swiper/modules';

const imagePath = '/images/pictures/';
const images = [
    {
        src: imagePath + '1.jpg',
    },
    {
        src: imagePath + '2.jpg',
    },
    {
        src: imagePath + '3.jpg',
    },
    {
        src: imagePath + '4.jpg',
    },
    {
        src: imagePath + '5.jpg',
    },
    {
        src: imagePath + '6.jpg',
    },
    {
        src: imagePath + '7.jpg',
    },
    {
        src: imagePath + '8.jpg',
    },
    {
        src: imagePath + '9.jpg',
    },
    {
        src: imagePath + '10.jpg',
    },
    {
        src: imagePath + '11.jpg',
    },
    {
        src: imagePath + '12.jpg',
    },
    {
        src: imagePath + '13.jpg',
    },
    {
        src: imagePath + '14.jpg',
    },
    {
        src: imagePath + '15.jpg',
    },
    {
        src: imagePath + '16.jpg',
    },
    {
        src: imagePath + '17.jpg',
    },
    {
        src: imagePath + '18.jpg',
    },
]

export default function Pictures() {
    return (
        <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            className='w-full h-auto rounded-lg'
            effect='coverflow'
            navigation
            pagination
        >
            {images.map((image, index: number) => (
                <SwiperSlide key={index}>
                    <Image
                        src={image.src}
                        height={700}
                        width={700}
                        alt="One of my pictures"
                        className="block w-full h-full aspect-video rounded-lg object-cover"
                    />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}