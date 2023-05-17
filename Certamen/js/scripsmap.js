function initMap(){
    var coord = {lat:-36.7953442, lng:-73.0636857 };
    var map = new google.maps.Map(document.getElementById('map'),{
        zoom:10,
        center: coord
    });

    var marker = new google.maps.Marker({
        position:coord,
        map : map
    });
}






