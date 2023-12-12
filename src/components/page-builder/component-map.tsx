import { BlockType } from "~/types/blocks";
import {
    BlockDivider,
    BlockGallery,
    BlockHeader,
    BlockImage,
    BlockRichText,
    BlockRow,
    BlockSlider,
    BlockVideo,
} from "./blocks";

export const componentMap: Record<BlockType, any> = {
    block_gallery: BlockGallery,
    block_header: BlockHeader,
    block_richtext: BlockRichText,
    block_video: BlockVideo,
    block_divider: BlockDivider,
    block_row: BlockRow,
    block_slider: BlockSlider,
    block_image: BlockImage,
};
