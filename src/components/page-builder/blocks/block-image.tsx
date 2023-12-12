import Image from "next/image";
import { ASSETS_URL } from "~/lib/constants";

export function BlockImage(props: any) {
    return (
        <div
            className="relative aspect-video rounded-md overflow-hidden"
            style={{ boxShadow: "var(--shadow)" }}
        >
            <Image
                src={`${ASSETS_URL}/${props.image}`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1000px) 50vw"
                className="object-contain"
            />
        </div>
    );
}
