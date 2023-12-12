import { PageBlock } from "~/types/content/page";
import { componentMap } from "./component-map";

export default function BlocksRenderer(props: { blocks: PageBlock[] }) {
    const blocks = props.blocks.filter((block) => {
        if (typeof block === "string") return false;
        return block.hide_block !== true;
    });

    return (
        <div className="flex flex-col gap-8">
            {blocks.map((block) => {
                if (typeof block === "string") return null;
                if (!block.collection) return null;
                const Component = componentMap[block.collection];
                if (!Component) return null;
                return <Component key={block.id} {...block.item} />;
            })}
        </div>
    );
}
