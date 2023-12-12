import { cn } from "~/lib/cn";
import { buttonVariants } from "./ui/button";
import { Facebook, Instagram } from "lucide-react";

export default function SocialMedia(props: any) {
    return (
        <div className="flex items-center justify-center space-x-3">
            <a
                href={props.instagram}
                target="_blank"
                className={cn(buttonVariants({ size: "icon" }))}
            >
                <Instagram className="w-4 h-4" />
            </a>
            <a
                href={props.facebook}
                target="_blank"
                className={cn(buttonVariants({ size: "icon" }))}
            >
                <Facebook className="w-4 h-4" />
            </a>
        </div>
    );
}
