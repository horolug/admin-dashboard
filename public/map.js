document.addEventListener(
  'DOMContentLoaded',
  function () {
    console.log('doMloaded');
    var map = L.map('map').setView([54.8985, 23.9036], 13);
    var marker1 = L.marker([54.8985, 23.9036]).addTo(map);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);

    marker1.bindPopup(
      '<b>Hello world!</b><br> <a href="http://localhost:3000/project/device"> Device #id-1 info </a>',
    );

    var marker2 = L.marker([54.89, 23.9]).addTo(map);
    marker2.bindPopup(
      '<b>Hello world!</b><br> <a href="http://localhost:3000/project/device"> Device #id-2 info </a>',
    );

    var marker3 = L.marker([54.884, 23.87]).addTo(map);
    marker3.bindPopup(
      '<b>Hello world!</b><br> <a href="http://localhost:3000/project/device"> Device #id-3 info </a>',
    );

    var marker4 = L.marker([54.885, 23.86]).addTo(map);
    marker4.bindPopup(
      '<b>Hello world!</b><br> <a href="http://localhost:3000/project/device"> Device #id-3 info </a>',
    );

    var marker5 = L.marker([54.8851, 23.861]).addTo(map);
    marker5.bindPopup(
      '<b>Hello world!</b><br> <a href="http://localhost:3000/project/device"> Device #id-3 info </a>',
    );
  },
  false,
);
