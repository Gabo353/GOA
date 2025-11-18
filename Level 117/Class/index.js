//1)შექმენით ერთი დივი,მიეცით ზომები 150px სიგანე 300px სიმაღლე/მიეცით წითელი ბორდერი

//ამ დივში ჩააშენეთ 1 ფოტო(ინტერნეტშ მოძებნეთ ნებისმიერი ფოტო)

//ამ დივშ ფოტოს ქვემოთ ჩააშენეთ 1 სათაური , ამ სათაურს ქონდეს class --> "heading" და css ში გასტილეთ

//სათაურის ქვემოთ ჩააშენეთ 1 პარაგრაფი რომელსაც კლასი ექნება paragraph და css იდან გასტილეთ

//და ამ სათაურის ქვევით იყოს button რომელსაც გასტილავთ css იდან


let div = document.getElementById('div');

div.innerHTML = "<div style='width:150px; height:300px;'><img src='./sun.jpeg'><h1 class='heading'>hi im title</h1><p class='paragraph'>hi im paragraph</p><button>wowo click me</button?</div>";

