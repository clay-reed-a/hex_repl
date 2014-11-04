window.addEventListener('load', function() {

  var enterButton = document.getElementById("enter_button");
  enterButton.addEventListener('click', function() {
    model.reflectHex(); 
  }); 

  document.addEventListener('keypress', function(e) {
    var key = e.which || e.keyCode; 
    if (key == 13) {
      model.reflectHex(); 
    } 
  });
}); 