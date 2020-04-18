import { getCurrentSettingsAsync } from './storage';

async function restoreDefaultPlaybackRateAsync() {
    const settings = await getCurrentSettingsAsync();
    const playbackRate = Number(settings.playbackRate);
    if (Number.isFinite(playbackRate)) {
        const video = document.querySelector('video');
        if (video && video.playbackRate != playbackRate) {
            try {
                video.playbackRate = playbackRate;
            }
            catch (ex) {
                console.log(ex);
            }
        }
    }
}

!(function () {
    setInterval(function () {
        restoreDefaultPlaybackRateAsync();
    }, 5000);
})();




