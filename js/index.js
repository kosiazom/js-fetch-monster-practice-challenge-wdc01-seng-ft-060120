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
     div.id = monster.id
     div.innerHTML = `
 <h2> Name: ${monster.name}</h2>
 <h4>Age: ${monster.age}</h4>
 <p>${monster.description}</p>
 `
     monsterCollection.append(div)
    
 }
 ///////Above takes care of fetchin the data from the api

 function makeMonsterForm(){ 
    let monsterFormContainer = document.getElementById('create-monster')
    let form = document.createElement('form')
    form.id = "monster-form"
    form.innerHTML = `
    <input id="name" placeholder="name...">
    <input id="age" placeholder="age...">
    <input id= "description" placeholder="description...">
    <button>Create</button>
    ` 
    monsterFormContainer.appendChild(form)
    console.log(form)
 }
 makeMonsterForm() //for the forms dont forget to call the function

 
 
 function postMonster(newMonsterObject){
     
     fetch(POST_URL, { //makesure you use the POST_URL Variable
         method: "POST",
         headers: 
         {
             "content-type": 'application/json',
             "accept": "application/json"
            },
            body: JSON.stringify(newMonsterObject)//pass in same variable that you passed in the post!
        })
        .then(resp => resp.json()) //another promise being returned
        .then(newMonster => {
            return renderAMonster(newMonster);
        })// when you ger the new monster back then you want to be sure to render it
    }
    
    //add a submit eventlistener to the form 
    const newMonsterForm = document.getElementById('monster-form') //find a variable for monster form

    newMonsterForm.addEventListener('submit', function(e){ //listens for a submit
        e.preventDefault()
        //creater the new monster form here by grabbing the forms values its best you set that to a variable so you 
        //pass it into the postMonster function and call it back! DOnt forget to reset the form
                const newMonster = {
                name: newMonsterForm.name.value,
                age:  newMonsterForm.age.value,
                description: newMonsterForm.description.value
            }
            //this information is what will make the post fetch, you can pass in the URL
     postMonster(newMonster) //call it in the event listerner
     //make sure you reset the newMonsterForm
     newMonsterForm.reset() //call it after the form has been posted
    })



});//DOMContentLoaded