"use client";

import { Stream, StreamPlayerApi } from "@cloudflare/stream-react";
import { useEffect, useRef } from "react";
import { ASSETS_URL } from "~/lib/constants";

export default function VideoPlayer(props: any) {
    const ref = useRef<StreamPlayerApi>();

    useEffect(() => {
        if (props.playing) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    }, [props.playing]);

    return (
        <div className="relative aspect-video w-full shadow-md rounded-md bg-black overflow-hidden">
            <Stream
                streamRef={ref}
                src={props.video_id}
                controls={props.controls ?? true}
                loop={props.loop}
                muted={props.muted}
                autoplay={props.autoplay ?? true}
                poster={`${ASSETS_URL}/${props.poster}`}
                className="border-none absolute top-0 left-0 w-full h-full"
            />
        </div>
    );
}
