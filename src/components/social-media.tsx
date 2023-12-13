import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";
import { Facebook, Instagram } from "lucide-react";
import { directusServer, readSingleton } from "~/lib/directus";

export default async function SocialMedia() {
    const data = await directusServer.request(
        readSingleton("social_media", { fields: ["instagram", "facebook"] })
    );

    return (
        <div className="flex items-center justify-center space-x-3">
            <a
                href={data.instagram}
                target="_blank"
                className={cn(buttonVariants({ size: "icon" }))}
            >
                <Instagram className="w-4 h-4" />
            </a>
            <a
                href={data.facebook}
                target="_blank"
                className={cn(buttonVariants({ size: "icon" }))}
            >
                <Facebook className="w-4 h-4" />
            </a>
        </div>
    );
}
