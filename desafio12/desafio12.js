/*
Envolva todo o conteúdo desse arquivo em uma IIFE.
*/
(function(){

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	var person = {
		name: 'joao',
		lastname: 'rodrigues',
		age: 20
	}
	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	console.log(Object.keys(person));

	/*
	Crie um array vazio chamado `books`.
	*/
	var books = [];


	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	books.push({name: 'joao e maria',pages: 20 });
	books.push({name: 'o peixe voador',pages: 20 });
	books.push({name: 'a raposa e o corvo',pages: 20 });

	/*
	Mostre no console todos os livros.
	*/
	// ?
	console.log( '\nLista de livros:');
	console.log(books);

	/*
	Remova o último livro, e mostre-o no console.
	*/
	console.log( '\nLivro que está sendo removido:' );
	console.log( books.pop() );


	/*
	Mostre no console os livros restantes.
	*/
	// ?
	console.log( '\nAgora sobraram somente os livros:' );
		console.log( books );
	
	/*	
	Converta os objetos que ficaram em `books` para strings.
	*/
	
	console.log( '\nLivros em formato string:' );
	console.log(JSON.stringify(books));
	books = JSON.stringify(books);
	/*
	Mostre os livros nesse formato no console:
	*/
	console.log(books);

	/*
	Converta os livros novamente para objeto.
	*/
	books = JSON.parse(books);

	console.log( '\nAgora os livros são objetos novamente:' );

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	// */
	for (var i = 0; i < Object.keys(books).length; i++){
		for (var prop in books[i]){
			console.log( prop + ':' + books[i][prop])
		}		
	}

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	var myName = ['j','o','a','o'];
	console.log( '\nMeu nome é:', myName.join(''));
	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	// ?

	console.log( '\nMeu nome invertido é:', myName.reverse().join(''));

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	// ?

	console.log( '\nAgora em ordem alfabética:', myName.sort());
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	


})()