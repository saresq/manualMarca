function initMap() {
  var positionSantaRosa = {lat: -36.613170, lng: -64.289868};
  var positionBsAs = {lat: -34.606016, lng: -58.370632};
  var positionRosario = {lat: -32.950555, lng: -60.645632};
  var positionChubut = {lat: -42.248659, lng: -66.658388};

  var contentSantaRosa = '<p><strong>Santa Rosa</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>';
  var contentBsAs ='<p><strong>Buenos Aires</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>';
  var contentRosario ='<p><strong>Rosario</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>';
  var contentChubut ='<p><strong>Chubut</strong></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>';

  var infoSantaRosa = new google.maps.InfoWindow({
    content: contentSantaRosa
  });
  var infoBsAs = new google.maps.InfoWindow({
    content: contentBsAs
  });
  var infoRosario = new google.maps.InfoWindow({
    content: contentRosario
  });
  var infoChubut = new google.maps.InfoWindow({
    content: contentChubut
  });

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 5,
    scrollwheel: false,
    center: positionSantaRosa
  });

  var markerSantaRosa = new google.maps.Marker({
    position: positionSantaRosa,
    map: map
  });
  var markerBsAs = new google.maps.Marker({
    position: positionBsAs,
    map: map
  });
  var markerRosario = new google.maps.Marker({
    position: positionRosario,
    map: map
  });
  var markerChubut = new google.maps.Marker({
    position: positionChubut,
    map: map
  });

  markerSantaRosa.addListener('click', function() {
    infoSantaRosa.open(map, markerSantaRosa);
  });
  markerBsAs.addListener('click', function() {
    infoBsAs.open(map, markerBsAs);
  });
  markerRosario.addListener('click', function() {
    infoRosario.open(map, markerRosario);
  });
  markerChubut.addListener('click', function() {
    infoChubut.open(map, markerChubut);
  });

  var styles = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dce0e2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ];

  map.setOptions({styles: styles});
}