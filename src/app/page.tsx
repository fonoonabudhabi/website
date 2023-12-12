import { Background } from "~/components/background";
import { ContactUs } from "~/components/contact-us";
import PageBuilder from "~/components/page-builder";
import { QR } from "~/components/qr";
import SocialMedia from "~/components/social-media";
import { ThemeLoader } from "~/components/theme-loader";
import { WhatsappButton } from "~/components/whatsapp-button";
import { directusServer, readItems } from "~/lib/directus";
import { Page } from "~/types/content/page";

export const revalidate = 60 * 5;

export default async function Home() {
    const page = (await directusServer
        .request(
            readItems("pages", {
                filter: { permalink: { _eq: "/" } },
                fields: [
                    "*",
                    {
                        blocks: [
                            "id",
                            "collection",
                            "hide_block",
                            {
                                item: {
                                    block_gallery: [
                                        "id",
                                        {
                                            gallery_items: [
                                                "*",
                                                {
                                                    gallery_items_id: ["*"],
                                                },
                                            ],
                                        },
                                    ],
                                    block_video: ["*"],
                                    block_header: ["*"],
                                    block_divider: ["*"],
                                    block_richtext: ["*"],
                                    block_image: ["*"],
                                    block_slider: [
                                        "*",
                                        {
                                            slides: [
                                                "*",
                                                {
                                                    slider_items_id: ["*"],
                                                },
                                            ],
                                        },
                                    ],
                                    block_row: [
                                        "*",
                                        {
                                            columns: [
                                                "*",
                                                {
                                                    item: [
                                                        "*",
                                                        {
                                                            blocks: [
                                                                "*",
                                                                {
                                                                    item: {
                                                                        block_gallery:
                                                                            [
                                                                                "id",
                                                                                {
                                                                                    gallery_items:
                                                                                        [
                                                                                            "*",
                                                                                            {
                                                                                                gallery_items_id:
                                                                                                    [
                                                                                                        "*",
                                                                                                    ],
                                                                                            },
                                                                                        ],
                                                                                },
                                                                            ],
                                                                        block_video:
                                                                            [
                                                                                "*",
                                                                            ],
                                                                        block_header:
                                                                            [
                                                                                "*",
                                                                            ],
                                                                        block_divider:
                                                                            [
                                                                                "*",
                                                                            ],
                                                                        block_richtext:
                                                                            [
                                                                                "*",
                                                                            ],
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            },
                        ],
                    },
                ],
                limit: 1,
            })
        )
        .then((data) => data[0])) as Page;

    return (
        <div className="container">
            <ThemeLoader />

            <div className="flex flex-col gap-24 py-8">
                <PageBuilder {...page} />
                <ContactUs />
                <QR />
                <SocialMedia />
            </div>

            <Background />
            <WhatsappButton />
        </div>
    );
}
