function example() {
    console.log(x);   // Hoisting is possible with var
    // console.log(y);  // Hoisting is not possible with let and const
    // console.log(z);

    var x = 1;  // Function-scoped
    let y = 2;  // Block-scoped
    const z = 3;  // Block-scoped
  
    if (true) {
      var x = 10;  // have Function-scope that's why value over-ride
                   // re-declare with same scope
      let y = 20;  // have Block-scope that's why New block-scoped variable
    //   let y = 30;  // re-declaration is not possible in same scope
      const z = 30;  // have Block-scope that's why  New block-scoped variable
    //   let x = 30;  // re-declaration is not possible in same scope

      console.log(x, y, z);  // Output: 10, 20, 30
    }
  
    console.log(x, y, z);  // Output: 10, 2, 3
  
    x = 100;  // Reassignment is possible with let
    y = 200;  // Reassignment is possible with var
    // z = 300;  // Error: Cannot reassign a constant variable
  
    console.log(x, y, z);  // Output: 100, 200, 3
  }
  
  example();
  