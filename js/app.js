// get modal element
const modal = $('#modal1')

// object for first category Answer and question
const CatOne = {
    pointOne: ['He is the lead singer','Who is Claudio Sanchez?'],
    pointTwo: ['He is the lead guitarist', 'Who is Travis Stever'],
    pointThree: ['He is the drummer', 'Who is Josh Eppard'],
    pointFour: ["He is the newest memeber of the band and he's also pretty good at base", 'Who is Zack Cooper'],
    pointFive: ['An original member, he was replace after robbing a CVS', 'Who is Michael Todd']
}
const fakeAnswers = {
    pointOne: ['Who is Travis Stever', 'Who is Bob Hoskins', 'Who is Phill Murray'],
    pointTwo: ['Who is Mike Todd', 'Who is Gabriel Hawkins', 'Who is Nick Coppala'],
    pointThree: ['Who is Ben Weinman', 'Who is Greg Puciato', 'Who is Liam Wilson'],
    pointFour: ['Who is John Dolmayan ', 'Who is Daron Malakian', 'Who is Andy Khachaturian'],
    pointFive: ['Who is Juan Alderete', 'Who is Cedric Bixler-Zavala', 'Who is Deantoni Parks'],

}
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
//object for second column
const secondColumnSelect = {
    c2r1: $('#c2-1'),
    c2r2: $('#c2-2'),
    c2r3: $('#c2-3'),
    c2r4: $('#c2-4'),
    c2r5: $('#c2-5'),
}
///object for third column
const thirdColumnSelect = {
    c3r1: $('#c3-1'),
    c3r2: $('#c3-2'),
    c3r3: $('#c3-3'),
    c3r4: $('#c3-4'),
    c3r5: $('#c3-5'),
}
//object for fourth column
const fourthColumnSelect = {
    c4r1: $('#c4-1'),
    c4r2: $('#c4-2'),
    c4r3: $('#c4-3'),
    c4r4: $('#c4-4'),
    c4r5: $('#c4-5'),
}
//object for fifth column
const fifthColumnSelect = {
    c5r1: $('#c5-1'),
    c5r2: $('#c5-2'),
    c5r3: $('#c5-3'),
    c5r4: $('#c5-4'),
    c5r5: $('#c5-5'),
}


window.onload = function(){
    firstColumnSelect.c1r1.on('click', openModal)
    questSpan.on('click', closeModal)

}
   