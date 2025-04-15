// just for demo

document.addEventListener('DOMContentLoaded', function () {
  const radios = document.querySelectorAll('input[name="client-type"]');
  const newClient = document.getElementById('newClient');
  const existingCLient = document.getElementById('existingClient');

  console.log('form loaded');

  console.log('newClient', newClient);
  console.log('existingCLient', existingCLient);

  radios.forEach(function (radio) {
    radio.addEventListener('change', function () {
      console.log('value', this.value);
      console.log('this', this.id);
      if (this.id === 'new') {
        newClient.style.display = 'block';
        existingCLient.style.display = 'none';
      } else if (this.id === 'existing') {
        newClient.style.display = 'none';
        existingCLient.style.display = 'block';
      }
    });
  });
});
