import "./globals.css";
import "swiper/css";
import { readSingleton } from "@directus/sdk";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { cn } from "~/lib/cn";
import { directusServer } from "~/lib/directus";

const metro = localFont({
    src: "../../public/static/fonts/metrostyle-extended.ttf",
    display: "swap",
    variable: "--font-metro",
});

export async function generateMetadata(): Promise<Metadata> {
    const seo = await directusServer.request(readSingleton("SEO"));

    return {
        title: seo.title,
        description: seo.description,
    };
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={cn(
                    "min-h-screen bg-background font-metro antialiased",
                    metro.variable
                )}
            >
                {children}
            </body>
        </html>
    );
}
