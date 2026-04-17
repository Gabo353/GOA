let first_set = new Set([1, 1, 2, 2, 3, 3])

//add - adds element
first_set.add('lasha').add('10')

//delete - deletes element
first_set.delete('lasha')

let check_out = first_set.entries()



//1)შექმენით ერთი სეტი სადაც მოათავსებთ რამდენიმე ელემენტს(ერთნაირი ელემენტები მეორდებოდეს რამდენჯერმე)
// შენი დავალებაა რომ სეტში დაამატო რამდენიმე განსხვავებული ელემენტი(გამოიყენე CHAIN + მეთოდი)
// შემდეგ ამოშალე ის ელემენტი სეტიდან რომელიც პირველია სეტში
// შემდეგ შეამოწმე არის თუ არა თქვენთვის სასურველი ელემენტი სეტში
// შემდეგ კონსოლში გამოიტანე სეტის სიგრძე
// შემდეგ შექმენი ცვლადი და გამოიყენე ENTRIES მეთოდი სეტზე,ამის შემდეგ გადაუარე FOREACH ით და გამოიტანე წყვილად(სიებად)
// ამის შემდეგ გაასუფთავეთ მთლიანი სეტი

function ClassWork1() {

    let sett = new Set([1, 2, 2, 3, 3, 3])
    sett.add('gabo').add('batumi').add(14)
    sett.delete(1)
    sett.has('gabo') ? console.log('Yes there is') : console.log('No there is not')
    console.log(sett.size)
    let each = sett.entries()
    each.forEach(val => { console.log(val) })
    sett.clear()
    console.log(sett)
}



function ClassWork2() {
    let Player1Talnets = new Set(['Dash', 'Punch', 'Atomic', 'Mega punch'])
    let Player2Talnets = new Set(['Mash', 'Punch', 'Natural', 'Mega punch'])

    function LearnTalante(player_knows, newTalante) {
        player_knows.has(newTalante) ? console.log(`You already owe talante '${newTalante}'`) : console.log(`New Talante learned '${newTalante}'`), player_knows.add(newTalante)
    }
    LearnTalante(Player1Talnets, 'fire')

    const bossDrop = ['Dash', 'Punch', 'Atomic', 'Mega punch', 'Ultra punch', 'Water ball', 'Ice hall', 'Star Platinum', 'Dash', 'Dash']
    let no_dub = new Set(bossDrop)
    let skill_bag = [...no_dub]
    console.log(skill_bag)

    function commonTalante(player1, player2) {
        let commmon = new Set()
        player1.forEach(tal => {
            if (player2.has(tal)) {
                commmon.add(tal)
            }
        })
        console.log(commmon)
    }
    commonTalante(Player1Talnets, Player2Talnets)


    function getAdv(mainSet, enemySet) {
        let advt = new Set()
        mainSet.forEach(tal => {
            if (!enemySet.has(tal)) {
                advt.add(tal)
            }
        })

    }

    getAdv(Player1Talnets, Player2Talnets)

}
ClassWork2()