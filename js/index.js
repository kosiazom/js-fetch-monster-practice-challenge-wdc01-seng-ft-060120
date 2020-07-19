console.log ('It is Monster Time')
 
const BASE_URL = "http://localhost:3000/monsters/?_limit=50&_page=1"
const POST_URL = "http://localhost:3000/monsters"



document.addEventListener('DOMContentLoaded', function(e) {
    let monsterCollection = document.getElementById('monster-container')

    fetch(BASE_URL)
    .then(resp => resp.json())
    .then(monsterArray => {
        monsterArray.forEach(monster => renderAMonster(monster))
    }) //decided to create the loop here since youa re already
    //getting an array back
         //loop thru these monster array and render each monster onto a page 
   //  }


    //Functions
 function renderAMonster(monster) {
    let monsterCollection = document.getElementById('monster-container')
     let div = document.createElement('div')
     div.className = 'monster'
     div.id = `${monster.id}`

     div.innerHTML = `
 <h2> Name: ${monster.name}</h2>
 <h4>Age: ${monster.age}</h4>
 <p>${monster.description}</p>
 `
     monsterCollection.append(div)
 }
 ///////Above takes care of fetchin the data from the api

 function makeMonsterForm(){ 
    let monsterForm = document.getElementById('create-monster')
    let form = document.createElement('form')
    form.id = "monster-form"
    form.innerHTML = `
    <input id="name" placeholder="name..."
    <input id="age" placeholder="age..."
    <input id= "description placeholder="description..."
    ` 
    monsterForm.append(form)
    console.log(monsterForm)
 }
 

// function postMonster(newMonster){
    
//     fetch(url, {
//         method: "POST",
//         headers: 
//         {
//             "content-type": 'application/json',
//             "accept": "application/json"
//         },
//         body: JSON.stringify(Monster)
//     })
//     .then(resp => resp.json()) //another promise being returned
//     .then(newMonster => {
//         return renderAMonster(newMonster);
//     })// when you ger the new monster back then you want to be sure to render it
// }




});//DOMContentLoaded