import type { Type___Attribute } from "@/types/types";
import { writable } from "svelte/store";
import { getStoredData, storeSubscriber } from "./s__utils";

export const Default___Attributes = [
    {
        name: "Size",
        values: ["SM", "M", "L", "XL"]
    },
    {
        name: "Color",
        values: ["Red", "Black", "White"]
    }
]

export const Store___Attributes = writable<Type___Attribute[]>(getStoredData("attributes", Default___Attributes));
Store___Attributes.subscribe((value: Type___Attribute[]) => storeSubscriber("attributes", value || Default___Attributes))





// event handlers
export const Store___Attributes__AddNew = (payload: Type___Attribute) => {
    Store___Attributes.update((attributes: Type___Attribute[]) => [...attributes, payload])
}

export const Store___Attributes__ClearAll = () => {
    Store___Attributes.set([]);
}

export const Store___Attributes__UpdateOne = (payload: Type___Attribute) => {
    Store___Attributes.update((attributes: Type___Attribute[]) => attributes.map((attribute: Type___Attribute) => attribute.name === payload.name ? payload : attribute))
}

export const Store___Attributes__DeleteOne = (payload: Type___Attribute) => {
    Store___Attributes.update((attributes: Type___Attribute[]) => attributes.filter((attribute: Type___Attribute) => attribute.name !== payload.name))
}