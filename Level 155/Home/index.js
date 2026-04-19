//  დავალება: "კიბერ-დეტექტივი და ქსელური ანომალიები"
// შესავალი: შენ ხარ კიბერ-უსაფრთხოების სპეციალისტების გუნდში. შენი ამოცანაა გააანალიზო ჰაკერების ქსელი, იპოვო საერთო დამნაშავეები და გაფილტრო სერვერის დანაგვიანებული ლოგები.
// ნაბიჯი 1: სერვერის ლოგების გაწმენდა (Objects & Set)
// მოცემული გაქვს სერვერზე შემოსვლის ისტორია ობიექტების მასივის სახით, სადაც ბევრი განმეორებადი IP მისამართია:
// JavaScript
// const loginLogs = [
//   { userId: 1, ip: "192.168.1.10" },
//   { userId: 2, ip: "10.0.0.5" },
//   { userId: 3, ip: "192.168.1.10" }, // დუბლიკატი IP
//   { userId: 4, ip: "172.16.0.1" },
//   { userId: 5, ip: "10.0.0.5" }      // დუბლიკატი IP
// ];
// შენი ამოცანაა: მიიღო მხოლოდ უნიკალური IP მისამართების სია.
// ყურადღება: Set ობიექტებს პირდაპირ ვერ ადარებს (რადგან მეხსიერებაში სხვადასხვა რეფერენსები აქვთ). მოგიწევს ჯერ მასივიდან მხოლოდ IP-ების ამოღება (მაგ: .map()-ით) და შემდეგ Set-ში გატარება.
// ნაბიჯი 2: მთავარი ეჭვმიტანილის პოვნა (Multi-Intersection)
// გამოძიებამ ამოიღო სამი სხვადასხვა ჰაკერის კონტაქტების სია (Set-ების სახით): hackerA_Contacts, hackerB_Contacts, hackerC_Contacts.
// დაწერე ფუნქცია findMastermind(setA, setB, setC).
// ფუნქციამ უნდა იპოვოს და დააბრუნოს ისეთი კონტაქტი (ან კონტაქტები), რომელიც სამივე ჰაკერის სიაში ფიგურირებს (რადგან დიდი ალბათობით ის არის მთავარი დამკვეთი).
// ნაბიჯი 3: კვალის არევა (Symmetric Difference 3 სუბიექტზე)
// ჰაკერები იყენებენ ე.წ. "Burner" (ერთჯერად) ტელეფონებს, რომლებსაც მხოლოდ ერთხელ უკავშირდებიან.
// დაწერე ლოგიკა, რომელიც იპოვის ისეთ IP მისამართებს, რომლებიც გვხვდება მხოლოდ ერთ ნებისმიერ ჰაკერთან და არა რამდენიმესთან ერთად. (ანუ, IP-ები, რომლებიც აბსოლუტურად უნიკალურია თითოეული ჰაკერისთვის).

// ნაბიჯი 4: "მარყუჟის" დეტექცია (The "Visited" Pattern - Set-ის საუკეთესო გამოყენება)
// ჰაკერი ცდილობს შენი ტრეკინგის სისტემა უსასრულო ციკლში (Infinite Loop) შეიყვანოს სერვერების ერთმანეთზე გადამისამართებით:
// const traceRoute = ["Server_Alpha", "Server_Beta", "Server_Gamma", "Server_Alpha", "Server_Delta"];
// შექმენი ფუნქცია detectLoop(routeArray).
// ფუნქციის შიგნით შექმენი ცარიელი Set სახელად visited.
// დაიწყე მასივზე იტერაცია (მაგ: for...of ციკლით). თითოეული სერვერი შეამოწმე:
// თუ ეს სერვერი უკვე არის visited Set-ში, ე.ი. ციკლში ვიჭედებით! დალოგე: "გაფრთხილება: ნაპოვნია მარყუჟი სერვერზე [სახელი]!" და შეაჩერე (break/return) ფუნქცია.
// თუ არ არის, დაამატე ის visited Set-ში.

const hackerA_Contacts = new Set([
  "192.168.1.10",
  "10.0.0.5",
  "172.16.0.1"
])
const hackerB_Contacts = new Set([
  "10.0.0.5",
  "8.8.8.8",
  "192.168.1.10"
])
const hackerC_Contacts = new Set([
  "192.168.1.10",
  "1.1.1.1",
  "10.0.0.5"
])
const loginLogs = [
  { userId: 1, ip: "192.168.1.10"},
  { userId: 2, ip: "10.0.0.5" },
  { userId: 3, ip: "192.168.1.10" }, // დუბლიკატი IP
  { userId: 4, ip: "172.16.0.1" },
  { userId: 5, ip: "10.0.0.5" }      // დუბლიკატი IP
]
const unique_list = new Set()
loginLogs.forEach(each => unique_list.add(each.ip))


function findMastermind(setA, setB, setC){
    let profesor = ''
    unique_list.forEach(x => {

        if (setA.has(x) && setB.has(x) && setC.has(x)){
            profesor = x
        }

    })
    console.log(profesor)
}
findMastermind(hackerA_Contacts,hackerB_Contacts,hackerC_Contacts)
let not_burner_ip = []
for (each of hackerA_Contacts){
  if (!hackerB_Contacts.has(each) && !hackerC_Contacts.has(each)){
    not_burner_ip.push(each)
  }
}
for (each_2 of hackerB_Contacts){
  if (!hackerC_Contacts.has(each_2) && !hackerC_Contacts.has(each_2)){
    not_burner_ip.push(each_2)
  }
}
for (each_3 of hackerC_Contacts){
  if (!hackerB_Contacts.has(each_3) && !hackerA_Contacts.has(each_3)){
    not_burner_ip.push(each_3)
  }
}

const traceRoute = ["Server_Alpha", "Server_Beta", "Server_Gamma", "Server_Alpha", "Server_Delta"]

function detectLoop(routeArray){

  let visited = new Set()
  for (each of routeArray){
    if (!visited.has(each)){
      visited.add(each)
    }
    else{
      console.log(`გაფრთხილება: ნაპოვნია მარყუჟი სერვერზე ${each}!`)
      break;
    }
  }
}
detectLoop(traceRoute)