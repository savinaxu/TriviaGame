(function ($) {


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
    ];
    let index = 0;
    let right = 0;
    let wrong = 0;
    let unanswer = 0;
    let questionObj;
    let timeLeft = 15;
    let timeInterval;

    //start
    $(".startGame").on("click", function() {
        countdown()
        timeInterval = setInterval(countdown, 1000)
        $(".container").css("height", "80%")
        $(".title").css("font-size", "2em")
        $(".startGame").hide()
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

    //hide result
    function hideResult() {
        $(".content-result").hide()
    }

    //show time
    function showTime(time) {
        $(".second").text(time)
    }

    //show questions on the page
    function question(obj) {
        $(".question").text(obj.q)
        $(".a").text(obj.a)
        $(".b").text(obj.b)
        $(".c").text(obj.c)
    }
    function displayQuestion() {
        questionObj = questions[index]
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
        if (total === questions.length) return true
        else return false
    }
    function isDone() {
        if (checkDone()) {
            setTimeout(function() {
                hideanswer()
                showResult()
            }, 1500)
        } else {
            timeLeft = 15
            index++
            setTimeout(function() {
                hideanswer()
                displayQuestion()
                showQuestion()
                countdown()
                timeInterval = setInterval(countdown, 1000)
            }, 1500)
        }
    }

    //show result
    function showResult() {
        let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/win.mp3');
        audio.play()
        $(".right").text(right)
        $(".wrong").text(wrong)
        $(".unanswer").text(unanswer)
        $(".content-result").show()
    }

    //set countdown
    function countdown() {
        showTime(timeLeft)
        if (timeLeft === 0) {
            clearInterval(timeInterval)
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
            audio.play()
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
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/goodbell.mp3');
            audio.play()
            hideQuestion()
            rightAnswer()
            showAnswer()
            isDone()
        } else {
            clearInterval(timeInterval)
            let audio = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/74196/bad.mp3');
            audio.play()
            hideQuestion()
            wrongAnswer()
            showAnswer()
            isDone()
        }
    })

    //star over
    $(".startOver").on("click", function() {
        hideResult()
        timeLeft = 15
        index = 0
        right = 0
        wrong = 0
        unanswer = 0
        questionObj = questions[index]
        displayQuestion()
        showQuestion()
        countdown()
        timeInterval = setInterval(countdown, 1000)
    }) 


})(jQuery);