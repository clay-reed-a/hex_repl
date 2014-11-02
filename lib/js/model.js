window.addEventListener('load', function() {
	var enterButton = document.getElementById("enter_button");
	enterButton.addEventListener('click', function() {
		model.reflectHex(); 
	

	}); 

	document.addEventListener('keypress', function(e) {
		var key = e.which || e.keyCode; 
		if (key == 13) {
			model.reflectHex(); 
			console.log("color", 
			model.hex);
			console.log("red", 
			model.redHex);
		}
	});
}); 

var model = {
	__hex__: null,
	__redHex__: null,
	__greenHex__: null, 
	__blueHex__: null,
	changeBackground: function(id, color) {
		document.getElementById(id).style.backgroundColor = color; 
	},
	reflectHex: function() {
		var hexStr = document.getElementById("hex_input").value;
		var codeLengths = ((hexStr.length == 6) || (hexStr.length == 3));
		var hexLengths = ((hexStr.length == 7) || (hexStr.length == 4));
		if ((hexStr[0] == '#') && hexLengths) {
			this.hex = hexStr;
		} else if (codeLengths) {
			this.hex = '#' + hexStr; 
		} else {
			console.log("Not a valid hex code!");
		}
		this.changeBackground("display_color", this.hex);
		this.extractRedHex();
		this.extractGreenHex();
		this.extractBlueHex(); 
	}, 
	extractRedHex: function() {
		if(this.hex.length == 7){
			this.redHex = '#' + this.hex.substring(1,3) + "0000";
		} else {
			this.redHex = '#' + this.hex[1] + "00";
		}
		this.changeBackground("display_red", this.redHex); 
	}, 
	extractGreenHex: function() {
		if(this.hex.length == 7){
			this.greenHex = "#00" + this.hex.substring(3,5) + "00";
		} else {
			this.greenHex = "#0" + this.hex[2] + '0';
		}
		this.changeBackground("display_green", this.greenHex); 
	}, 
	extractBlueHex: function() {
		if(this.hex.length == 7){
			this.blueHex = "#0000" + this.hex.substring(5,7);
		} else {
			this.blueHex = "#00" + this.hex[3];
		}
		this.changeBackground("display_blue", this.blueHex); 
	},
}

Object.defineProperties(model, {
	hex: {
		get: function() {
			return this.__hex__;
		}, 
		set: function(hexStr) {
			this.__hex__ = hexStr; 
		}
	},

	redHex: {
		get: function() {
			return this.__redHex__; 
		},
		set: function(redHexStr) {
			this.__redHex__ = redHexStr; 
		}
	},

	greenHex: {
		get: function() {
			return this.__greenHex__; 

		},
		set: function(greenHexStr) {
			this.__greenHex__ = greenHexStr; 
		}
	},

	blueHex: {
		get: function() {
			return this.__blueHex__;
		},
		set: function(blueHexStr) {
			this.__blueHex__ = blueHexStr; 
		}
	}
});


