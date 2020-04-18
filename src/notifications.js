export async function createNotificationAsync(title, message, contextMessage) {
    const manifest = browser.runtime.getManifest();
    return await browser.notifications.create({
        'type': 'basic',
        'title': `${manifest.name} - ${title}`,
        'message': message,
        'contextMessage': contextMessage
    });
}