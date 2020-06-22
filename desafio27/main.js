/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.
Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.
Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false
Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/
function DOM(elements){
	this.element = this.getDOMElements(elements);
}

DOM.prototype.getDOMElements = function getDOMElements( elements ){
	return document.querySelectorAll(elements);
}

DOM.prototype.get =  function get(event, callback){
	return this.element;
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

var $a = new DOM('[data-js="link"]');
$a.map(function(item){
	console.log(item);
});


$a.on('click', handleClick );
$a.off('click', handleClick);

function handleClick (e) {
  e.preventDefault();
  console.log('clicou');
}