
export const actionButtonInitialState = { playEnabled: false, replayEnabled: false, warningViewEnabled: true };

export const mapViewInitialState = { previewMode: false, playMode: false, modalIsOpen: false };

export const warningsInitialState = {
	"FCW": 0,
	"FRCA": 0,
	"FLCA": 0,
	"ICW": 0,
	"EBW": 0,
	"SMVA": 0,
	"SVA": 0,
	"BSW": 0,
	"LCW": 0,
	"RRCA": 0,
	"RLCA": 0
};

export const warnings = {
"FCW": "Forward Collision Warning",
"FRCA": "Front Right Collision Alert",
"FLCA": "Front Left Collision Alert",
"ICW": "Intersection Collision Warning",
"EBW": "Emergency Brake Warning",
"SMVA": "Slow Moving Vehicle Ahead",
"SVA": "Stopped Vehicle Ahead",
"BSW": "Blind Spot Warning",
"LCW": "Lane Change Warning",
"RRCA": "Rear Right Collision Alert",
"RLCA": "Rear Left Collision Alert"

};
 
window.socketStart = false;
