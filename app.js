// Need the link for the Pokemon API
// document.ready() function
// .onclick() function for when user submits search
// be able to input users search into the api
// populate the data
// set a variable for the user input
// fetch the data
// async await to grab data
// change the data to json data
// prevent default info from populating

// document.read() function
$(()=>{

    // onclick function
    $('form').on('submit', (event)=>{
        event.preventDefault()

        // set a variable for the user input
        const userInput = $('input[type="text"]').val()
        console.log(userInput);
        getPokeData(userInput)
    })
    
    async function getPokeData(input){
        
        // async await to grab the data and fetch the data
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`)
        
        // change the data to the JSON format using .json()
        const data = await response.json()
        console.log(data);
        $('#pokeName').html(data.name)
        let colorType = $('#pokeType').html(data.types[0].type.name)
        $('#pokeNum').html(data.id)
        $('#pokePic').attr("src", data.sprites.front_default)

        if(colorType.value() === 'fire'){
            $('body').css('background-color','#ff4422')
        }
    }
    
    
    
})
switch(colorType){
    case 'fire' : fireType;
        break;
    case 'normal' : normalType;
        break;

}

let normalType = $('body').css('background-color','#aaaa99')
let fireType = $('body').css('background-color','#ff4422')
let waterType = $('body').css('background-color','#3399ff')
let electricType = $('body').css('background-color','#ffcc33')
let grassType = $('body').css('background-color','#77cc55')
