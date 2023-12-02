let count = 1;

const deleteText = c => {
	let element = document.getElementById(c - 1);
	console.log(element, count);
	element.remove();
};

function addText() {
	const input = document.getElementById('myInput').value;
	// здесь сизвлекли текст из input
	const text = document.createTextNode(input);
	// здесь подготовили текст для li
	const li = document.createElement('li');
	// создали элемент li
	li.append(text);
	// добавили текст (text) в li

	const button = document.createElement('button');
	
	const textButton = document.createTextNode('❌');
	button.append(textButton);

	button.addEventListener('click', function () {
		deleteText(count);
	});

	li.append(button);

	button.id = count;
	li.id = count;

	count++;
	document.getElementById('list').append(li);
	document.getElementById('myInput').value = '';
}