import { Page } from "~/types/content/page";
import BlocksRenderer from "./block-renderer";

export default function PageBuilder(props: Page) {
    return <BlocksRenderer blocks={props.blocks} />;
}
