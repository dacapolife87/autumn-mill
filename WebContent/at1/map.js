$(function() {
    // Also works with: var yourStartLatLng = '59.3426606750, 18.0736160278';
    var autumnmill = new google.maps.LatLng(37.548128, 126.918691);
    
    $('#map_canvas').gmap({'center':autumnmill,'zoom':15});
  $('#map_canvas').gmap('addMarker',{'position':autumnmill}).
  click(function(){ 
    $('#map_canvas').gmap('openInfoWindow',{
      'content':'<p>가을방아</p><img src=http://placehold.it/32x32>'
    },this)
  }); 
});

$(document).ready(function(){
  function loadMap(){
    var autumnmill = new google.maps.LatLng(37.548128, 126.918691);
    
    $('#map_canvas').gmap({'center':autumnmill,'zoom':15});
  $('#map_canvas').gmap('addMarker',{'position':autumnmill}).
  click(function(){ 
    $('#map_canvas').gmap('openInfoWindow',{
      'content':'<p>가을방아</p><img src=http://placehold.it/32x32>'
    },this)
  }); 
  }
  function drawpath(directpasth){
    $("#map_canvas").gmap('clear', 'overlays');
    $('#map_canvas').gmap('addShape', 'Polyline', 
    {  'path': directpasth,
       'strokeColor': "#FF0000", 
       'strokeOpacity': 0.5, 
       'strokeWeight': 3, 
       'fillColor': "#FF0000", 
       'fillOpacity': 0.35 
    });
  }
  

  function centerReset(){
    var autumnmill = new google.maps.LatLng(37.548128, 126.918691);
    $('#map_canvas').gmap({'center':autumnmill,'zoom':15});
  }

  $('#type1').click(function() {
    /*type1 클릭이벤트*/
    var directpasth = [];
    directpasth.push(new google.maps.LatLng(37.548128, 126.918691));  
    directpasth.push(new google.maps.LatLng(37.54774, 126.922763));
    console.log(directpasth);
    drawpath(directpasth);
    
  });
  $('#type2').click(function() {
    /*type2 클릭이벤트*/
    var directpasth = [];
    //좌표값 넣기
    console.log(directpasth);
    drawpath(directpasth);
  });
  $('#type3').click(function() {
      /*type3 클릭이벤트*/
      centerReset();
  });
});