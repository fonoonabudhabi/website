"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "~/components/ui/dialog";
import VideoPlayer from "~/components/video-player";
import { cn } from "~/lib/cn";
import { ASSETS_URL } from "~/lib/constants";
import { BlockGallery, BlockGalleryFile } from "~/types/blocks";
import { timeline } from "motion";

export function BlockGallery(props: BlockGallery) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="flex gap-4 flex-wrap">
                {props.gallery_items?.map((item, i) => (
                    <GalleryItem
                        key={item.id}
                        index={i}
                        {...item.gallery_items_id}
                        setOpen={() => {
                            setOpen(true);
                            setActive(i);
                        }}
                        {...props}
                    />
                ))}
            </div>

            <GallerySwiper
                items={props.gallery_items}
                open={open}
                onOpenChange={(open) => setOpen(open)}
                active={active}
                setActive={setActive}
            />
        </div>
    );
}

// Function to get a random number in a specific range
function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GalleryItem(props: any) {
    useLayoutEffect(() => {
        const rn = getRandomNumber(1, 3);

        timeline(
            [
                [`#gallery-item-${props.index}`, { scale: 1.05 }],
                [`#gallery-item-${props.index}`, { scale: 1 }, { delay: 0.1 }],
            ],
            { repeat: 1000000, duration: rn }
        );
    }, []);

    return (
        <div
            id={`gallery-item-${props.index}`}
            className="relative overflow-hidden w-20 h-20 border"
            onClick={props.setOpen}
            style={{
                borderRadius: `${props.border_radius}rem`,
                boxShadow: `${props.length_x}px ${props.length_y}px ${props.blur_radius}px ${props.spread_radius}px ${props.shadow}`,
            }}
        >
            <Image
                src={`${ASSETS_URL}/${props.image}`}
                alt=""
                fill
                className="object-cover"
            />
        </div>
    );
}

function GallerySwiper(props) {
    const { active, setActive } = props;
    const activeItem = props.items.find(
        (_, i) => i === active
    )?.gallery_items_id;

    const handleNext = () => setActive((pa) => pa + 1);

    const handleBack = () => setActive((pa) => pa - 1);

    return (
        <Dialog open={props.open} onOpenChange={props.onOpenChange}>
            <DialogContent className="sm:max-w-7xl p-0 border-none">
                <div className="relative aspect-video overflow-hidden rounded-md">
                    {props.items.map((it) => {
                        const item = it.gallery_items_id;
                        return (
                            <div
                                key={item.id}
                                className={cn(
                                    "absolute top-0 left-0 bottom-0 right-0 hidden",
                                    activeItem.id === item.id && "block"
                                )}
                            >
                                {item.video_id ? (
                                    activeItem.id === item.id ? (
                                        <VideoPlayer
                                            video_id={item.video_id}
                                            playing={activeItem.id === item.id}
                                        />
                                    ) : null
                                ) : (
                                    <Image
                                        src={`${ASSETS_URL}/${item.image}`}
                                        alt=""
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw"
                                        className="object-contain"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>

                <div className="fixed z-10 pb-2 bottom-full left-1/2 -translate-x-1/2 w-full max-w-7xl pt-4 flex justify-between items-center">
                    <p className="text-primary-foreground">
                        Slide {active + 1}/{props.items.length}
                    </p>

                    <DialogClose asChild>
                        <Button size="icon">
                            <X className="h-4 w-4" />
                        </Button>
                    </DialogClose>
                </div>

                <div className="absolute top-full md:top-0 right-full bottom-0 z-50 flex items-center justify-between -mr-10 md:-mr-5">
                    <Button
                        size="icon"
                        disabled={active === 0}
                        onClick={() => handleBack()}
                    >
                        <ArrowLeft />
                    </Button>
                </div>
                <div className="absolute top-full md:top-0 left-full bottom-0 z-50 flex items-center justify-between -ml-10 md:-ml-5">
                    <Button
                        size="icon"
                        disabled={active === props.items.length - 1}
                        onClick={() => handleNext()}
                    >
                        <ArrowRight />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
