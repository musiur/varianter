/**
 * Function to safely access localStorage
 * @param name 
 * @returns any
 */
export const getStoredData = (name: string, defaultValue?: any) => {
    if (typeof window !== 'undefined') {
        const storedData = localStorage.getItem(name);
        return storedData ? JSON.parse(storedData || "") : defaultValue || null;
    }
    return null;
};

/**
 * Subscribe to changes in the store and persist them in localStorage
 * @param name store name
 * @param value store data
 */
export const storeSubscriber = (name: string, value: any) => {
    if (typeof window !== 'undefined') {
        if (value) {
            localStorage.setItem(name, JSON.stringify(value));
        } else {
            localStorage.removeItem(name);
        }
    }
}