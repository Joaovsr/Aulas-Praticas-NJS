(function (win, doc){
	function app () {
		return {
			init: function init () {
				console.log('app init');
				this.companyInfo();
				this.initEvents();
			},
			initEvents: function initEvents () {
				$btnCadastrar = new DOM('[data-js="btnCadastrar"]')
				$btnCadastrar.on('click', this.handleSubmit,false);
			},
			handleSubmit: function handleSubmit(e){
				e.preventDefault();
				var $tableCar = new DOM ('[data-js="tableCar"]').get();
				$tableCar.appendChild(app().createNewCar());
			},
			createNewCar: function createNewCar (){
				var $fragment =  doc.createDocumentFragment();
				var $tr = doc.createElement('tr');
				var $tdImage = doc.createElement('td');
				var $image = doc.createElement('img');
 				var $tdBrand = doc.createElement('td');
				var $tdYear = doc.createElement('td');
				var $tdPlate = doc.createElement('td');
				var $tdColor = doc.createElement('td');


				$image.setAttribute('src', new DOM ('[data-js="imgCar"]').get().value);
				$tdImage.appendChild($image);
				$tdBrand.textContent = new DOM('[data-js="modelCar"]').get().value;
				$tdYear.textContent = new DOM('[data-js="yearCar"]').get().value;
				$tdPlate.textContent = new DOM('[data-js="placaCar"]').get().value;
				$tdColor.textContent = new DOM('[data-js="colorCar"]').get().value;

				$tr.appendChild($tdImage);
				$tr.appendChild($tdBrand);
				$tr.appendChild($tdYear);
				$tr.appendChild($tdPlate);
				$tr.appendChild($tdColor);

				return $fragment.appendChild($tr)
			},

			companyInfo: function companyInfo (){
				var ajax = new XMLHttpRequest();
				ajax.open('GET', '/company.json', true);
				ajax.send();
				ajax.addEventListener('readystatechange', this.getCompanyInfo, false);
			},
			getCompanyInfo: function getCompanyInfo () {
				if ( app().isReady.call(this))
					return
				var data = JSON.parse(this.responseText);
				app().showInfoCompany.call(data);
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
	}
	app().init();
})(window, document);