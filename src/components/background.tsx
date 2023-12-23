import { colord } from "colord";
import Image from "next/image";
import { ASSETS_URL } from "~/lib/constants";
import { directusServer, readSingleton } from "~/lib/directus";

export async function Background() {
    const data = await directusServer.request(
        readSingleton("theme", { fields: ["*"] })
    );

    // const primaryColor = colord(data.primaryColor).toHsl();
    // const secondaryColor = colord(data.secondaryColor).toHsl();
    // const textColor = colord(data.textColor).toHsl();

    return (
        <div
            className="fixed top-0 left-0 right-0 bottom-0 -z-10"
            style={{ backgroundColor: data.background_color }}
        >
            <Image
                src={`${ASSETS_URL}/${data.background}`}
                alt=""
                sizes="100vw"
                fill
                className="object-cover"
            />
        </div>
        //     <style global="true">{`
        //     :root {
        //       --primary: ${primaryColor.h} ${primaryColor.s}% ${primaryColor.l}%;
        //       --secondary: ${secondaryColor.h} ${secondaryColor.s}% ${secondaryColor.l}%;
        //       --primary-foreground: ${textColor.h} ${textColor.s}% ${textColor.l}%;
        //       --shadow: ${data.length_x}px ${data.length_y}px ${data.blur_radius}px ${data.spread_radius}px ${data.shadow_color};
        //     }
        //   `}</style>
    );
}
