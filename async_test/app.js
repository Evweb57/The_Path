const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your fake data here')
            }
            reject('request error');
        }, 1000);
    })
}

fakeRequest('/dogs/1')
    .then((data) => {
        console.log('Done with request!');
        console.log('Data is:', data);
    })
    .catch((err) => {
        console.log('Oh no!', err);
    })