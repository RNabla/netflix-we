import { getCurrentSettingsAsync, setItemAsync } from './storage';
import { createNotificationAsync } from './notifications';

(function () {
    async function saveOptions(e) {
        e.preventDefault();
        await setItemAsync({
            settings: {
                playbackRate: document.querySelector('#playbackRate').value,
            }
        });
        await createNotificationAsync('Ustawienia', 'Pomyślnie zapisano zmiany');
    }

    async function restoreOptionsAsync() {
        const settings = await getCurrentSettingsAsync();
        document.querySelector('#playbackRate').value = settings.playbackRate || '1.0';
    }

    document.addEventListener('DOMContentLoaded', restoreOptionsAsync);
    document.querySelector('form').addEventListener('submit', saveOptions);
})();