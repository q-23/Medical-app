import credentials from '../credentials.js';
import photo from './photo.js';
console.log(credentials)
const container = document.querySelector('div.container');

const { client_id, client_secret, grant_type, refresh_token } = credentials;

    (async () => {
        const googleApiResponse = await fetch(`https://oauth2.googleapis.com/token?client_id=${client_id}&client_secret=${client_secret}&grant_type=${grant_type}&refresh_token=${refresh_token}`, {
            method: 'POST'
        });

        console.log(await googleApiResponse.json()) 
    })()