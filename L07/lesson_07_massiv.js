
var k = {
	a: {
		s: {
			f: 3,
		}
	}
};

k.a.s.f  // обращение к элементу f   - медленный вариант чем ниже

var f2 = k.a.s;
f2.f

// windnow.document равносильно document



// --------------------------------------------------------------------------


function Book (bookName, author, pages) {   // конструктор
	this.name = bookNme;
	this.author = author;
	this.pages = pages;
};

var books = []; // create array

// push - добавление элемента в массив
books.push(new Book('JS', 'Crokfold G.', '300'));
books.push(new Book('CSS', 'Crokfold M.', '500'));
books.push(new Book('HTML', 'Crokfold N.', '400'));
books.push(new Book('PHP', 'Crokfold P.', '700'));



// --------------------------------------------------------------------------














