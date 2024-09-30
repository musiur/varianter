import type { Type___StoreAuth } from '$lib/types/types';
import { writable } from 'svelte/store';
import { getStoredData, storeSubscriber } from './s__utils';


/**
 * Context Store with Subsciber of Persistency
 */
export const Store___Auth = writable<Type___StoreAuth>(getStoredData("auth"));
Store___Auth.subscribe((value: Type___StoreAuth | null) => storeSubscriber("auth", value));



/**
 * Evenet handler for login
 * @param payload 
 */
export function Store___Auth__Login(payload: Type___StoreAuth) {
    Store___Auth.set(payload);
}

/**
 * Evenet handler for logout
 */
export function Store___Auth__Logout() {
    Store___Auth.set(null);
}
