window.addEventListener('DOMContentLoaded', function() {
      var inputArrow = document.querySelector('#input_arrow');
      var enterButton = document.querySelector('#enter_button');
      var input = document.querySelector('#hex_input');
      var focus = function(e) {
        e.stopPropagation();
        e.preventDefault();
        var clone = input.cloneNode(true);
        var parent = input.parentElement;
        parent.appendChild(clone);
        parent.replaceChild(clone, input);
        input = clone;
        window.setTimeout(function() {
          input.value = input.value || "";
          input.focus();
        }, 0);
        // then scroll to top of page 
        // also does not work on mobile Safari 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
      inputArrow.addEventListener('mousedown',
        focus);
      inputArrow.addEventListener('touchstart', 
        focus);
      enterButton.addEventListener('mousedown',
        focus);
      enterButton.addEventListener('touchstart', 
        focus);
    }, false);