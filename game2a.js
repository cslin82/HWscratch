// (Global) Variables

var currentScore;
var targetScore;
var crystalValues = [];
var gameActive = false;
var wins = 0;
var losses = 0;

const crystalImages = ["Amber.png", "Amethyst.png", "Aquamarine.png",
    "Citrine.png", "Diamond-icon.png", "Emerald.png", "Gemstone.png",
    "Opal.png", "Peridot.png", "Quartz-crystal.png", "Ruby-icon.png",
    "Sapphire-icon.png", "Topaz-icon.png", "Zircon.png"]


// inclusive
function randomInt(min, max) {
    return Math.floor(min + Math.random() * (1 + max - min));
}

crystalValues.length = 4;
// crystalValues.fill(0);
// Durstenfeld shuffle https://stackoverflow.com/a/12646864/9314937 
function shuffleD(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function resetGame() {
    shuffleD(crystalImages);
    var newImg;
    var newItem;
    $('ul').empty();
    for (let i = 0; i < crystalValues.length; i++) {
        crystalValues[i] = randomInt(1, 12);
        newImg = $("<img>");
        newImg.attr("src", crystalImages[i]);
        newImg.attr("alt", "Crystal " + (i+1));
        newImg.addClass("crystal-image");
        newImg.addClass("crystal");
        newImg.attr("data-array-index", i);
        newImg.attr("id", "crystal-" + (i+1));
        newItem = $("<li>");
        newItem.append(newImg);
        $('ul').append(newItem);
        
    }
    $('.crystal').click(function() {
        console.log(crystalValues[this.dataset.arrayIndex]);

    });


}
    
// jQuery main
$(document).ready(function() {

    console.log( "ready!" );

    $('#new-gems').click(function() {
        resetGame();
    });

    $('.crystal').click(function() {
        console.log(this.dataset.arrayIndex);

    });

});
