import { Bookmark } from "lucide-react";
import { BlockDivider } from "~/types/blocks";

export function BlockDivider(props: BlockDivider) {
    return (
        <div className="flex items-center justify-center gap-4">
            <div className="w-full h-px bg-primary" />
            <div className="flex items-center justify-center">
                <span className="text-primary text-sm">
                    <Bookmark className="w-6 h-6" />
                </span>
            </div>
            <div className="w-full h-px bg-primary" />
        </div>
    );
}
