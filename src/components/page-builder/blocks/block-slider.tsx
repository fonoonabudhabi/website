"use client";

import Image from "next/image";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import VimeoPlayer from "~/components/vimeo-player";
import { ASSETS_URL } from "~/lib/constants";
import { useRef } from "react";
import { Button } from "~/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function BlockSlider(props: any) {
    const ref = useRef<SwiperRef>(null);

    const handleBack = () => {
        if (ref.current) {
            ref.current.swiper.slidePrev();
        }
    };

    const handleNext = () => {
        if (ref.current) {
            ref.current.swiper.slideNext();
        }
    };

    return (
        <div className="relative w-full rounded-md overflow-hidden shadow-md">
            <div className="absolute top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-between p-4">
                <Button size="icon" onClick={() => handleBack()}>
                    <ArrowLeft />
                </Button>
                <Button size="icon" onClick={() => handleNext()}>
                    <ArrowRight />
                </Button>
            </div>
            <Swiper
                ref={ref}
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView={1}
                loop
                autoplay={{
                    disableOnInteraction: true,
                }}
                className="aspect-video"
            >
                {props.slides.map((s) => {
                    const slide = s.slider_items_id;
                    return (
                        <SwiperSlide key={s.id} className="w-full h-full">
                            {slide.vimeo_key ? (
                                <VimeoPlayer vimeo_key={slide.vimeo_key} />
                            ) : (
                                <Image
                                    src={`${ASSETS_URL}/${slide.image}`}
                                    alt=""
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw"
                                    className="object-cover"
                                />
                            )}
                            {/* </div> */}
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}
