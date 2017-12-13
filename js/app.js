///get document ready!
$(document).ready(function () {



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
    $('#cat1').html('Band Members')
    $('#cat2').html('Concept Characters')
    $('#cat3').html('All About the Albums')
    $('#cat4').html('Storyline')
    $('#cat5').html('Songs')


    //arrays of answers
    const catOneAnswer = 
    ['He is the lead singer',
        'He is the lead guitarist',
        'He is the drummer',
        "He is the newest memeber of the band and he's also pretty good at bass",
        'An original member, he was replaced after robbing a CVS']
    
        const catTwoAnswer = 
    ['Also known as the Beast, this character shares a name with the band', 
        'Also known as the Knowledge, this character matches the pair', 
        'The main protagonist of the story, this characters and the lead singer share a name', 
        'This character leads the K.B.I and also goes by the Inferno', 
        'This character was dismembered but later rebuilt']
    
        const catThreeAnswer = 
    ['This is the latest album',
    'The third album, this peaked at number 7 on Billboard’s top 200',
    'This album was a prequel to the first four albums conceptional, but came as the fifth',
    'This album came second in a double album',
    'Release in 2002, this was the debut studio album']
    
    const catFourAnswer = []
    
    const catFiveAnswer = []
    
    //aray of  correct questions
    const catOneQuestion = 
    ['Who is Claudio Sanchez?', 
        'Who is Travis Stever', 
        'Who is Josh Eppard', 
        'Who is Zack Cooper', 
        'Who is Michael Todd']
    
        const catTwoQuestion = 
    ['Who is Coheed Kilgannon',
        'Who is Cambria Kilgannon',
        'Who is Claudio Kilgannon',
        'Who is Jesse Kilgannon',
        'Who is Sizer']
    
        const catThreeQuestion = 
    ['What is Color Before the Sun',
    "What is Good Apollo, I'm Burning Star IV, Volume One",
    'What is The Year of the Black Rainbow',
    'What is The Afterman: Descension',
    'What is The Second Stage Turbine Blade']
    
    const catFourQuestion = []
    
    const catFiveQuestion = []
    ///fake answer array
    const catOneFake = 
    ['Who is Bob Hoskins', 'Who is Phill Murray', 'Who is Gabriel Hawkins', 
        'Who is Nick Coppala', 'Who is Ben Weinman', 'Who is Greg Puciato', 'Who is Liam Wilson',
        'Who is John Dolmayan', 'Who is Daron Malakian', 'Who is Andy Khachaturian', 
        'Who is Juan Alderete', 'Who is Cedric Bixler-Zavala', 'Who is Deantoni Parks']
    
    const catTwoFake = 
    ['Who is Mayo Deftinwolf','Who is Wilhelm Ryan','Who is Al the Killer',
    'Who is Mariah Antillarea','Who is Leonard Hohenberger','Who is Newo Ikkin',
    'Who is Josephine Kilgannon','Who is Patrick McCormick',
    'Who is Star Cecil','Who is Litan Boss','Who is Pearl Hohenberger','Who is Hanton Jo Seph','Who is Malvas Limbi']
    
    const catThreeFake = 
    ['What is In Keeping Secrets of Silent Earth: 3',
    "What is Good Apollo, I'm Burning Star IV, Volume Two",
    'What is The Afterman: Descension',
    'What is Neverender 12',
    'What is Plan to Take Over The World',
    'What is The Penelope',
    'What is Delirium Trigger',
    'What is Kezia',
    'What is Fortress',
    'What is Scurrilous',
    'What is Volition',
    'What is De-Loused in the Comatorium',
    'What is The Bedlam in Goliath']
    
    const catFourFake = []
    
    const catFiveFake = []
    ///arrays for the answer and question
    const answers = [catOneAnswer, catTwoAnswer, catThreeAnswer, catFourAnswer, catFiveAnswer]
    const correctQuestions = [catOneQuestion, catTwoQuestion, catThreeQuestion, catFourQuestion, catFiveQuestion]
    const fakeAnswerArray = [catOneFake, catTwoFake, catThreeFake, catFourFake, catFiveFake]

//game functionobjecy
    const game = {
        catHolder: 0,
        pointhHolder: 0,
        score: 0,
        count: 25,
        // get answer for category and point value
        answer: (category, pointValue) => {

        let selectAnswerCat = answers[category]
        let selectCatPoint = selectAnswerCat[pointValue];
        $(".answerCard").html(selectCatPoint)
        game.catHolder = category
        game.pointHolder = pointValue
    
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
/// compare if the answer selected is the same as the correct answer
        compareQuestion: (cat, point, spanClicked) => {
        const questionSelected = $(`[data-span="${spanClicked}"]`).text()
        const correct = game.correctQuestion(cat, point)
            
            
        if (questionSelected === correct){
            alert('You are correct!')
               game.score += (point + 1) * 100
        } else {
            alert(`Sorry, that is wrong answer. We were looking for '${correct}'. `)
               game.score -= (point + 1) * 100
        }
        $('#score1span').html(game.score)
        },
///Ending the game and eventual final jeopardy starter
        gameEnd: () => {
        if ((game.count <= 0) && (game.score >= 0)) {
            alert(`Great Job! You're score is ${game.score}! You win!`)
        } else if (game.count <= 0){
            alert(`Game over! Your score is ${game.score}. How pathetic. Hang your head in shame.`)
        }
    }
        
}




///click on point button
$('.answers').on('click', function () {
        openModal()
        const answerBox = $(this)
        let cat = ($(this).data('cat') - 1)
        
        let point = ($(this).data('point') - 1)
        
        game.answer(cat, point)
        game.correctQuestion(cat, point)
        game.questionRandomizer(cat, point)
        ///turn off div selection and change color
        $(this).css('background-color','#FF5E5B')
        $(this).off()
})

questSpan.on('click', function () {
        let span = $(this).data('span')

        game.compareQuestion(game.catHolder, game.pointHolder, span)
        closeModal()
        game.count--
        game.gameEnd()
    })
})
