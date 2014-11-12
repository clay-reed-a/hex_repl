window.addEventListener('load', function() {
  var aboutSection = document.querySelector(".about");
  var homeSection = document.querySelector(".use");
  var writingSection =  document.querySelector(".writing");
  var recents = document.querySelector(".recents");
  var hexInput = document.getElementById("hex_input");

  document.addEventListener('keypress', function(e) {
    // enter key 
    var key = e.which || e.keyCode; 
    if (key == 13) {
      model.reflectHex();
      if (model.validHex) {
        recents.style.display = "block";
        writingSection.style.display = "none";
        aboutSection.style.display = "none"; 
        homeSection.style.display = "none";
      } 
    }
  });

  var homeLink = document.querySelector("#home_link");
  homeLink.addEventListener('click', function(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    homeSection.style.display = "block";

    writingSection.style.display = "none";
    aboutSection.style.display = "none";
    recents.style.display = "none";
    hexInput.focus();
    return false; 
  });

  var aboutLink = document.querySelector("#about_link");
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    aboutSection.style.display = "block";

    writingSection.style.display = "none";
    homeSection.style.display = "none";
    recents.style.display = "none";
    hexInput.focus();
    return false; 
  });

  var writingLink = document.querySelector("#writing_link");
  writingLink.addEventListener('click', function(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    writingSection.style.display = "block";

    aboutSection.style.display = "none";
    homeSection.style.display = "none";
    recents.style.display = "none";
    hexInput.focus();
    return false; 
  });

}); 