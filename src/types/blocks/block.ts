import { BlockDivider } from "./block-divider";
import type { BlockGallery } from "./block-gallery";
import type { BlockHeader } from "./block-header";
import type { BlockRichtext } from "./block-richtext";
import type { BlockVideo } from "./block-video";

export type BlockType =
    | "block_gallery"
    | "block_richtext"
    | "block_video"
    | "block_header"
    | "block_divider";

export type Block =
    | BlockGallery
    | BlockHeader
    | BlockRichtext
    | BlockVideo
    | BlockDivider;
