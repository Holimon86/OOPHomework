

    let arr = [
        [1,2], [3,4], [5,6]
    ];
    for(let i=0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
   
  
    let array = [
        [1, 2], [3, 4], [5, 6]
      ];
      
      for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            return array;
        }
      }
  
      function greaterThan(mamba, mJ) {
        if (mamba > mJ) {
          return mamba;
        } else {
          return mJ;
        }
      }
      
      console.log(greaterThan(5, 10));

      function compareValues(mamba1, mamba2) {
        if (mamba1 == mamba2) {
          return "Values are equal";
        } else {
          return "Values are not equal";
        }
      }
    
      console.log(compareValues(5, 5));
      console.log(compareValues(5, "5"));
    