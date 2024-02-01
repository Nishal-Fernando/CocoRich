document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("myNavbar");
    var links = navbar.getElementsByClassName("nav-link");

    for (var i = 0; i < links.length; i++) {
       links[i].addEventListener("click", function() {
          // Remove "active" class from all links
          for (var j = 0; j < links.length; j++) {

             links[j].classList.remove("active");
          }

          // Add "active" class to the clicked link
          this.classList.add("active");
          console.log("Aaa")
       });
    }
 });