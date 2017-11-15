/*need to make hangman game
Need to have title
press any key to get started
Games needs to pick a random word
Game will display _ instead of letters
users will have to guess by typing the word
game will show remaining tries or picture
game will show letters already guessed
correctly guessed letters must display on invisible word
*/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////
//var secretWords = "_";
//var allowedGuesses;
//var correctGuesses;
//var wrongGuesses;
//var letters = [1,2,3,4,5,6,7,8,9,10,11];
//const words = ["Croquet", "Haphazard", "Numbskull", "Rhythmic", "Wildebeest", "Zigzag", "Rhythmic", "Ostracize", "Dwarves"];
    var word = ["fat", "lazy", "poem", "bug", "boy", "girl"];
    var randNum = Math.floor(Math.random() * word.length);
    var choosenWord = word[randNum];
    var rightWord = [];
    var wrongWord = [];
    var underScore = [];
    var guessesLeft = 6;
    var rightGuessCounter = 0;
//DOM manipulation
    var docUnderScore = document.getElementsByClassName('play');
    var docRightGuess = document.getElementsByClassName('rightLetters');
    var docWrongGuess = document.getElementsByClassName('wrongLetters');
    var docGuessLeft = document.getElementsByClassName('numbersLeft');
//testing 
    console.log(choosenWord);
//Create the underscores
    var generateUnderscore = () => { 
    for (let i = 0; i < choosenWord.length; i++){
        underScore.push('_');
    }
    return underScore;
    }
//Testing Underscores
    console.log(generateUnderscore());
//get users guess
    document.addEventListener('keypress', (event) => {
    let keyword = String.fromCharCode(event.keyCode);
//  if users guess is right
        
    
//////////////////////////////////////////////////////////////  
//    function ifCorrect (){
//    
//        document.getElementById('picture').src = '../assets/images/hang' + guessLeft+ '.jpg';
//}
        
   
        
//////////////////////////////////////////////////////////////  
        
    if (choosenWord.indexOf(keyword) > -1) {
// add to rightWord array
    rightWord.push(keyword);

//replace underscore with right letter
    underScore[choosenWord.indexOf(keyword)] = keyword;
    docUnderScore[0].innerHTML = underScore.join(' ');
    docRightGuess[0].innerHTML = rightWord;
        console.log(rightWord);
// Here the picure should stay the same////////
///////////////////////////////////////////
    }else {
    wrongWord.push(keyword);
    docWrongGuess[0].innerHTML = wrongWord;
    var guessLeft = guessesLeft--;
    console.log(wrongWord);
    console.log(guessesLeft);
// here the diagram should increase
    ifWrong();
    }
    if(underScore.join('') === choosenWord) {
            
            alert('You Win');
       document.getElementById('picture').src = 'win.JPG'
//        document.querySelector('.play_again').style.display = 'block';
        document.querySelector('.rightGuess').style.display = 'none';
        document.querySelector('.wrongGuess').style.display = 'none';
        document.querySelector('.guessLeft').style.display = 'none';
        document.querySelector('.numbersLeft').style.display = 'none';
        document.querySelector('.wrongLetters').style.display = 'none';
        document.querySelector('.rightLetters').style.display = 'none';
        document.querySelector('.play').style.display = 'none';
        } else if ((guessLeft -1) === 1){
            
           alert('You Lose the word was: '+choosenWord ); 
//        document.querySelector('.play_again').style.display = 'block';
        document.querySelector('.rightGuess').style.display = 'none';
        document.querySelector('.wrongGuess').style.display = 'none';
        document.querySelector('.guessLeft').style.display = 'none';
        document.querySelector('.play').style.display = 'none';
        document.querySelector('.numbersLeft').style.display = 'none';
        document.querySelector('.wrongLetters').style.display = 'none';
        document.querySelector('.rightLetters').style.display = 'none';
        
        
        }   
        
//    function GuessesLefts (){
    docGuessLeft[0].innerHTML = guessLeft -2;
// Update Pictures when wrong or correct///////////
        
         function ifWrong (){
    
        document.getElementById('picture').src = 'hang' + guessLeft+ '.JPG';
        
    }    
        

    });
//check if answer is right


/////////////////////////////////////////////////////////////////////////////////
document.querySelector('.hang').style.display = 'none';
document.querySelector('.rightGuess').style.display = 'none';
document.querySelector('.wrongGuess').style.display = 'none';
document.querySelector('.guessLeft').style.display = 'none';
document.querySelector('.play_again').style.display = 'none';


document.querySelector('.btn-new').addEventListener('click', function() {
    
    
    
    document.querySelector('.hang').style.display = 'block';
    document.querySelector('.play').textContent = underScore;
    document.querySelector('.btn-new').style.display = 'none';
    document.querySelector('.rightGuess').style.display = 'block';
    document.querySelector('.wrongGuess').style.display = 'block';
    document.querySelector('.guessLeft').style.display = 'block';
    docGuessLeft[0].innerHTML = guessesLeft -1;
    
    
//    
//////////////////////////////////////////////////////////////////////////////////////    

});







/*
Bonus: 

Play something nice when guessed correctly
*/
