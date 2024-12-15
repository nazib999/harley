window.onscroll = function(){
    if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
        document.getElementById("navbar").classList.add("scrolled");
    }
    else{
        document.getElementById("navbar").classList.remove("scrolled");

    }
}
document.addEventListener("DOMContentLoaded", function () {
    var navMain = document.querySelector(".navbar-collapse");
  
    navMain.addEventListener("click", function (event) {
      if (event.target.tagName === "A") {
        // Hide the navbar
        navMain.classList.remove("show");
      }
    });
  });
  