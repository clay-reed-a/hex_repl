var model = {
	__hex__: null,
	__redHex__: null,
	__greenHex__: null, 
	__blueHex__: null,
	__validHex__: null, 
	changeBackground: function(id, color) {
		document.getElementById(id).style.backgroundColor = color; 
	},
	adjustSelf: function() {
		var hexStr = document.getElementById("hex_input").value; 
		var hexStrSize = hexStr.length; 
		if (hexStr[0] == '#') {
			if ((hexStrSize == 5) || (hexStrSize == 2)) {
				// #0000 or #0 
				this.hex = hexStr + "00";			
			}	else if ((hexStrSize == 6) || (hexStrSize == 3)) {
				// #00000 or #00 
				this.hex = hexStr + "0";
			}	else if (hexStrSize == 1) {
				this.hex = hexStr + "000"
			} else {
				this.hex = hexStr;  
			}
		} else {
			if ((hexStrSize == 4) && (hexStrSize == 1)) {
				this.hex = '#' + hexStr + "00";
			} else if ((hexStrSize == 5) || (hexStrSize == 2)) {
				this.hex = '#' + hexStr + '0';
			} else if (hexStrSize == 0) {
				this.hex = '#000'
			} else {
				this.hex = '#' + hexStr;
			}
		}
	
		this.extractRedHex();
		this.extractGreenHex();
		this.extractBlueHex();
	
	}, 
	logHex: function() {
		this.testHex();
		this.extractRedHex();
		this.extractGreenHex();
		this.extractBlueHex();
		var recentHex = document.createElement("p"); 
		var recents = document.querySelector(".recents");
		if (this.validHex) {
			recentHex.style.color = this.hex; 
		} else {
			recentHex.style.color = "#000";
			recentHex.style.textDecoration = "line-through";
		}
		recentHex.innerText = this.hex;
		if (recents.firstChild) {
			recents.insertBefore(recentHex, recents.firstChild);
		} else {
			recents.appendChild(recentHex);
		} 
	}, 
	testHex: function() { 
		var hexStr = document.getElementById("hex_input").value;
		var codeLengths = ((hexStr.length == 6) || (hexStr.length == 3));
		var hexLengths = ((hexStr.length == 7) || (hexStr.length == 4));
		if (/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hexStr)) {
			if ((hexStr[0] == '#') && hexLengths) {
				this.hex = hexStr;
				this.validHex = true;
				
			} else {
				this.hex = '#' + hexStr; 
				this.validHex = true; 
		
			} 
		} else {
			this.hex = hexStr;
			this.validHex = false;
		
		}	
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
	},

	validHex: {
		get: function() {
			return this.__validHex__;
		}, 
		set: function(boo) {
			this.__validHex__ = boo; 
		}
	}
});


