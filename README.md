# Modern-Javascript - Traversy Course

## Section 2: JS fundamnetals
#### random notes on important things or stuff I didn't know.

- `console.time`  `console.timeEnd` useful functions. will display the time taken to run the code in between the two methods.
- variables can only contain letters, numbers, _, $. cannot start with a number
- Primitive data types: string, boolean, number, null, undefined, symbols(ES6)
- Reference types: Arrays, object literals, functions, dates, anything else.

### Math Object

- `Math.PI`
- `Math.round(2.8)` rounds the number.
- `Math.ceil(2.4)` rounds up to 3
- `Math.floor(2.8)` rounds down to 2
- `Math.sqrt(64)` squares [number.gives](http://number.gives) us 8
- `Math.absolute(-4)` gives absolute number. changes negative number to positive
- `Math.power(8,2)` gives 8 to the power or 2. gives us 64
- `Math.min(2.8, 44, 6,88, 54)` returns the smallest number in the list
- `Math.max(2.8, 44, 6,88, 54)` returns the largest number in the list
- `Math.random()` gives random decimal.
- `Math.floor(Math.random()*20+1)`  will return a random number between 1 and 20 and round it down to the nearest number.

### String Methods:

- `'that\'s awesome., I can/'t wait'`  using \ allows the use of apostrophes in strings.
- `fisttName.length` gives length of string or array. it’s a property not a method, so doesn't need ()
- `firstName.concat(' ', lastName)` method for concatenation.
- `firstName.toUpperCase()`
- `firstName.toLowerCase()`
- `firstName[2]` gives second index of string
- `firstName.indexOf('b')` will look for b in the string and return the index of it. gives the first example of b
- `FirstName.lasIndexof()` opposite of above.
- `firstName.charAt('2')` will return the letter at the index of 2
- `firstName.charAt(firstName.length -1)` gives last character of string.
- `firstName.subString(0, 4)` returns string starting at index of 0 and ending at 4. ie. the first 4 characters of a string.
- `firstName.slice(0,4)` very similar to subString.  but…
- `firstName.slice(-3)` a difference is that you can put in a negative number. it’ll start from the back and return the last 3 characters in the string.  Often used with arrays.
- `list.split(’ ‘)` changes a string into an array. each item is declared at the ‘ ‘.
- `string.replace('Brad' , 'Jack)` will replace ‘Brad’ in the string with ‘Jack’
- `string.includes('hello')` will return true as ‘hello’ is included in the string.

### Array Methods

- `array.length` gives length of array
- `Array.isArray(array)` checks to see if something is an array. returns true or false.
- `push() , pop(), shift(), unshift()` add remove items to start/end of an array.
- `array.splice (1,3)` remove items at start and end value.
- `array.reverse()` reverse array.
- `val = array.concat(numbers2)` concatinates (sticks) two arrays together into one array.
- `val= fruit.sort()` sorts into alphabetical order. works for strings. if you use it on numbers it will sort by the first number.; basically not useful.
- `val = numbers.sort(function(x,y){ return x-y})` this will return numbers in order; lowest to highest
- `val = numbers.sort(function(x,y){ return x-y})` this will return numbers in order. highest to lowest.

### Date and times

- `let today = new Date();` by default will return today’s date. this is an object.
- `let birthday= new Date('9-10-1981');` gives date at this specified date.
- `let birthday= new Date('September 10 1981')`
- `let birthday= new Date('9/10/1981');` several ways to declare date.

### Functions

- `function greet (first = 'John' , last ='Doe') {}` This is how you can set default values in functions.
- functions expressions are usually better than declarations.

#### IIFEs - Immediately Invokable Function Expressions.

- functions you can declare and run at the same time.

```jsx
(function(name) {
	console.log('IIFE Ran..hello ${name}`);
})('brad');
```

- useful for certain patterns. e.g. module patterns.

#### Property methods

- creating functions inside of objects.
```
const todo ={
add:function(){
console.log('add todo..');
},
edit: function(id){
console.log(`edit todo ${id});
}
}

//calling the functions

todo.add()
todo.edit(22)

//adding new function to object

todo.delete = function(){
console.log('Delete todo...')}

todo.delete();
```
