var count = 9;
var count1 = 12;
var count2 = 9;
var countElement = document.querySelector("#visualLike");
var countElement1 = document.querySelector("#visualLike1");
var countElement2 = document.querySelector("#visualLike2");

console.log(countElement);

function addLike() {
    count++;
    countElement.innerText = count + " Like(s)";
    console.log(count1);
    /* var lik = document.querySelector('#visualLike'); */
    
}

function addLike1() {
    count1++;
    countElement1.innerText = count1 + " Like(s)";
    console.log(count);
    /* var lik = document.querySelector('#visualLike'); */
    
}

function addLike2() {
    count2++;
    countElement2.innerText = count2 + " Like(s)";
    console.log(count);
    /* var lik = document.querySelector('#visualLike'); */
    
}
