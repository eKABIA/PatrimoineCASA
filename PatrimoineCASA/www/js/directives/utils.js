angular.module('utils', []).filter('geoDistance', function (){
  return function (lat1, lon1, lat2, lon2){
    var R = 6371; // earth radius (km)
	
	var dLat = deg2rad(lat2-lat1);
	var dLon = deg2rad(lon2-lon1); 
	
	var a = 
	Math.sin(dLat/2) * Math.sin(dLat/2) +
	Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
	Math.sin(dLon/2) * Math.sin(dLon/2); 

	var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	var d = R * c; // Distance en km

	return d;
  };

})
.filter('deg2rad', function (){
  return function (deg){
    return deg * (Math.PI/180);
  };
});
