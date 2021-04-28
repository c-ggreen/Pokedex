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
        $('#pokeName').html(data.name.toUpperCase())
        $('#pokeType').html(data.types[0].type.name.toUpperCase())
        // $('pokeImage').attr("href", data.sprites.front_default)
        $('#pokeAbility1').html(data.abilities[0].ability.name.toUpperCase())
        $('#pokeAbility2').html(data.abilities[1].ability.name.toUpperCase())
        $('#pokeNum').html(data.id)
        
        // Changes the color of the card background according to Pokemon Type
        let colorType = $('#pokeType')
        console.log(colorType[0].innerHTML);

        if(colorType[0].innerHTML == 'FIRE'){
            $('.cardInner').css('background-color','#ff4422')
        }
        else if(colorType[0].innerHTML == 'NORMAL'){
            $('.cardInner').css('background-color','#aaaa99')
        }
        else if(colorType[0].innerHTML == 'WATER'){
            $('.cardInner').css('background-color','#3399ff')
        }
        else if(colorType[0].innerHTML == 'ELECTRIC'){
            $('.cardInner').css('background-color','#ffcc33')
        }
        else if(colorType[0].innerHTML == 'GRASS'){
            $('.cardInner').css('background-color','#77cc55')
        }
        else{
            $('.cardInner').css('background-color', '#ffffff')
        }
    } 
})



