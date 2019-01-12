mapkit.init({
  authorizationCallback(done) {
    done('token');
  },
  language: 'en',
});

mapkit.addEventListener('configuration-change', event => {
  if (event.status === 'Initialized') {
    console.log('Initialized!');
  }
});

mapkit.removeEventListener('configuration-change', () => {});
