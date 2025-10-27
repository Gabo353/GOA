
const button = document.getElementById('button')
let darkmode = true
button.addEventListener('click',function (){

    if (darkmode){

        document.body.classList.add('dark');
        darkmode = false;
    }
    else{

        document.body.classList.remove('dark');
        darkmode = true;
    }

}


) 



