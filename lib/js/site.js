window.addEventListener('load', function() {

  document.addEventListener('keypress', function(e) {
    // enter key 
    var key = e.which || e.keyCode; 
    if (key == 13) {
      model.reflectHex(); 
    } 
  });

  var aboutSection = document.querySelector(".about");
  var homeSection = document.querySelector(".use");
  var writingSection =  document.querySelector(".writing");

  var homeLink = document.querySelector("#home_link");
  homeLink.addEventListener('click', function(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    homeSection.className =
    homeSection.className.replace(/\bno_show\b/g,'');

    writingSection.classList.add("no_show");
    aboutSection.classList.add("no_show");
    return false; 
  });

  var aboutLink = document.querySelector("#about_link");
  aboutLink.addEventListener('click', function(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    aboutSection.className =
    aboutSection.className.replace(/\bno_show\b/g,'');

    writingSection.classList.add("no_show");
    homeSection.classList.add("no_show");
    return false; 
  });

  var writingLink = document.querySelector("#writing_link");
  writingLink.addEventListener('click', function(event) {
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    writingSection.className =
    writingSection.className.replace(/\bno_show\b/g,'');

    aboutSection.classList.add("no_show");
    homeSection.classList.add("no_show");
    return false; 
  });
}); 