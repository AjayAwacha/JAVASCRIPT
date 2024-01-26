const timimg = {
    mon: {
        open: 10,
        close:11
    },
    tue: {
        open: 10,
        close:11
    },
    wed: {
        open: 10,
        close:11
    },
    thu: {
        open: 10,
        close:11
    },
    fri: {
        open: 10,
        close:11
    },
    sat: {
        open: 10,
        close:11
    },
    sun: {
        open: 10,
        close:11
    }
}

const obj = {
    name: 'Ajay Awachar',
    class: 'Gumrah',
    expression: 34,
    //old way of adding object
    // newAddedObject: timimg
    // timimg: timimg

    //new way of adding object
    timimg

    // want to add content of object
    // ...timimg
}
console.log(obj);

const variableName = 76;

// if we want to give object key dynamically need to write in square bracket
const newObj = {
    [`${variableName}-text`] : {
        anyKey: "anyValue"
    },
    ynamicVal: timimg.mon
}
console.log(newObj);