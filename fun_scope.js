
function outer() {
    if (true) {
        function inner() {
            console.log('block inner');
        }
        inner();
    }
    inner();
}
outer();
