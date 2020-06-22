var car = {
	img: 'value',
	model: 'value',
	year :'value',
	palte:'value',
	color:'value'
}
var values =['imgCar', 'modelCar', 'yearCar', 'placaCar', 'colorCar'];
Array.prototype.forEach.call(car, function(item){
	console.log(item);
});