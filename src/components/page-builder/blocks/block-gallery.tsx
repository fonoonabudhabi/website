"use client";

import { ArrowLeft, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { Dialog, DialogClose, DialogContent } from "~/components/ui/dialog";
import VimeoPlayer from "~/components/vimeo-player";
import { cn } from "~/lib/cn";
import { ASSETS_URL } from "~/lib/constants";
import { BlockGallery, BlockGalleryFile } from "~/types/blocks";

export function BlockGallery(props: BlockGallery) {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    return (
        <div>
            <div className="flex gap-4 flex-wrap">
                {props.gallery_items?.map((item, i) => (
                    <GalleryItem
                        key={item.id}
                        {...item.gallery_items_id}
                        setOpen={() => {
                            setOpen(true);
                            setActive(i);
                        }}
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

function GalleryItem(props: BlockGalleryFile) {
    return (
        <div
            className="rounded-md overflow-hidden shadow-md"
            onClick={props.setOpen}
        >
            <Image
                src={`${ASSETS_URL}/${props.image}`}
                alt=""
                width={100}
                height={100}
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
                <div className="relative aspect-video">
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
                                {item.vimeo_key ? (
                                    activeItem.id === item.id ? (
                                        <VimeoPlayer
                                            vimeo_key={item.vimeo_key}
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
