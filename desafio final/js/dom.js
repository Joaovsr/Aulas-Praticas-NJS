(function(win, doc ){

	function DOM(elements){
		this.element = doc.querySelectorAll(elements);
	}

	DOM.prototype.get =  function get(index){
		if (!index)
			return this.element[0];
		return this.element[index];
	}

	DOM.prototype.on = function on (eventType, callback){
		Array.prototype.forEach.call(this.element, function(element){
			element.addEventListener(eventType, callback, false);
		});
	}

	DOM.prototype.off =  function off(eventType, callback){
		Array.prototype.forEach.call(this.element, function(element){
			element.removeEventListener(eventType, callback, false)
		});
	}

	//off, on, get

	DOM.prototype.forEach = function forEach(){
		return Array.prototype.forEach.apply(this.element, arguments);
	}

	DOM.prototype.map = function map(){
		return Array.prototype.map.apply(this.element, arguments);
	}

	DOM.prototype.filter = function filter(){
		return Array.prototype.filter.apply(this.element, arguments);
	}

	DOM.prototype.reduce = function reduce(){
		return Array.prototype.reduce.apply(this.element, arguments);
	}

	DOM.prototype.reduceRight = function reduceRight(){
		return Array.prototype.reduceRight.apply(this.element, arguments);
	}

	DOM.prototype.every = function every(){
		return Array.prototype.every.apply(this.element, arguments);
	}

	DOM.prototype.some = function some(){
		return Array.prototype.some.apply(this.element, arguments);
	}

	//forEach, map, filter, reduce, reduceRight, every e some.

	DOM.prototype.is = function is (element){
		return Object.prototype.toString.call(element);
	}

	DOM.prototype.isArray =  function isArray (element){
		return DOM.prototype.is(element) == "[object Array]";
	}

	DOM.prototype.isObject =  function isObject (element){
		return DOM.prototype.is(element) == "[object Object]";
	}

	DOM.prototype.isFunction =  function isFunction (element){
		return DOM.prototype.is(element) == "[object Function]";
	}

	DOM.prototype.isNumber =  function isNumber (element){
		return DOM.prototype.is(element) == "[object Number]";
	}

	DOM.prototype.isString =  function isString (element){
		return DOM.prototype.is(element) == "[object String]";
	}

	DOM.prototype.isBoolean =  function isBoolean (element){
		return DOM.prototype.is(element) == "[object Boolean]";
	}

	DOM.prototype.isNull =  function isNull (element){
		return DOM.prototype.is(element) == "[object Undefined]"
		|| DOM.prototype.is(element) == "[object Null]";
	}

	//isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
	win.DOM = DOM;

})(window, document)