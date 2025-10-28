function sumDifferencesBetweenProductsAndLCMs(pairs){
    let sum = 0
    let sum_lcm = 0
    for (let i = 0; i < pairs.length; i++) {
      
        let a = pairs[i][0]
        let b = pairs[i][1]
        
        let multi = a * b
        
        let all_a = []
        let all_b = []
        for (let c = 1; c < a * b; c++) {
          
            all_a.push(a * c)
            all_b.push(b * c)
          
        }
        let LCM = 0
        for (let g = 0; g < all_a.length;g++) {
          
            if (all_a.includes(all_b[g])) {
              
              LCM += all_b[g]
              break;
              
            }
          
          
        }
        if (a === b) {
          
          LCM = a
          
        }
      sum += multi   
      sum_lcm += LCM
    }
    return sum - sum_lcm
}

console.log(sumDifferencesBetweenProductsAndLCMs(10000,2000))