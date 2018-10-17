(function ($) {
    //start
    $(".startGame").on("click", function() {
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
        $("img").remove()
        $(".content-answer").hide()
    }

    //show result
    function showResult() {
        $(".result").show()
    }

    //hide result
    function hideResult() {
        $(".result").hide()
    }

    //show time
    function showTime(time) {
        $(".second").text(time)
    }

    //questions
    let questions = [
        {
            q: "What company developed the scripting language JavaScript?",
            a: "Microsoft",
            b: "Apple",
            c: "Netscape",
            right: "c",
            rightA: "Netscape",
            imgUrl: "assets/images/netscape.png"
        },

        {
            q: "What is the function for creating a prompt box?",
            a: "alert()",
            b: "prompt()",
            c: "confirm()",
            right: "b",
            rightA: "prompt()",
            imgUrl: "assets/images/prompt.png"
        },

        {
            q: "What function can I use to change the background color?",
            a: "document.body.style.backgroundColor",
            b: "document.backgroundColor",
            c: "document.color.background",
            right: "a",
            rightA: "document.body.style.backgroundColor",
            imgUrl: "assets/images/backgroundcolor.png"
        },

        {
            q: "How can I redirect the user to a certain page?",
            a: "document.location",
            b: "window.location",
            c: "go.url",
            right: "b",
            rightA: "window.location",
            imgUrl: "assets/images/windowlocation.png"
        },

        {
            q: "Which of the following events is not a valid event?",
            a: "onMouseover",
            b: "onLinkClick",
            c: "onUnload",
            right: "b",
            rightA: "onLinkClick",
            imgUrl: "assets/images/onevents.png"
        }
    ]
    let index = 0
    let right = 0
    let wrong = 0
    let unanswer = 0
    let questionObj = questions[index]
    let timeLeft = 15
    let timeInterval = setInterval(countdown, 1000)

    //show questions on the page
    function question(obj) {
        $(".question").text(obj.q)
        $(".a").text(obj.a)
        $(".b").text(obj.b)
        $(".c").text(obj.c)
    }
    function displayQuestion() {
        question(questionObj)
    }

    //show picture
    function showPic() {
        let img= $("<img>")
        img.attr('src', questionObj.imgUrl)
        $(".content-answer").append(img)
    }

    //right answer
    function rightAnswer() {
        right++
        $(".boolean").text("You got it right! Nice job!")
        showPic()
    }

    //wrong answer
    function wrongAnswer() {
        wrong++
        $(".boolean").text("Wrong Answer! You can do better!")
        getRigntAnswer()
    }

    //time out
    function timeOut() {
        unanswer++
        $(".boolean").text("Out of Time!")
       getRigntAnswer()
    }

    //get right answer
    function getRigntAnswer() {
        $(".rightAnswer").text("The answer is: " + questionObj.rightA + "!" )
        showPic()
    }

    //check done
    function checkDone() {
        let total = right + wrong + unanswer
        if (total === question.length) return true
        else return false
    }
    function isDone() {
        if (checkDone()) {
            setTimeOut(function() {
                hideanswer()
                showResult()
            }, 2000)
        } else {
            timeLeft = 15
            index++
            setTimeOut(function() {
                displayQuestion()
                showQuestion()
                setInterval(countdown, 1000)
            }, 2000)
        }
    }

    //show result
    function showResult() {
        $(".right").text(right)
        $(".wrong").text(wrong)
        $(".unanswer").text(unanswer)
        $(".result").show()
    }

    //set countdown
    function countdown() {
        showTime(timeLeft)
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            hideQuestion()
            timeOut()
            showAnswer()
            isDone()    
        } else {
            timeLeft--
        }
    }

    // check answer
    $(".option").on("click", function() {
        let isRight = $(this).hasClass(questionObj.right)
        if (isRight) {
            clearInterval(timeInterval)
            hideQuestion()
            rightAnswer()
            showAnswer()
            isDone()
        } else {
            clearInterval(timeInterval)
            hideQuestion()
            wrongAnswer()
            showAnswer()
            isDone()
        }
    })

    //star over
    $(".startOver").on("click", function() {
        index = 0
        right = 0
        wrong = 0
        unanswer = 0
        questionObj = questions[index]
        displayQuestion()
        showQuestion()
    }) 


})(jQuery);