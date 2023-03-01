
$(()=>{

    /////////THIS IS FOR THE carousel on the home page

    let currentTextBox = 0

    const numOfTextBox = $('.carousel-text').children().length - 1


    // FWD BUTTON EVENT
    $('.next').on('click', () => {
        $('.carousel-text').children().eq(currentTextBox).css('display', 'none')

        if (currentTextBox < numOfTextBox) {
            currentTextBox++
        } else {
            currentTextBox = 0
        }

        $('.carousel-text').children().eq(currentTextBox).css('display', 'block')
    })


    // BACK BUTTON EVENT
    $('.previous').on('click', () => {
        $('.carousel-text').children().eq(currentTextBox).css('display', 'none')

        if (currentTextBox > 0) {
            currentTextBox--
        } else {
            currentTextBox = numOfTextBox
        }

        $('.carousel-text').children().eq(currentTextBox).css('display', 'block')


    })



    //////////THIS IS FOR THE modal on the home page
    const $openBtn = $('#openModal');

    const $modal = $('#modal');

    const $closeBtn = $('#close');


    const openModal = ()=>{
        $modal.css('display', 'block')
    }
    $openBtn.on('click', openModal)


    const closeModal =()=>{
        $modal.css('display', 'none')

    }

    $closeBtn.on('click', closeModal)

////////////THIS IS FOR the alert on the chat page when contact info is submitted
   
    const $submitForm= $('.submitbutton');

    const subAlert = () => {
        alert("Your form was successfully submitted! yay! Beth wil reach out to you soon.");
    }

    $submitForm.on  ('click', subAlert)  

    

////////THIS IS FOR THE project page
///this isnt loading prject one when the page loads

let currentProjectTextBox = 0

const numOfProjectTextBox = $('.carouseltextproject').children().length - 1


// FWD BUTTON 
$('.next').on('click', () => {
    $('.carouseltextproject').children().eq(currentProjectTextBox).css('display', 'none')

    if (currentProjectTextBox < numOfProjectTextBox) {
        currentProjectTextBox++
    } else {
        currentProjectTextBox = 0
    }

    $('.carouseltextproject').children().eq(currentProjectTextBox).css('display', 'block')
})


// BACK BUTTON 
$('.previous').on('click', () => {
    $('.carouseltextproject').children().eq(currentProjectTextBox).css('display', 'none')

    if (currentProjectTextBox > 0) {
        currentProjectTextBox--
    } else {
        currentProjectTextBox = numOfProjectTextBox
    }

    $('.carouseltextproject').children().eq(currentProjectTextBox).css('display', 'block')


})
    
    


});

//////

