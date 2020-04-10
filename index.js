var name=prompt("enter your name");
alert("hello "+name);
alert("welcome "+name+" to my fun website, i hope you might get some fun");

for (var i = 0; i < 4; i++) {
    document.querySelectorAll(".image")[i].addEventListener("mouseover", function () {
        var imagename = this.classList[1];
        document.querySelector("." + imagename).classList.add("over");
    });

    document.querySelectorAll(".image")[i].addEventListener("mouseout", function () {
        var imagename = this.classList[1];
        document.querySelector("." + imagename).classList.remove("over");
    })
}


document.querySelector(".writer-btn").addEventListener("click", function () {
    document.querySelector(".writer-text").innerHTML="fuck you " + name + ", you sucks, i have read your stories and you have no chance of being in it.Give up looser.FUCK YOU";
    setInterval(function () {
        document.querySelector(".writer-text").innerHTML="may gob bless you " + name + " and may you have an enlightening future in the writing field, hope you get what you want in life. I am your number one fan and supporter," + name + " will be a house-hold name soon";
    }, 600);
});

document.querySelector(".guitar-btn").addEventListener("click", function () {
    document.querySelector(".guitar-text").innerHTML="fuck you " + name + ", you sucks, i have heard you play and you have no chance of learning it. know your fucking worth asshole.FUCK YOU";
    setInterval(function () {
        document.querySelector(".guitar-text").innerHTML="may gob bless you " + name + " and may you have an enlightening future in learing guitar, hope you get what you want in life. I am your number one fan and supporter," + name + " will be a house-hold name soon";
    }, 600);
});


document.querySelector(".gamer-btn").addEventListener("click", function () {
    document.querySelector(".gamer-text").innerHTML="fuck you " + name + ", you sucks, i have seen you play, you sucks and you have no chance of being good at it. give up looser.FUCK YOU";
    setInterval(function () {
        document.querySelector(".gamer-text").innerHTML="may gob bless you " + name + " and may you have all the high scores, hope you get good at it. I am your number one fan and supporter," + name + " will be a house-hold name soon";
    }, 600);
});


document.querySelector(".bonus").addEventListener("click", function () {
    document.querySelector(".bonus-text").innerHTML="fuck you " + name;
})
