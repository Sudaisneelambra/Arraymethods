// Creation of array
const one = new Array('name','address',1)
console.log('FirstCreated Array : ' , one)

// at() method
const secondElement = one.at(1)
console.log('find element from Array using At : ' ,secondElement)

// concate() to koin
const two = new Array('age','place')
const concate= one.concat(two)
console.log('concated array one and array two : ', concate)

// constructor
const three =[1,2,3,4,5]
const constructor = three.constructor
// it return an function that created array prototype
console.log('constructor using array.constructor :', constructor)

// copyWithin
console.log('copy within : ', three.copyWithin(3))
// The first three elements [1, 2, 3] are copied over to positions starting at index 2, resulting in [1, 2, 1, 2, 3].

// entries
const entries = three.entries()
for(let i of entries){
    console.log('find the entries : ',i)
}

// every
const every = three.every((num)=> num<3)
console.log('check the condition using every : ', every)

// fill
one.fill(1)
console.log('fill the all variable using full : ',one)

// filter
const four = [1,2,3,4,5,6,7,8,9,10]
const filter = four.filter(e=> e%2===0)
console.log('filtering :',filter)

// find
const find = four.find(e=> e>4)
console.log('find : ' , find)

// findIndex
const findIndex = four.findIndex((num)=>num>5)
console.log('findIndex : ', findIndex )

// findLast
const findLast = four.findLast((num)=> num>6)
console.log('findLast : ', findLast)

// findLastIndex
const findLastIndex = four.findLastIndex(num=>num>6)
console.log('findLastIndex : ', findLastIndex)

// flat
const five = [[1,2],[3,4],[5,6]]
const flat = five.flat()
console.log('flat : ' , flat)

// flatMap
const six = [1,2,3,4,5,6,7,8,9,10]
const flatMap = six.flatMap(e=> e*2)
console.log('flatMap : ',flatMap)

// foreach
six.forEach((e)=>{
    console.log('foreached : ', e+1)
})

// from 
const seven = 'SUDAISANUNEELAMBRA'
const from = Array.from(seven)
console.log('from : ', from)

// includes 
const includes = from.includes('S','U')
console.log('includes : ',includes)

// indexof
const indexOf = from.indexOf('U')
console.log('indexOf U : ', indexOf)

// isArray
const object = {name:'sudais'}
const isArray = Array.isArray(object)
const isArray1 = Array.isArray(six)
console.log('isArray : ', isArray)
console.log('isArray : ', isArray1)


// join
const splited = seven.split('')
const join = splited.join()
console.log('join : ', join)

// keys
const keys = from.keys()
for (let i of keys){
    console.log('keys : ', i)
}

// lastIndexOf
const fruits = ['apple','mango','orange', 'apple']
const lastIndexOf = fruits.lastIndexOf('apple')
console.log('lastIndexOf : ',lastIndexOf)

// length
console.log('length : ', fruits.length)





















