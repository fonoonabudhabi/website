import Image from "next/image";
import { ASSETS_URL } from "~/lib/constants";
import { directusServer, readSingleton } from "~/lib/directus";
import { BlockHeader } from "./page-builder/blocks";

export async function QR() {
    const data = await directusServer.request(
        readSingleton("qr_codes", { fields: ["*"] })
    );

    return (
        <div className="flex flex-col gap-14">
            <BlockHeader id="qrs" title="PORTFOLIO QR CODES" />

            <div className="text-center mb-6">
                <h2 className="text-white text-xl">
                    Scan or click the required QR Code to view/download Our
                    profile
                </h2>
            </div>

            <div className="text-white flex flex-col space-y-10 md:space-y-0 md:flex-row items-center justify-center md:space-x-10 text-center mb-8">
                {data?.map((qr: any) => (
                    <div
                        key={qr.id}
                        className="flex flex-col items-center justify-center space-y-2"
                    >
                        <a href={qr.url} target="_blank">
                            <Image
                                src={`${ASSETS_URL}/${qr.qr_image}`}
                                alt=""
                                width={200}
                                height={200}
                            />
                        </a>
                        <p className="font-semibold uppercase">{qr.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
