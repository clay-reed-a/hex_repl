function changeBackground(color, id) {
	document.getElementById(id).style.backgroundColor = color; 
}

function getHexInput() {
	return document.getElementById("hex_input").value;
} 

// red byte, green byte, blue byte 

function extractHexRed(hex_str) {
	if(hex_str.length == 6){
		return '#' + hex_str.substring(0,2) + "0000";
	} else {
		return '#' + hex_str[0] + "00";
	}
}

function extractHexGreen(hex_str) {
	if(hex_str.length == 6){
		return "#00" + hex_str.substring(2,4) + "00";
	} else {
		return "#0" + hex_str[1] + '0';
	}
}

function extractHexBlue(hex_str) {
	if(hex_str.length == 6){
		return "#0000" + hex_str.substring(4,6);
	} else {
		return "#00" + hex_str[2];
	}
}

window.onload = function() {
	var button = document.getElementById("enter_button");
	button.onclick = function() {
			var input = getHexInput(); 
			var hexCode = '#' + input; 
			console.log("The Hex Code is: " + hexCode);
			var redness = extractHexRed(input);
			console.log("Redness is: " + redness);
			var greenness = extractHexGreen(input);
			console.log("Greenness is: " + greenness);
			var blueness = extractHexBlue(input);
			console.log("Blueness is: " + blueness); 
			changeBackground(hexCode, "display_color");
			changeBackground(redness, "display_red");
			changeBackground(greenness, "display_green");
			changeBackground(blueness, "display_blue");		
	}

	// so user can use enter key as well as enter button 
	document.onkeydown = function() {
		if(window.event.type == "keydown") {
			if(event.charCode == 13 || event.keyCode == 13){
				var input = getHexInput(); 
				var hexCode = '#' + input; 
				console.log("The Hex Code is: " + hexCode);
				var redness = extractHexRed(input);
				console.log("Redness is: " + redness);
				var greenness = extractHexGreen(input);
				console.log("Greenness is: " + greenness);
				var blueness = extractHexBlue(input);
				console.log("Blueness is: " + blueness); 
				changeBackground(hexCode, "display_color");
				changeBackground(redness, "display_red");
				changeBackground(greenness, "display_green");
				changeBackground(blueness, "display_blue");
			}
		}
	}
}
