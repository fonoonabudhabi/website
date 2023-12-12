import VimeoPlayer from "~/components/vimeo-player";
import { BlockVideo } from "~/types/blocks";

export function BlockVideo(props: BlockVideo) {
    return (
        <VimeoPlayer
            vimeo_key={props.vimeo_key}
            playing={props.playing}
            muted={props.muted}
        />
    );
}
