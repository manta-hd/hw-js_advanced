'use strict'

// 12.11 Promises
function fetchPokemonData(url, errorMessage) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(errorMessage)
            }
            return response.json();
        })
};

fetchPokemonData('https://pokeapi.co/api/v2/pokemon/ditto', 'Failed to catch Pokemon :c')
    .then(data => {
        const abilitiyURL = data.abilities[0].ability.url;
        console.log(abilitiyURL);
        return fetchPokemonData(abilitiyURL);
    })
    .then(data => {
        const effectEng = data.effect_entries[1];
        console.log(effectEng);
    })
    .finally(() => {
        console.log('Request is done!')
    })
    .catch((err) => {
        console.error('Network error occurred: ', err.message)
    });

// 13.9 Event loop

function getLocation() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            error => reject(error)
        )
    })
};

getLocation()
    .then(
        position => {
            const lat = position.coords.latitude;
            const long = position.coords.longitude;
            const geolocation = document.getElementById('geolocation');
            geolocation.textContent = `Your location: ${lat}, ${long}`;
        }
    )
    .catch(
        err => {
            const geolocationError = document.getElementById('geolocation');
            geolocationError.textContent = `Error occurred: ${err.message}`
        }
    )

// 14.12 Современный асинхронный JS

const promise1 = new Promise((resolve) => {
    setTimeout(() => resolve('Resolved after 2s'), 2000);
});

const promise2 = new Promise((_, reject) => {
    setTimeout(() => reject('Rejected after 1s'), 1000);
});

const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('Resolved after 3s'), 3000);
});

function race(promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(p => {
            Promise.resolve(p)
                .then(resolve)
                .catch(reject);
        });
    });
};

race([promise1, promise2, promise3])
    .then(result => console.log('First:', result))
    .catch(error => console.error('First:', error));



