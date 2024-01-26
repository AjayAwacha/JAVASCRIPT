// creating map
//map stored data in key value pair
//inside map key will be any type
const newMap = new Map();

newMap.set('key', 'value');
newMap.set(1, 'first');
newMap.set(2, 'two');

// set method return updated map
console.log(newMap.set('open', 8));

// we can also add like 
newMap.set(true, 'restaurant is open').set(false, 'restaurant is close').set('close', 16);

console.log(newMap.get('key'));

const currentTime = 2;
console.log(newMap.get( currentTime > newMap.get('open') && currentTime < newMap.get('close') ));

console.log(newMap.has('key'));
newMap.delete('key');
console.log(newMap);

const arr = [1, 2];
newMap.set(arr, 'first array stored');
console.log(newMap.get(arr));

// create map
const newMapTwo = new Map([
    ['questions','which is best programing language in world'],
    [1,'java'],
    [2,'c++'],
    [3,'javascript'],
    ['answer',3],
    [true,'correct'],
    [false,'wrong']
]);
console.log(newMapTwo);

// convert object into map
const obj = {
    sun: {
        open:12,
        close: 34
    },
    mon: {
        open:12,
        close: 34
    },
    tue: {
        open:12,
        close: 34
    },
    wed: {
        open:12,
        close: 34
    }
}
const objToMap = new Map(Object.entries(obj));
console.log(objToMap);

//iterating map 
for (const [i, ele] of newMapTwo) {
    console.log(i, ele);
}

// convert map to array
const mapToArray = [...objToMap];
console.log(mapToArray);
