let count = 1;

function addText() {
    const input = document.getElementById('myInput').value;
    const text = document.createTextNode(input);
    const li = document.createElement('li');
    li.append(text);

    li.id = count;
    count++;
    console.log(count);

    document.getElementById('list').append(li);

    document.getElementById('myInput').value = '';
    
}

const deleteText = () => {
    
}