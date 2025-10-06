let nameing = ['gela','gelagela','anzori','banazori'];

let new_arr = []

function specific(namer,newer) {

    for (let h = 0; h < namer.length; h++) {

        if (namer[h].length % 2 == 0 && namer[h].length > 5) {

            newer.push(namer[h])

        }

    }
    
    for (let g = 0; g < newer.length; g++) {
        
        if (newer[g][0] == 'a') {

            newer.splice(g,g)

        }
        
    }
    console.log(newer)
}

specific(nameing,new_arr)

console.log('----------------------------------')
