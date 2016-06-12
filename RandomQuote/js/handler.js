var quotes = [
    {
        Quote: "Don't cry because it's over, smile because it happened.",
        Person: "Dr. Seuss",
        Link: "https://d.gr-assets.com/authors/1193930952p5/61105.jpg"
    },
    {
        Quote: "Be yourself; everyone else is already taken.",
        Person: "Oscar Wilde",
        Link: "https://d.gr-assets.com/authors/1357460488p5/3565.jpg"
    },
    {
        Quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        Person: "Albert Einstein",
        Link: "https://d.gr-assets.com/authors/1429114964p5/9810.jpg"
    },
    {
        Quote: "Be who you are and say what you feel, because those who mind don't matter, and those who " +
        "matter don't mind.",
        Person: "Bernard M. Baruch",
        Link: "https://d.gr-assets.com/authors/1331977133p5/5768330.jpg"
    },
    {
        Quote: "You've gotta dance like there's nobody watching, Love like you'll never be hurt, Sing like there's " +
        "nobody listening, And live like it's heaven on earth.",
        Person: "William W. Purkey",
        Link: "https://d.gr-assets.com/authors/1282396130p5/1744830.jpg"
    },
    {
        Quote: "A room without books is like a body without a soul.",
        Person: "Marcus Tullius Cicero",
        Link: "https://d.gr-assets.com/authors/1197881416p5/13755.jpg"
    },
    {
        Quote: "You only live once, but if you do it right, once is enough.",
        Person: "Mae West",
        Link: "https://d.gr-assets.com/authors/1198551937p5/259666.jpg"
    },
    {
        Quote: "Be the change that you wish to see in the world.",
        Person: "Mahatma Gandhi",
        Link: "https://d.gr-assets.com/authors/1356810912p5/5810891.jpg"
    },
    {
        Quote: "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        Person: "J.K. Rowling",
        Link: "https://d.gr-assets.com/authors/1415945171p5/1077326.jpg"
    },
    {
        Quote: "If you tell the truth, you don't have to remember anything.",
        Person: "Mark Twain",
        Link: "https://d.gr-assets.com/authors/1322103868p5/1244.jpg"
    }
];

$(document).ready(function () {
    var num = Math.floor((Math.random() * 9) + 1);
    document.getElementById("quote").innerHTML = quotes[num].Quote + "\<cite id=\"cite\"\>\</cite\>"
    document.getElementById("cite").innerHTML = quotes[num].Person;
    document.getElementById("profile").src = quotes[num].Link;

    $("#newquote").click(function () {
        num += 1;

        if (num == 10) num = 0;

        document.getElementById("quote").innerHTML = quotes[num].Quote + "\<cite id=\"cite\"\>\</cite\>"
        document.getElementById("cite").innerHTML = quotes[num].Person;
        document.getElementById("profile").src = quotes[num].Link;
    });

    $('#twitter').click(function () {
        var text = "\"" + quotes[num].Quote + "\" - " + quotes[num].Person;
        var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(text);
        window.open(twtLink, '_blank');
    });
});
