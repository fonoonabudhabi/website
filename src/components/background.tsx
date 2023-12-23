import Image from "next/image";
import { ASSETS_URL } from "~/lib/constants";
import { directusServer, readSingleton } from "~/lib/directus";

export async function Background() {
    const data = await directusServer.request(
        readSingleton("theme", { fields: ["*"] })
    );

    return (
        <div className="fixed top-0 left-0 right-0 bottom-0 -z-10">
            <div
                className="absolute inset-0 -z-10"
                style={{ backgroundColor: data.background_color }}
            />
            <Image
                src={`${ASSETS_URL}/${data.background}`}
                alt=""
                sizes="100vw"
                fill
                className="object-cover"
            />
        </div>
    );
}
