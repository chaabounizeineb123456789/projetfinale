AOS.init();
/*window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
   navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
 }
 */
$('#menu').click(function() {
	  $("#myDIV").toggle()/*Class('shown');*/
})
// Check browser support
/*if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Smith");
    // Retrieve
    // document.getElementById("result").innerHTML = localStorage.getItem("lastname");
} else {
   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
}*/




$('.cadre').click(function(e) {
   localStorage.setItem("product", e.currentTarget.id);
})

/*$('#zei').click(function() {
	  $("#subjects").toggle()/*Class('shown');*/



$(document).ready(function(){
    $("#zei").click(function(){
        $("#subjects").toggle();
    });
});