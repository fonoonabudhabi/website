import { BlockHeader } from "~/types/blocks";

export function BlockHeader(props: BlockHeader) {
    return (
        <div className="border border-primary rounded-md flex items-center justify-center text-center p-4 bg-primary/10 backdrop-blur-md shadow-2xl shadow-secondary">
            <p className="text-lg md:text-2xl font-semibold uppercase text-primary">
                {props.title}
            </p>
        </div>
    );
}
