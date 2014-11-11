window.addEventListener('load', function() {

  document.addEventListener('keypress', function(e) {
    // enter key 
    var key = e.which || e.keyCode; 
    if (key == 13) {
      model.reflectHex(); 
    } 
  });
}); 