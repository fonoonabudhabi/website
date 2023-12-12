import { colord } from "colord";
import { directusServer, readSingleton } from "~/lib/directus";

export async function ThemeLoader() {
    const data = await directusServer.request(
        readSingleton("theme", { fields: ["*"] })
    );

    const primary = colord(data.primary).toHsl();
    const primaryForeground = colord(data.primary_foreground).toHsl();
    const text = colord(data.text).toHsl();

    return (
        <style global="true">{`
        :root {
            --primary: ${primary.h} ${primary.s}% ${primary.l}%;
            --primary-foreground: ${primaryForeground.h} ${primaryForeground.s}% ${primaryForeground.l}%;
            --foreground: ${text.h} ${text.s}% ${text.l}%;
            --shadow: ${data.length_x}px ${data.length_y}px ${data.blur_radius}px ${data.spread_radius}px ${data.shadow};
        }
      `}</style>
    );
}
