function greet(name) {
    const p = document.getElementById('p-tag');
    p.innerText =  `Good Noon`;
    console.log('good noon');
}
const name = 'arafat'
document.getElementById('btn-id').addEventListener('click',greet);