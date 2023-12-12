import { BlockGallery, BlockRichtext, BlockVideo } from "./blocks";
import { Page, PageBlock } from "./content/page";
import { SEO } from "./meta/seo";

export interface Schema {
    pages: Page[];
    pages_blocks: PageBlock[];

    // seo: SEO;

    // Blocks
    block_gallery: BlockGallery[];
    block_richtext: BlockRichtext[];
    block_video: BlockVideo[];
}
