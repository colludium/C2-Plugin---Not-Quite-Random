function GetPluginSettings()
{
	return {
		"name":			"NQ Random",	// Not Quite Random, by Colludium, ported from:
		"id":			"NQ_Random",	//https://github.com/colludium/C2-Plugin---Not-Quite-Random/blob/master/Fast%20Deterministic%20Random
		"version":		"1.0",					
		"description":		"Create a random number according to a probability distribution profile",
		"author":		"Colludium",
		"help url":		"https://www.scirra.com/forum/plugin-not-quite-random_t182868",
		"category":		"General",				
		"type":			"object",				
		"rotatable":	false,					
		"dependency":	"fdrandom.js",
		"flags":		pf_singleglobal			
					
	};
};


////////////////////////////////////////
// Expressions
// Normal distributions
AddNumberParam("Sigma", "Sigma.", 1);
AddNumberParam("Mu", "Mu.", 5);
AddExpression(0, ef_return_number, "Get random number", "Precision Distributions", "gaussianMath", "Normal Distribution, params: Sigma, Mu.");

AddNumberParam("Bias", "Bias.", 0.5);
AddNumberParam("Sigma", "Sigma.", 1);
AddNumberParam("Mu", "Mu.", 5);
AddExpression(1, ef_return_number, "Get random number", "Precision Distributions", "uniformSum", "Custom Uniform Sum Distribution, params: Bias, Sigma, Mu.");

// Range distributions
AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(2, ef_return_number, "Get random number", "Range Distributions", "rangeFloat", "Flat distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(3, ef_return_number, "Get random number", "Range Distributions", "rangeInt", "Flat integer distribution, params: Min, Max (inclusive).");

AddNumberParam("Bias", "Bias.", 0.5);
AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(4, ef_return_number, "Get random number", "Range Distributions", "rangeLoaded", "Loaded distribution, params: Bias (0 to 1), Min, Max.");

// Game distributions
AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(5, ef_return_number, "Get random number", "Game Distributions", "gameNormal", "Approx Normal distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(6, ef_return_number, "Get random number", "Game Distributions", "gameSpire", "Spire shaped distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(7, ef_return_number, "Get random number", "Game Distributions", "gameThorn", "Thorn shaped distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(8, ef_return_number, "Get random number", "Game Distributions", "gameTrapez", "Trapez shaped distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(9, ef_return_number, "Get random number", "Game Distributions", "gameBowl", "Bowl shaped distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(10, ef_return_number, "Get random number", "Game Distributions", "gameWedge", "Wedge shaped distribution, params: Min, Max.");

AddNumberParam("Min", "Min.", 1);
AddNumberParam("Max", "Max.", 5);
AddExpression(11, ef_return_number, "Get random number", "Game Distributions", "gameTeat", "Wedge shaped distribution, params: Min, Max.");



/////////////////////////////////////// 

ACESDone();

////////////////////////////////////////
// Array of property grid properties for this plugin
// new cr.Property(ept_integer,		name,	initial_value,	description)		// an integer value
// new cr.Property(ept_float,		name,	initial_value,	description)		// a float value
// new cr.Property(ept_text,		name,	initial_value,	description)		// a string
// new cr.Property(ept_color,		name,	initial_value,	description)		// a color dropdown
// new cr.Property(ept_font,		name,	"Arial,-16", 	description)		// a font with the given face name and size
// new cr.Property(ept_combo,		name,	"Item 1",		description, "Item 1|Item 2|Item 3")	// a dropdown list (initial_value is string of initially selected item)
// new cr.Property(ept_link,		name,	link_text,		description, "firstonly")		// has no associated value; simply calls "OnPropertyChanged" on click

// Property grid properties for this plugin
var property_list = [
//	new cr.Property(ept_combo,"Hexoutput", "Lowercase", "Inner algorithm hexadecimal output format. Might help for server-side compatibility.", "Lowercase|Uppercase"),
//	new cr.Property(ept_combo,"Base-64 pad character", " ", "Inner algorithm base-64 pad character. = for strict RFC compliance", " |=")
];

// Called by IDE when a new object type is to be created
function CreateIDEObjectType() {
    return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType() {
    assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function (instance) {
    return new IDEInstance(instance, this);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type) {
    assert2(this instanceof arguments.callee, "Constructor called as a function");

    // Save the constructor parameters
    this.instance = instance;
    this.type = type;

    // Set the default property values from the property table
    this.properties = {};
    for (var i = 0; i < property_list.length; i++)
        this.properties[property_list[i].name] = property_list[i].initial_value;
}

// Called by the IDE after all initialization on this instance has been completed
IDEInstance.prototype.OnCreate = function () {
}

// Called by the IDE after a property has been changed
IDEInstance.prototype.OnPropertyChanged = function (property_name) {
}

// Called by the IDE to draw this instance in the editor
IDEInstance.prototype.Draw = function (renderer) {
}

// Called by the IDE when the renderer has been released (ie. editor closed)
// All handles to renderer-created resources (fonts, textures etc) must be dropped.
// Don't worry about releasing them - the renderer will free them - just null out references.
IDEInstance.prototype.OnRendererReleased = function () {
}

