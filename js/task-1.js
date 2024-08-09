let listItems = document.querySelectorAll('.item');

console.log('Number of categories: ' + listItems.length);
listItems.forEach(item => {
    console.log('Category: ' + item.querySelector('h2').innerText);
    console.log('Elements: ' + item.querySelector('ul').querySelectorAll('li').length);
})