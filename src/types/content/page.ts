import {
    BlockDivider,
    BlockGallery,
    BlockHeader,
    BlockRichtext,
    BlockType,
    BlockVideo,
} from "../blocks";
// import { SEO } from "../meta/seo";
import { User } from "../system";

export interface Page {
    id?: string;
    permalink: string;
    date_created?: string | null;
    date_updated?: string | null;
    // seo?: (string | SEO) | null;
    sort?: number | null;
    status?: string;
    title?: string | null;
    user_created?: (string | User) | null;
    user_updated?: (string | User) | null;
    blocks: (string | PageBlock)[];
}

export interface PageBlock {
    collection?: BlockType | null;
    id?: string;
    item?:
        | (
              | string
              | BlockGallery
              | BlockHeader
              | BlockRichtext
              | BlockVideo
              | BlockDivider
          )[]
        | null;
    pages_id?: (string | Page) | null;
    sort?: number | null;
    hide_block?: boolean | null;
}
