
// login
exp.runtime.start({
  host: 'https://api.exp.scala.com',
  uuid: 'c924c7c2-bca0-4d2a-9cc1-dc5ce79d423f', // Device uuid.
  secret: 'peanut butter jelly time' // Device secret
})
.then(function() {
  console.log('connected to exp');

  document.getElementById('title').textContent = 'hello world!';
})
.catch(function(err) {
  console.log('not connected to exp');
  console.error(err);

  document.getElementById('title').textContent = 'Couldn\'t connect to EXP.';
});
