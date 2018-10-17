(function ($) {
    //start
    $(".cta").on("click", function() {
        $(".container").css("height", "80%")
        $(".title").css("font-size", "2em")
        $(".wrapper").hide()
        $(".content").show()
        displayQuestion()
        showQuestion()
    })

    //show question
    function showQuestion() {
        $(".content-question").show()
    }

    //hide question
    function hideQuestion() {
        $(".content-question").hide()
    }

    //show answer
    function showAnswer() {
        $(".content-answer").show()
    }

    //hide answer
    function hideanswer() {
        $(".content-answer").hide()
    }

    //show time
    function showTime(time) {
        $(".second").text(time)
    }

    //set countdown
    let timeLeft = 15
    let timeInterval = setInterval(countdown, 1000)

    function countdown() {
        showTime(timeLeft)
        if (timeLeft === 0) {
            clearTimeout(timeInterval)
        } else {
            timeLeft--
        }
    }

    //questions
    let questions = [
        {
            q: "What company developed the scripting language JavaScript?",
            a: "Microsoft",
            b: "Apple",
            c: "Netscape",
            right: "c",
            imgUrl: "assets/images/netscape.png"
        },

        {
            q: "What is the function for creating a prompt box?",
            a: "alert()",
            b: "prompt()",
            c: "confirm()",
            right: "b",
            imgUrl: "assets/images/prompt.png"
        },

        {
            q: "What function can I use to change the background color?",
            a: "document.body.style.backgroundColor",
            b: "document.backgroundColor",
            c: "document.color.background",
            right: "a",
            imgUrl: "assets/images/backgroundcolor.png"
        },

        {
            q: "How can I redirect the user to a certain page?",
            a: "document.location",
            b: "window.location",
            c: "go.url",
            right: "b",
            imgUrl: "assets/images/windowlocation.png"
        },

        {
            q: "Which of the following events is not a valid event?",
            a: "onMouseover",
            b: "onLinkClick",
            c: "onUnload",
            right: "b",
            imgUrl: "assets/images/onevents.png"
        }
    ]
    let index = 0
    let right = 0
    let wrong = 0
    let questionObj = questions[index]

    //show questions on the page
    function question(obj) {
        $(".question").text(obj.q)
        $(".a").text(obj.a)
        $(".b").text(obj.b)
        $(".c").text(obj.c)
    }

    //right answer
    function rightAnswer() {
        right++
    }

    //wrong answer
    function wrongAnswer() {
        wrong++
    }

    function displayQuestion() {
        question(questionObj)
    }

    //check done
    function checkDone() {
        let total = right + wrong
        if (total === question.length) {
            return true
        } else return false
    }

    // check answer
    $(".option").on("click", function() {
        let isRight = $(this).hasClass(questionObj.right)
        if (isRight) {
            showAnswer()
        } else {

        }
    })


})(jQuery);