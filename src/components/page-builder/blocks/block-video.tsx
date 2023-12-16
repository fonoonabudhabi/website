import VideoPlayer from "~/components/video-player";
import { BlockVideo } from "~/types/blocks";

export function BlockVideo(props: BlockVideo) {
    return <VideoPlayer {...props} />;
}
