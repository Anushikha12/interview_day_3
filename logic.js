//What are promises and why do we need them?

//promise is basically an object which represents the completion or failure of asynchronous operation along with result.
//they are used to handle asynchronous operation without getting stuck in callback hell.
//example-
    var promise=new Promise(function(resolve,reject){
        let x=10;
        let y=10;
        if(x===y){
            resolve();
        }
        else{
            reject();
        }
    })
    promise.then(function(){
        console.log("equal");
    }).catch(function(){
        console.log("not equal")
    });

//What is the purpose of async/await keywords?

//async and await keyword are used to avoid promise chaining.
//sync keyword makes sure that a promise is returned while async keyword is used within the await block to wait for the promise to return a result.
//example-

    async function foo(){
        let promise=new Promise(function(resolve,reject){
            setTimeout(()=>resolve("done!"),3000);
        })
        let result=await promise;
        console.log(result);
    }
    foo();

//What is hoisting?

//hoisting is the default behaviour of js by which all the variables and function declaration are moved to the top of the scope.
//only declaration is hoisted,initialization is not hoisted.
//var keyword is hoisted,let and const keywords are not hoisted.
//example-

    console.log(test);//undefined
    var test=20;

    console.log(a);//reference error
    let a=20

//What is the DOM?

//DOM is Document object model.it is a way to represent webpage in a structured hierarchical way.
//it is used to manipulate the html elements.

//Difference between undefined vs not defined vs NaN.

//undefined-when we have declared the variable but have not assigned any value to it.if we try to access this variable,we get undefined.
    let c;
    console.log(c);//undefined
//not defined-when we have not even declared the variable but try to access it,we get not defined.
     console.log(b)//not defined
//NaN-it is "not a number".it represents a value which is not a valid number.
//example-
    console.log("hi"/5);//NaN
    console.log(Math.sqrt(-1))//nan

//How many operators do we have in JS ?

//operators are special symbols which are used to perform some operation between two operands.
//there are 7 operators in js-
// 1.)Arithmatic operator
// 2.)bitwise operator
// 3.)comma operator
// 4.)conditional or ternary operator
// 5.)logical operator
// 6.)increment-decrement operator
// 7.)comarison operator

//What are pure functions?

//pure functions are the functions which give same result always for same argument or input.they dont depend on any other variable.
//example-
    function pure(a){
        console.log(a*4);//it will always return 16 for input 4.
    }
    pure(4);

//What is callback hell?

//callback hell is multiple callbacks stacked together where every callback takes an argument which is the result of the previous callback,eventually making a pyramid like structure which is very hard to read and maintain.
//it becomes hard to debug callback hell.
//example-
    function cb(){
        setTimeout(function(){
            setTimeout(function(){
                setTimeout(function(){
                    setTimeout(function(){
                        let e=10;
                        let f="10";
                        if(e===f){
                            console.log("true")
                        }
                        else{
                            console.log("false");
                        }
                    },1000)
                },1000)
            },1000)
        },1000)
    }
cb();

//What is promise chaining?

//promise chaining is a feature of promise by which multiple .then() handlers can be attached to promise.
//it can be avoided bt using async and await keyword.

//What are arrow functions?

//it is one of the featured introduced in ES6 version of js.it is basically an alterante to the regular function expression.
//it allows us to create function in a cleaner way.
//it is also an anonymous function since it doesnt have any name.
//example-
    let X=(x,y)=>
        console.log(x*y);
    X(5,6);

//Give a example of async await keyword.
async function foo(){
    let promise=new Promise(function(resolve,reject){
        setTimeout(()=>resolve("done!"),3000);
    })
    let result=await promise;
    console.log(result);
}
foo();
