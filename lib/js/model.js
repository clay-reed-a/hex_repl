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
	}, 
	extractGreenHex: function() {
		if(this.hex.length == 7){
			this.greenHex = "#00" + this.hex.substring(3,5) + "00";
		} else {
			this.greenHex = "#0" + this.hex[2] + '0';
		} 
	}, 
	extractBlueHex: function() {
		if(this.hex.length == 7){
			this.blueHex = "#0000" + this.hex.substring(5,7);
		} else {
			this.blueHex = "#00" + this.hex[3];
		}
	},
}

Object.defineProperties(model, {
	hex: {
		get: function() {
			return this.__hex__;
		}, 
		set: function(hexStr) {
			this.__hex__ = hexStr;
			this.changeBackground("display_color", this.hex); 
		}
	},

	redHex: {
		get: function() {
			return this.__redHex__; 
		},
		set: function(redHexStr) {
			this.__redHex__ = redHexStr;
			this.changeBackground("display_red", this.redHex);  
		}
	},

	greenHex: {
		get: function() {
			return this.__greenHex__; 

		},
		set: function(greenHexStr) {
			this.__greenHex__ = greenHexStr;
			this.changeBackground("display_green", this.greenHex); 
		}
	},

	blueHex: {
		get: function() {
			return this.__blueHex__;
		},
		set: function(blueHexStr) {
			this.__blueHex__ = blueHexStr;
			this.changeBackground("display_blue", this.blueHex);  
		}
	}
});


