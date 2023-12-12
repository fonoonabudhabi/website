import BlocksRenderer from "../block-renderer";

export function BlockRow(props: any) {
    return (
        <div className="flex gap-14 flex-col md:flex-row">
            {props.columns.map((column) => (
                <div key={column.id} className="flex-1">
                    <BlocksRenderer blocks={column.item.blocks ?? []} />
                </div>
            ))}
        </div>
    );
}
