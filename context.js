console.log(1);
console.log(2);
// console.log(3);
// doSomething();
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// setTimeout(doSomething, 4000);
setTimeout(() => {
    console.log('Lazy Log')
}, 4000)
console.log(4);
console.log(5);



function doSomething() {
  console.log(3);
}
