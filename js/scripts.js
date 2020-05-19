import credentials from '../credentials.js';
import photo from './photo.js';
const container = document.querySelector('div.container');

const { client_id, client_secret, grant_type, refresh_token } = credentials;

(async () => {
    const googleApiResponse = await fetch(`https://oauth2.googleapis.com/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}&refresh_token=${refresh_token}`, {
        method: 'POST'
    });

    const { access_token } = await googleApiResponse.json();

    const googlePhotosResponse = await fetch('https://photoslibrary.googleapis.com/v1/mediaItems', {
        headers: {
            'Authorization': `Bearer ${access_token}`,
        }
    });

    const { mediaItems } = await googlePhotosResponse.json();
    const photosHTMLinput = mediaItems.map(({baseUrl}) => photo(baseUrl)).join('')
    container.innerHTML = photosHTMLinput;

})()