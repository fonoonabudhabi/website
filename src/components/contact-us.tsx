"use client";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

export const ContactUs = () => {
    return (
        <div
            className="my-8 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-primary/40 backdrop-blur-xl border border-primary rounded-lg p-8 shadow-md shadow-secondary"
            style={{ boxShadow: "var(--shadow)" }}
        >
            <p className="lg:col-span-2 text-center text-xl md:text-2xl font-semibold uppercase text-primary-foreground mb-8">
                Contact Us
            </p>

            <div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-center lg:text-left mb-8 text-primary-foreground">
                    <div>
                        <p className="font-semibold uppercase text-lg text-primary-foreground mb-3">
                            Info
                        </p>
                        <div className="space-y-1">
                            <p>Tel: +971-2-6660708</p>
                            <p>Fax: +971-2-6661545</p>
                            <p>E-mail: info@fonoon.ae</p>
                        </div>
                    </div>

                    <div>
                        <p className="font-semibold text-lg text-primary-foreground mb-3 whitespace-nowrap line-clamp-1">
                            HOURS OF OPERATION
                        </p>
                        <p>
                            10:00AM – 7:00PM
                            <br />
                            DAILY EXCEPT SUNDAY
                        </p>
                    </div>

                    <p className="text-lg text-primary-foreground w-full">
                        Khalidya
                        <br />
                        Abu Dhabi-UAE
                    </p>

                    <p className="text-lg text-primary-foreground w-full">
                        P.O.Box 59501
                    </p>
                </div>
                <div className="w-full h-96 sm:h-72 rounded-lg overflow-hidden shadow border">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.143343008996!2d54.3547490759882!3d24.480489760355532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e660b55b206c1%3A0x4ac668f9939ab209!2sFonoon%20Ceremonial%20Services!5e0!3m2!1sen!2sae!4v1693412892184!5m2!1sen!2sae"
                        width="100%"
                        height="100%"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>

            <div>
                <form>
                    <div className="mb-4 space-y-2">
                        <Label className="">Name *</Label>
                        <div className="grid grid-cols-2 gap-2">
                            <Input
                                type="text"
                                placeholder="First Name"
                                className="w-full border p-2 text-black"
                            />
                            <Input
                                type="text"
                                placeholder="Last Name"
                                className="w-full border p-2 text-black"
                            />
                        </div>
                    </div>
                    <div className="mb-4 space-y-2">
                        <Label className="">Company</Label>
                        <Input
                            type="text"
                            placeholder="Company"
                            className="w-full border p-2 text-black"
                        />
                    </div>
                    <div className="mb-4 space-y-2">
                        <Label className="">Country</Label>
                        <Input
                            type="text"
                            placeholder="Country"
                            className="w-full border p-2 text-black"
                        />
                    </div>
                    <div className="mb-4 space-y-2">
                        <Label className="">Email *</Label>
                        <Input
                            type="email"
                            placeholder="Email"
                            className="w-full border p-2 text-black"
                        />
                    </div>
                    <div className="mb-4 space-y-2">
                        <Label className="">Message</Label>
                        <Textarea
                            placeholder="Enter your message..."
                            className="w-full border p-2 text-black"
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Send
                    </Button>
                </form>
            </div>
        </div>
    );
};
