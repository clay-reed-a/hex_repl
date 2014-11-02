window.addEventListener('load', function() {
	var enterButton = document.getElementById("enter_button");
	enterButton.addEventListener('click', function() {
		model.reflectHex(); 	
	}); 

	document.addEventListener('keypress', function(e) {
		var key = e.which || e.keyCode; 
		console.log(key); 
		if (key == 13) {
			model.reflectHex(); 
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
		if (hexStr[0] == '#') {
			this.hex = hexStr;
		} else {
			this.hex = '#' + hexStr; 
		} 
		this.changeBackground("display_color", this.hex);
		this.extractRedHex();
		this.extractGreenHex();
		this.extractBlueHex(); 
	}, 
	extractRedHex: function() {
		if(this.hex.length == 6){
			this.redHex = '#' + this.hex.substring(0,2) + "0000";
		} else {
			this.redHex = '#' + this.hex[0] + "00";
		}
		this.changeBackground("display_red", this.redHex); 
	}, 
	extractGreenHex: function() {
		if(this.hex.length == 6){
			this.greenHex = "#00" + this.hex.substring(2,4) + "00";
		} else {
			this.greenHex = "#0" + this.hex[1] + '0';
		}
		this.changeBackground("display_green", this.greenHex); 
	}, 
	extractBlueHex: function() {
		if(this.hex.length == 6){
			this.blueHex = "#0000" + this.hex.substring(4,6);
		} else {
			this.blueHex = "#00" + this.hex[2];
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


