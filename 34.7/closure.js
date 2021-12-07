function takeVal(val) {
    return function () {
        console.log(++val);
        return val;
    }
}

const increaser1 = takeVal(5);
increaser1();

const increaser2 = takeVal(5);

for(let i =0;i<5;i++){
    increaser2();
}
