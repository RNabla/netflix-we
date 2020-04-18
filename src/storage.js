export async function setItemAsync(item) {
    return await browser.storage.local.set(item);
}

export async function getItemAsync(key) {
    return await browser.storage.local.get(key);
}

export async function getCurrentSettingsAsync() {
    let storage = await getItemAsync('settings');
    if (!storage || !storage.settings) {
        return { playbackRate: '1.0' }
    }
    return storage.settings;
};