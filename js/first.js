window.onload=fir();
function fir(){
$(document).ready(function(){
	setTimeout(function(){
		$("#y").slideDown(3500);
	},3500);
    $("#x").fadeIn(3500);
    setTimeout(function(){
		$("#next").fadeIn(2000)
	},7000);
  });
}