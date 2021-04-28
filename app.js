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
        $('#pokeType').html(data.types[0].type.name)
        $('#pokeNum').html(data.id)
        
        // Changes the color of the card background according to Pokemon Type
        let colorType = $('#pokeType')
        console.log(colorType[0].innerHTML);

        if(colorType[0].innerHTML == 'fire'){
            $('.cardInner').css('background-color','#ff4422')
        }
        else if(colorType[0].innerHTML == 'normal'){
            $('.cardInner').css('background-color','#aaaa99')
        }
        else if(colorType[0].innerHTML == 'water'){
            $('.cardInner').css('background-color','#3399ff')
        }
        else if(colorType[0].innerHTML == 'electric'){
            $('.cardInner').css('background-color','#ffcc33')
        }
        else if(colorType[0].innerHTML == 'grass'){
            $('.cardInner').css('background-color','#77cc55')
        }
        else{
            $('.cardInner').css('background-color', '#ffffff')
        }
    } 
})



