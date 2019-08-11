
   var map;
   function initializeMap(){
      var bantumilli = {lat: 16.371793, lng: 81.269694};
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 15,
        center: bantumilli
      });
      var marker = new google.maps.Marker({
        position: bantumilli,
        map: map,
        title: "St,John's [EM] Model High School"
      });
   }
   function googleError() {
      alert('The map could not be loaded.');
    }
