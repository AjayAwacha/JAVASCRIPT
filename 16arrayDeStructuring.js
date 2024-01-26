
const arr = [10, 20, 30];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [d, e, f] = arr;
console.log(d, e, f);

const [g, h] = arr;
console.log(g, h);

// using rest parameter
// rest parameter is left side from assignment operator
// rest parameter must be last in destructing
const [i, ...j] = arr;
console.log(i, j);

const [k, , l] = arr;
console.log(k, l);

const food = {
    breakfast: ['poha', 'upma', 'dalwada', 'meduwada'],
    lunch: ['ricePlate', 'chapatiBhaji', 'Dalrice'],
    dinner: ['subji', 'Bhakri'],
    foodPrice: function(mainIndex, secoundIndex) {
        return [this.lunch[mainIndex], this.lunch[secoundIndex]]
    }
};
const [br, up, , md] = food.breakfast;
console.log(br, up, md);

// interchange
let [first, secound] = [10, 20];
console.log(first, secound);

// const temp = first;
// first = secound;
// secound = temp;
// console.log(first, secound);

[secound, first] = [first, secound];
console.log(first, secound);

const [firstPreference, secoundPreference] = food.foodPrice(2,0);
console.log(firstPreference, secoundPreference);

// nested array 
const [m, n, o] = [10, 20, [1, 2,3]];
console.log(m, n, o);

const [p, q, [r ,s ,t]] = [10, 20, [1, 2, 3]];
console.log(p, q, r ,s ,t);

// // default values
const [u = 1 , v = 1, w = 1] = [10, 40];
console.log(u, v, w);
