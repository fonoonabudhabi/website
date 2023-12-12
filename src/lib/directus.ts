import {
    createDirectus,
    rest,
    readItem,
    readSingleton,
    readItems,
    // RestClient,
} from "@directus/sdk";
import { DIRECTUS_URL } from "./constants";
// import { Schema } from "~/types/schema";

const directusServer = createDirectus(DIRECTUS_URL!).with(rest());

export { directusServer, readItem, readItems, readSingleton };
