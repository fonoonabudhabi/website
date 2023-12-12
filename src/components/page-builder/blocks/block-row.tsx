import BlocksRenderer from "../block-renderer";

export function BlockRow(props: any) {
    return (
        <div className="flex gap-8">
            {props.columns.map((column) => (
                <div key={column.id} className="flex-1">
                    <BlocksRenderer blocks={column.item.blocks ?? []} />
                </div>
            ))}
        </div>
    );
}
