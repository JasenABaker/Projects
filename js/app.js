
$(document).ready(function () {
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



    //arrays of answers
    const catOneAnswer = ['He is the lead singer',
        'He is the lead guitarist',
        'He is the drummer',
        "He is the newest memeber of the band and he's also pretty good at bass",
        'An original member, he was replaced after robbing a CVS']
    const catTwoAnswer = []
    const catThreeAnswer = []
    const catFourAnswer = []
    const catFiveAnswer = []
    //aray of  correct questions
    const catOneQuestion = ['Who is Claudio Sanchez?', 'Who is Travis Stever', 'Who is Josh Eppard', 'Who is Zack Cooper', 'Who is Michael Todd']
    const catTwoQuestion = []
    const catThreeQuestion = []
    const catFourQuestion = []
    const catFiveQuestion = []
    ///fake answer array
    const catOneFake = ['Who is Bob Hoskins', 'Who is Phill Murray', 'Who is Gabriel Hawkins', 'Who is Nick Coppala', 'Who is Ben Weinman', 'Who is Greg Puciato', 'Who is Liam Wilson',
        'Who is John Dolmayan', 'Who is Daron Malakian', 'Who is Andy Khachaturian', 'Who is Juan Alderete', 'Who is Cedric Bixler-Zavala', 'Who is Deantoni Parks']
    const catTwoFake = []
    const catThreeFake = []
    const catFourFake = []
    const catFiveFake = []
    ///arrays for the answer and question
    const answers = [catOneAnswer, catTwoAnswer, catThreeAnswer, catFourAnswer, catFiveAnswer]
    const correctQuestions = [catOneQuestion, catTwoQuestion, catThreeQuestion, catFourQuestion, catFiveQuestion]
    const fakeAnswerArray = [catOneFake, catTwoFake, catThreeFake, catFourFake, catFiveFake]


    const game = {
        catHolder: 0,
        pointhHolder: 0,
        // get answer for category and point value
        answer: (category, pointValue) => {

            let selectAnswerCat = answers[category]
            let selectCatPoint = selectAnswerCat[pointValue];
            // console.log(category)
            // console.log(pointValue)
            
           $(".answerCard").html(selectCatPoint)
           game.catHolder = category
           game.pointHolder = pointValue
          // console.log(game.catHolder)
          //console.log(game.pointHolder)
        },
        //get the correct question
        correctQuestion: (category, pointValue) => {
            const selectQuestionCat = correctQuestions[category]
            const selectQuestion = selectQuestionCat[pointValue]  
            return selectQuestion
        },
        // shuffle function found on internet devised by fisher-yates and Don knuth
        shuffle: (ray) => {
            for (let i = ray.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [ray[i], ray[j]] = [ray[j], ray[i]];
            }
            return ray;

        },
        // getting the correct question  and pushing to an array with shuffled wrong questions
        questionRandomizer: (category, pointValue) => {
            const addRealQuestion = game.correctQuestion(category, pointValue)
            const selectFakeQestionCat = fakeAnswerArray[category]
            const fakeQestionCat = game.shuffle(selectFakeQestionCat)
            const newFakeArray = fakeQestionCat.slice(0, 3)

            newFakeArray.push(addRealQuestion)
            const shuffleQuestion = game.shuffle(newFakeArray)
            // console.log(shuffleQuestion)
            $("#qc1").html(shuffleQuestion[0])
            $("#qc2").html(shuffleQuestion[1])
            $("#qc3").html(shuffleQuestion[2])
            $("#qc4").html(shuffleQuestion[3])

        },

        compareQuestion: (cat, point, spanClicked) => {
           const questionSelected = $(`[data-span="${spanClicked}"]`).text()
           const correct = game.correctQuestion(cat, point)
            
           if (questionSelected === correct){
               console.log('You are correct!')
           } else {
               console.log('You are wrong!')
           }

           // console.log(questionSelected)
            console.log(correct)
        },
    }











    $('#cat1').html('Band Members')
    $('#cat2').html('Concept Characters')
    $('#cat3').html('All About the Albums')
    $('#cat4').html('Storyline')
    $('#cat5').html('Songs')



    $('.answers').on('click', function () {
        openModal()
        let cat = ($(this).data('cat') - 1)
        //  console.log(cat)
        let point = ($(this).data('point') - 1)
        // console.log(point)
        game.answer(cat, point)
        game.correctQuestion(cat, point)
        game.questionRandomizer(cat, point)

    })

    questSpan.on('click', function () {
        let span = $(this).data('span')
       // console.log(span)
        game.compareQuestion(game.catHolder, game.pointHolder, span)
        closeModal()
    })
})
