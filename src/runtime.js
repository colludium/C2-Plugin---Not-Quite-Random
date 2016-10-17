// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.NQ_Random = function (runtime)
{
	this.runtime = runtime;
};

(function ()
{
	                         
    var pluginProto = cr.plugins_.NQ_Random.prototype;
		
	
    /////////////////////////////////////
    // Object type class
    pluginProto.Type = function (plugin) {
        this.plugin = plugin;
        this.runtime = plugin.runtime;
    };

    var typeProto = pluginProto.Type.prototype;



    // called whenever an instance is created
    typeProto.onCreate = function ()
    {
    };

    /////////////////////////////////////
    // Instance class
    pluginProto.Instance = function (type) {
        this.type = type;
        this.runtime = type.runtime;
    };

    var instanceProto = pluginProto.Instance.prototype;

    instanceProto.onCreate = function () {
    };
	
	
    // Conditions
    function Cnds() {};
    pluginProto.cnds = new Cnds();
	
    //////////////////////////////////////
    // Actions
    function Acts() {};
    pluginProto.acts = new Acts();
	
    //////////////////////////////////////
    // Expressions
    function Exps() {};
	
    // Normal distributions
    Exps.prototype.gaussianMath = function (ret, sigma, mu) {

        var returnVal = fdrandom["repot"](Math.random())["gaus"](sigma, mu);
        ret.set_float(returnVal);		
    };
    
    Exps.prototype.uniformSum = function (ret, bias, sigma, mu) {

        var returnVal = fdrandom["repot"](Math.random())["usum"](bias, sigma, mu);
        ret.set_float(returnVal);
    };

    // Range distributions
    Exps.prototype.rangeFloat = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["range"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.rangeInt = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["irange"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.rangeLoaded = function (ret, load, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["lrange"](load, min, max);
        ret.set_float(returnVal);
    };
	
    // Game distributions
    Exps.prototype.gameNormal = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gnorm"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.gameSpire = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gspire"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.gameThorn = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gthorn"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.gameTrapez = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gtrapez"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.gameBowl = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gbowl"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.gameWedge = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gwedge"](min, max);
        ret.set_float(returnVal);
    };

    Exps.prototype.gameTeat = function (ret, min, max) {

        var returnVal = fdrandom["repot"](Math.random())["gteat"](min, max);
        ret.set_float(returnVal);
    };

    pluginProto.exps = new Exps();


    pluginProto.exps = new Exps();
    


   
}());

