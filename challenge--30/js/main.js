(function (win, doc){
  var app = (function appl () {
    return {
      init: function init () {
	this.companyInfo();
	this.initEvents();
      },
      initEvents: function initEvents () {
	var $btnCadastrar = new DOM('[data-js="btnCadastrar"]')
	$btnCadastrar.on('click', this.handleSubmit);
      },
      handleSubmit: function handleSubmit(e){
	e.preventDefault();
	var $tableCar = new DOM ('[data-js="tableCar"]').get();
	$tableCar.appendChild(app.createNewCar());
      },
      createNewCar: function createNewCar (){
        var $fragment =  doc.createDocumentFragment();
        var $tr = doc.createElement('tr');
	var $btnRemove = doc.createElement('button');
	var $image = doc.createElement('img');
        var $tdImage = doc.createElement('td');
        var $tdBrand = doc.createElement('td');
        var $tdYear = doc.createElement('td');
	var $tdPlate = doc.createElement('td');
	var $tdColor = doc.createElement('td');
	var $tdRemove = doc.createElement('td');
	var car = {
	  img: app.getValue('img'),
	  model: app.getValue('model'),
	  year: app.getValue('year'),
	  plate: app.getValue('plate'),
	  color: app.getValue('color')
	};

	$image.setAttribute('src', car.img);
	$tdImage.appendChild($image);
	$tdBrand.textContent = car.model;
	$tdYear.textContent = car.year;
	$tdPlate.textContent = car.plate;
	$tdColor.textContent = car.color;
	$btnRemove.textContent = 'x';
	$tdRemove.appendChild($btnRemove);
	$btnRemove.setAttribute('class', 'btnRemove');
	$btnRemove.addEventListener('click', app.removeCar, false);

	$tr.appendChild($tdImage);
	$tr.appendChild($tdBrand);
	$tr.appendChild($tdYear);
	$tr.appendChild($tdPlate);
	$tr.appendChild($tdColor);
	$tr.appendChild($tdRemove);
	app.postCar(car);
	      
	return $fragment.appendChild($tr);
      },
      getValue: function getValue(item){
	return new DOM ('[data-js="'+item+'"]').get().value;
      },

      removeCar: function removeCar(e){
	e.preventDefault();
	e.target.parentNode.parentNode.remove();
      },

      postCar: function postCar (car){
	var post = 'image:'+car.img+'&brandModel:'+car.model+'&year:'+car.year+'&plate:'+car.plate+'&color:'+car.color;
	var ajaxPostCar = new XMLHttpRequest ();
	ajaxPostCar.open('POST', 'http://localhost:3000/car');
	ajaxPostCar.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	ajaxPostCar.send(post);
      },
			
      companyInfo: function companyInfo (){
	var ajax = new XMLHttpRequest();
	ajax.open('GET', '/company.json', true);
	ajax.send();
	ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
      },
      getCompanyInfo: function getCompanyInfo () {
	if ( app.isReady.call(this))
	  return
	var data = JSON.parse(this.responseText);
	  app.showInfoCompany.call(data);
      },
      isReady: function isReady () {
	return this.readyState === 4 && this.status === 200 
      },
      showInfoCompany: function showInfoCompany () {
	var $name = new DOM('[data-js="companyName"]');
	var $phone = new DOM('[data-js="companyPhone"]');
	$name.get().textContent = this.name;
	$phone.get().textContent = this.phone;
      }, 
    }
  })();
  app.init();
})(window, document);
