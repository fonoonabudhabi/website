"use client";

import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function VimeoPlayer(props: {
    vimeo_key: string;
    playing?: boolean;
    muted?: boolean;
}) {
    return (
        <div className="relative aspect-video w-full shadow-md rounded-md bg-black overflow-hidden">
            <ReactPlayer
                url={`https://player.vimeo.com/video/${props.vimeo_key}`}
                controls
                muted={!!props.muted}
                playing={!!props.playing}
                width="100%"
                height="100%"
            />
        </div>
    );
}
