
$(document).ready(function(){
///need a function that figures out the answer
/// a function that figures out the correct question
//a function that figures out fake questions


// get modal element
const modal = $('#modal1')

//get question span selection
const questSpan = $('.questionChoice')

//function for open modal
const openModal = () => {
    modal.css('display', 'block')
}

//function to close modal
const closeModal = () => {
    modal.css('display', 'none')
}


// object for first category Answer and question
const CatOne = {
    pointOne: ['He is the lead singer','Who is Claudio Sanchez?'],
    pointTwo: ['He is the lead guitarist', 'Who is Travis Stever'],
    pointThree: ['He is the drummer', 'Who is Josh Eppard'],
    pointFour: ["He is the newest memeber of the band and he's also pretty good at base", 'Who is Zack Cooper'],
    pointFive: ['An original member, he was replaced after robbing a CVS', 'Who is Michael Todd']
}
const fakeAnswers = {
    pointOne: ['Who is Travis Stever', 'Who is Bob Hoskins', 'Who is Phill Murray'],
    pointTwo: ['Who is Mike Todd', 'Who is Gabriel Hawkins', 'Who is Nick Coppala'],
    pointThree: ['Who is Ben Weinman', 'Who is Greg Puciato', 'Who is Liam Wilson'],
    pointFour: ['Who is John Dolmayan ', 'Who is Daron Malakian', 'Who is Andy Khachaturian'],
    pointFive: ['Who is Juan Alderete', 'Who is Cedric Bixler-Zavala', 'Who is Deantoni Parks'],

}

//array of cat one answers
const catOneAnswer = ['He is the lead singer',
'He is the lead guitarist', 
'He is the drummer', 
"He is the newest memeber of the band and he's also pretty good at base",
'An original member, he was replaced after robbing a CVS']
const catTwoAnswer = []
const catThreeAnswer = []
const catFourAnswer = []
const catFiveAnswer = []
//aray of cat one correct questions
const catOneQuestion = ['Who is Claudio Sanchez?','Who is Travis Stever','Who is Zack Cooper','Who is Michael Todd']
const catTwoQuestion = []
const catThreeQuestion = []
const catFourQuestion = []
const catFiveQuestion = []
///arrays for the answer and the correct question
const answers = [catOneAnswer, catTwoAnswer, catThreeAnswer, catFourAnswer, catFiveAnswer]
const correctQuestions = [catOneQuestion, catTwoQuestion, catThreeQuestion, catFourQuestion, catFiveQuestion]


const game = {
    answer: (category, pointValue) =>{

        let selectAnswerCat = answers[category]
        let selcetCatPoint = selectAnswerCat[pointValue];
        console.log(category)
        console.log(pointValue)
        $(".answerCard").html(selcetCatPoint)
    }
}    
        










    $('#cat1').html('Band Members')
    $('#cat2').html('Concept Characters')
    $('#cat3').html('All About the Albums')
    $('#cat4').html('Storyline')
    $('#cat5').html('potpourri')
    
   

$('.answers').on('click', function() {
        let cat = ($(this).data('cat') - 1)
        console.log(cat)
        let point = ($(this).data('point') - 1)
        console.log(point)
        game.answer(cat, point)
        openModal()
    })
    
    questSpan.on('click', closeModal)

})
   