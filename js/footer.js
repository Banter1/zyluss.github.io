$(document).ready(function(){
	var d = new Date();
	var n = d.getFullYear();
	document.getElementById("currentDate").innerHTML = n;
//LINKAGE

$("#copyright").click(function(){
  window.location = "/license";
   });
});
