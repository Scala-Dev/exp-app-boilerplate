var configured = false;

window.addEventListener('scala', function () {
  // scala.app.config.[name]
  document.getElementById('title').textContent = scala.app.config.someValue;
  configured = true;
});

setTimeout(function () {
  if (!configured) {
    document.getElementById('title').textContent = 'Couldn\'t connect to EXP.';
  }
}, 2000);
