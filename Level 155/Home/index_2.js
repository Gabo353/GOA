// დავალება: "ალქიმიკოსის ლაბორატორია და გილდიის საცავი"
// შესავალი: შენი მიზანია შექმნა ლოგიკა, რომელიც მართავს მოთამაშეების ინვენტარს, ამოწმებს აქვთ თუ არა საკმარისი რესურსები რთული ელექსირების დასამზადებლად და ფილტრავს გამოუსადეგარ ნივთებს.
// ნაბიჯი 1: გილდიის საცავი (Union - გაერთიანება)
// შექმენი ორი Set: player1Bag და player2Bag (მაგალითად, შიგნით ჩაყარე: "Bloodthorn", "Water", "Glowspore", შეურიე საერთო და უნიკალური ნივთები).
// დაწერე ფუნქცია createGuildStash(bag1, bag2), რომელიც დააბრუნებს ახალ Set-ს — ორივე მოთამაშის ნივთების საერთო საცავს (დუბლიკატების გარეშე).
// ნაბიჯი 2: რეცეპტის შემოწმება (Subset / Superset)
// შექმენი Set სახელად healthPotionRecipe (მაგალითად, სჭირდება: "Water", "Bloodthorn", "Crystal").
// დაწერე ფუნქცია canCraft(recipe, stash).
// ფუნქციამ უნდა შეამოწმოს, მოიპოვება თუ არა რეცეპტის ყველა ინგრედიენტი გილდიის საცავში (ანუ არის თუ არა რეცეპტი საცავის ქვე-სიმრავლე). თუ მოიპოვება — დააბრუნოს true, წინააღმდეგ შემთხვევაში — false.
// ნაბიჯი 3: რა გვაკლია? (Advanced Difference)
// თუ canCraft აბრუნებს false-ს, მოთამაშემ ზუსტად უნდა იცოდეს რა აკლია, რათა მოსაძებნად წავიდეს.
// დაწერე ფუნქცია getMissingIngredients(recipe, stash), რომელიც დააბრუნებს ახალ Set-ს მხოლოდ იმ ინგრედიენტებით, რომლებიც რეცეპტშია მოთხოვნილი, მაგრამ საცავში არ გვაქვს.
// ნაბიჯი 4: ექსკლუზიური ვაჭრობა (Symmetric Difference)
// წარმოიდგინე, რომ მოთამაშეებს ერთმანეთში ნივთების გაცვლა უნდათ, მაგრამ აინტერესებთ მხოლოდ ისეთი ნივთები, რაც ერთს აქვს და მეორეს არა.
// დაწერე ფუნქცია getTradeableItems(bag1, bag2), რომელიც დააბრუნებს ისეთ Set-ს, სადაც მოხვდება ნივთები პირველი ჩანთიდან (რაც მეორეში არაა) პლუს ნივთები მეორე ჩანთიდან (რაც პირველში არაა).
// ნაბიჯი 5: ნაგვის გაფილტვრა (Array filtering with Set)
// მოთამაშემ ტყეში იპოვა ბევრი ნივთი, თუმცა ზოგიერთი უსარგებლოა:
// const gatheredLoot = ["Wood", "Rotten Flesh", "Bloodthorn", "Mud", "Wood", "Crystal", "Mud"];
// შექმენი Set სახელად trashItems (შიგნით ჩაწერე "Rotten Flesh" და "Mud").
// დაწერე ფუნქცია cleanLoot(lootArray, trashSet), რომელიც გადაურბენს მოპოვებული ნივთების მასივს, ამოაგდებს ნაგავს (გამოიყენე Set.has() ოპერაციის სისწრაფისთვის) და დააბრუნებს მხოლოდ სუფთა, უნიკალური სასარგებლო ნივთების Set-ს.



let player1Bag = new Set(["Wolf Skin", "Water", "Glowspore"])
let player2Bag = new Set([ "Bloodthorn","Acid", "Glowspore"])


function createGuildStash(bag1, bag2) {
    let Union_bag = new Set()
    bag1.forEach(x => Union_bag.add(x))
    bag2.forEach(x => Union_bag.add(x))
    console.log(Union_bag)

    let healthPotionRecipe = new Set(["Water", "Bloodthorn", "Crystal"])
    function canCraft(recipe, stash) {
        let all_have = new Set()
        for (each of recipe){
            if(stash.has(each)){
                all_have.add(true)
            }
            else{
                all_have.add(false)
            }
        }
        if(all_have.has(false)){
            console.log(false)
        }
        else{return (true)}
    }

    function getMissingIngredients(recipe, stash){
        let needed = new Set()
        for (each of recipe){
            if(stash.has(each)){
            }
            else{
                needed.add(each)
            }
        }
        console.log(`You need ${each}`)
    }
    if(canCraft(healthPotionRecipe,Union_bag) == true){
        console.log('You can craft Health Potion')
    }
    else{
        getMissingIngredients(healthPotionRecipe,Union_bag)
    }
}
createGuildStash(player1Bag, player2Bag)


function getTradeableItems(bag1, bag2){
    let good_for_trade = new Set()
    bag1.forEach(each => {
        if(!bag2.has(each)){
            good_for_trade.add(each)
        }
    })
    bag2.forEach(each => {
        if(!bag1.has(each)){
            good_for_trade.add(each)
        }
    })
    if(good_for_trade.size == 0){
        console.log('No point to trade')
    }
    console.log(good_for_trade)
}   
getTradeableItems(player1Bag,player2Bag)


const gatheredLoot = ["Wood", "Rotten Flesh", "Bloodthorn", "Mud", "Wood", "Crystal", "Mud"]

let trashItems = new Set(["Rotten Flesh","Mud"])

function cleanLoot(lootArray, trashSet) {
    let useful = new Set()
    for (let item of lootArray) {
        if (!trashSet.has(item)) {
            useful.add(item)
        }
    }
    console.log([...useful])
    return useful
}

cleanLoot(gatheredLoot, trashItems)