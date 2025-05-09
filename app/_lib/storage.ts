export function getStorage(key: string) {
    const data = window.localStorage.getItem(key)

    if (!data) {
        return null;
    }

    return JSON.parse(data);
}

export function setStorage(key: string, data: object) {
    window.localStorage.setItem(key, JSON.stringify(data));
}



