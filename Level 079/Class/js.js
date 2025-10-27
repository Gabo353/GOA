const arrow = document.querySelector("button");
arrow.addEventListener("click", () => {
    let bb = document.getElementById('body')
    bb.style.background = 'red'

});

const arrowv1 = () => {

    console.log('V1')

}
console.log(arrowv1())

const arrowv2 = () => {

    let jabo = 'Gabo'
    return (
        "V2"
    )
}
console.log(arrowv2())

const arrowv3 = (name) => (
    "V3"
);

console.log(arrowv3())


function grow(x) {

    x.style.height = '200px'
    x.style.width = '200px'

}

function normal(x){

    x.style.height = '100px'
    x.style.width = '100px'

}


function M_up(x){

    x.style.color = 'red'

}

function M_down(x){

    x.style.color = 'blue'

}
//mouse over is dros tu maousi imyopeda elementze moxdeba is rasac chven davwert Shebasamis funqciashi, da aseve moxdeba rodesac mouse out i moxdeba anu rodesac mous movashorebt...

//mouse up aris rodesac chven ar "vawvebit" elements, xolo mous dow piriqit rodesac vawvebit