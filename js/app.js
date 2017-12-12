// get modal element
const modal = $('#modal1')


//function for open modal
const openModal = () => {
    modal.css('display', 'block')
}

//function to close modal
const closeModal = () => {
    modal.css('display', 'none')
}
//get question span selection
const questSpan = $('.questionChoice')
// an object for the first column of point divs
const firstColumnSelect = {
    c1r1: $('#c1-1'),
    c1r2: $('#c1-2'),
    c1r3: $('#c1-3'),
    c1r4: $('#c1-4'),
    c1r5: $('#c1-5'),
    
}

pointSelect.c1r1.on('click', openModal)
questSpan.on('click', closeModal)
   