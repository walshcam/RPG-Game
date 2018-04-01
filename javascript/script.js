// <!-- Global Variables -->
var challengerHealthPoints = 0;
var heroHealthPoints = 0;
var heroAttackPoints = 0;
var reset = false;


//     <!-- The health points, attack power and counter attack power of each character must differ. Each character has these three attributes -->


//      <!-- *********CREATE AN OBJECT FOR EACH CHARACTER********* -->
    var sheep = {
        healthPoints : 35,
        attackPoints : 25,
        originalAttackPoints : 10,
        countAttackPower : 2
    };

    var superEvilDragon = {
        healthPoints : 199,
        attackPoints : 5,
        originalAttackPoints : 10,
        countAttackPower : 20
    };

    var neighborsDog = {
        healthPoints : 100,
        attackPoints : 17,
        originalAttackPoints : 2,
        countAttackPower : 5
    };

    var knight = {
        healthPoints : 120,
        attackPoints : 15,
        originalAttackPoints : 15,
        countAttackPower : 15
    };

console.log("Is this reading?");


//     <!-- When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as this character for the rest of the game.-->

$(document).ready(function() {
console.log("At least its reading...");

// Initial health points

$("#textbox1").html(sheep.healthPoints);
$("#textbox2").html(neighborsDog.healthPoints);
$("#textbox4").html(superEvilDragon.healthPoints);
$("#textbox3").html(knight.healthPoints);

//     <!-- *************CHOOSING A HERO************* -->

//Function used when a hero is chosen.

function chooseHero(){
    console.log("The hero is chosen...");
    $('.heroImage').css('border', '10px solid green');
    $('.heroTextbox').css('background-color', 'black');
    $('.remainingCharacter').css('border','10px solid red');
    $('#comment').html('Choose your opponent!');
    // $('#buttonAttack').on('click', function(){
    //     $('#comment').html("The wind is a worthy opponent, but now it is time to fight something a little more solid. Choose your challenger!");
    // });

    // Hero Health Points Input
    if($('#hero').attr('src').indexOf('sheep') != -1) {
        heroHealthPoints = sheep.healthPoints;
    }
    else if($('#hero').attr('src').indexOf('dog') != -1) {
        heroHealthPoints = neighborsDog.healthPoints;
    }
    else if($('#hero').attr('src').indexOf('knight') != -1) {
        heroHealthPoints = knight.healthPoints;
    }
    else if($('#hero').attr('src').indexOf('Dragon') != -1) {
        heroHealthPoints = superEvilDragon.healthPoints;
    }
    $('#textboxHero').html(heroHealthPoints);    
}

//Function used when a challenger is chosen.

function chooseChallenger(){
    console.log("The challenger is chosen...");
    $('.challengerImage').css('border', '10px solid black');
    $('.challengerTextbox').css('background-color', 'black');
    $('.remainingCharacter').css('border','10px solid white')
    $('#comment').html('Now it is time to fight... TO THE DEATH! (No really, fight to the death.)')

    // Hero Health Points Input
    if($('#challenger').attr('src').indexOf('sheep') != -1) {
        challengerHealthPoints = sheep.healthPoints;
    }
    else if($('#challenger').attr('src').indexOf('dog') != -1) {
        challengerHealthPoints = neighborsDog.healthPoints;
    }
    else if($('#challenger').attr('src').indexOf('knight') != -1) {
        challengerHealthPoints = knight.healthPoints;
    }
    else if($('#challenger').attr('src').indexOf('Dragon') != -1) {
        challengerHealthPoints = superEvilDragon.healthPoints;
    }

    $('#textboxChallenger').html(challengerHealthPoints);
}

//Function that randomizes the attack comments
function attackComments(){
    var attackCommentArray = ["You got this! Attack again!","You get a flesh wound! And you get a flesh wound!","Direct hit!","Kill him all the way to death! Attack again!","That was his favorite foot!"];
    var attackComment = Math.floor(Math.random() * attackCommentArray.length);
    console.log("This is the comment on line 122: " + $('#comment').html())
    $('#comment').html(attackCommentArray[attackComment]);
    console.log("This is the comment on line 124: " + $('#comment').html())
}

//Function that 
    //increases the attack power per attack
    //Has challenger attack hero

function turnAttack() {
    //*******SHEEP ATTACK */
    if($('#hero').attr('src').indexOf('sheep') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + sheep.attackPoints;
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('knight') != -1) {
            heroHealthPoints = heroHealthPoints - knight.countAttackPower;
        }
        $('#textboxHero').html(heroHealthPoints);
        console.log("Sheep turnAttack comment line 148: " + $('#comment').html());
    }
    //*******DOG ATTACK */
    if($('#hero').attr('src').indexOf('dog') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + neighborsDog.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('knight') != -1) {
            heroHealthPoints = heroHealthPoints - knight.countAttackPower;
        }
        $('#textboxHero').html(heroHealthPoints);
    }
    //*******KNIGHT ATTACK */
    if($('#hero').attr('src').indexOf('knight') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + knight.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - sheep.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
        }
        $('#textboxHero').html(heroHealthPoints);
    }
    //*******SUPER EVIL DRAGON ATTACK */
    if($('#hero').attr('src').indexOf('Dragon') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + knight.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - sheep.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('knight') != -1) {
            heroHealthPoints = heroHealthPoints - knight.countAttackPower;
        }
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
        }
        $('#textboxHero').html(heroHealthPoints);
    }
}

//Function when player wins match

function win() {
    $("#challenger").attr('src','images/placeholder.jpg');
    $('.challengerImage').css('border', '10px solid white'); 
    $('#comment').html("Choose your next challenger");
}

//Function when player wins game

function ultimateWin() {
    $('#buttonAttack').html('RESET');
    $('#comment').html("You are the champion! There's no time for losers because you are the champion.... of the world!!!");
    reset = true;
};

//Function when player loses

function loss() {
    
    $('#buttonAttack').html('RESET');
    $('#comment').html("Hero has fainted! Please try again... this is a pay-by-click website.");
    reset = true;
}


//********************************GAME ALGORITHM************************************* */


    //***************************CHOOSE SHEEP************************************************ */



    $("#character1Picture").on('click', function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            $(this).parent().hide();
            $("#hero").attr('src','images/sheep.jpg');
            chooseHero();
            heroHealthPoints = sheep.healthPoints;
            heroAttackPoints = sheep.attackPoints;
            console.log('Clicked on Hero Image');
        }

        else if ($('#challenger').attr('src').indexOf('placeholder') != -1) {
            console.log("Second Level Function");
            $(this).parent().hide();
            $("#challenger").attr('src','images/sheep.jpg');
            chooseChallenger();
            challengerHealthPoints = sheep.healthPoints;
        }
    });


            //*****************CHOOSE DOG **********************/


    $("#character2Picture").on('click', function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            console.log('Clicked on Hero Image');
            $(this).parent().hide();
            $("#hero").attr('src','images/dog.jpeg');
            chooseHero();
            heroHealthPoints = neighborsDog.healthPoints;
            heroAttackPoints = neighborsDog.attackPoints;
        }
        
        else if ($('#challenger').attr('src').indexOf('placeholder') != -1) {
            console.log("Second Level Function");
            $(this).parent().hide();
            $("#challenger").attr('src','images/dog.jpeg');
            chooseChallenger();
        }
    });

            //******************CHOOSE KNIGHT */

    $("#character3Picture").on('click', function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            $(this).parent().hide();
            $("#hero").attr('src','images/knight.JPG');
            chooseHero();
            heroHealthPoints = knight.healthPoints;
            heroAttackPoints = knight.attackPoints;
            console.log('Clicked on Hero Image');
        }
                
        else if ($('#challenger').attr('src').indexOf('placeholder') != -1) {
            console.log("Second Level Function");
            $(this).parent().hide();
            $("#challenger").attr('src','images/knight.JPG');
            chooseChallenger();
        }
    });

            //*********************CHOOSE DRAGON */

    $("#character4Picture").on('click', function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            $(this).parent().hide();
            $("#hero").attr('src','images/superEvilDragon.jpg');
            chooseHero();
            heroHealthPoints = superEvilDragon.healthPoints;
            heroAttackPoints = superEvilDragon.attackPoints;
            console.log('Clicked on Hero Image');
        }
                        
        else if ($('#challenger').attr('src').indexOf('placeholder') != -1) {
            console.log("Second Level Function");
            $(this).parent().hide();
            $("#challenger").attr('src','images/superEvilDragon.jpg');
            chooseChallenger();
        }
    });
            //******ATTACK */

    $('#buttonAttack').on('click', function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            $('#comment').html("There's nobody to fight with yet silly goose. Choose your hero first.")
        }
        else if ($('#challenger').attr('src').indexOf('placeholder') != -1) {
            $('#comment').html("The wind is a worthy advesary, but it is now the time to pick an opponent.")
        }
        else if (reset) {
            console.log('lossAfterReset Activated');
            //****Attack Button */
            $('#buttonAttack').html('ATTACK');
            //*****Comment */
            $('#comment').html('The fate of this website... and your pride, depends on you! Choose your hero!');
            //****CSS RESET */
            $('.challengerImage').css('border', '10px solid white');
            $('.challengerTextbox').css('background-color', 'white');
            $('.heroImage').css('border', '10px solid white');
            $('.heroTextbox').css('background-color', 'white');
            $('.remainingCharacter').css('border','10px solid green');
            $("#hero").attr('src','images/placeholder.jpg');
            $("#challenger").attr('src','images/placeholder.jpg');
            //****Zero Values */
            challengerHealthPoints = 0;
            heroHealthPoints = 0;
            heroAttackPoints = 0;
            reset = false;
            //*****UNHIDE CHARACTERS */
            $('#character1, #character2, #character3, #character4').show();
        }
        else if (($('#hero').attr('src').indexOf('placeholder') === -1) && ($('#challenger').attr('src').indexOf('placeholder') === -1)) {
            console.log("TurnAttack Activated");
            turnAttack();
            console.log("After turnAttack")
            if (heroHealthPoints <= 0) {
                console.log('loss')
                loss();
            }
            else if(($('#row5').children(':visible').length === 0)&&(challengerHealthPoints <=0)) {
                console.log('ultimateWin')
                ultimateWin();
            }
            else if (challengerHealthPoints <= 0){
                console.log('win')
                win();
            }
        }
        else {
            console.log('Attack button is false')
        }
        console.log("Attack comment line 366: " + $('#comment').html());
    });
    console.log("End of Code comment line 368: " + $('#comment').html());



    //***************************DOG************************************************ */



    // $("#character2Picture").click(function(){
    //     if ($('#hero').attr('src').indexOf('placeholder') != -1) {
    //         console.log($('#hero').attr('scr'));
    //         chooseHero();
    //         $(this).parent().hide();
    //         $("#hero").attr('src','images/dog.jpeg');
    //     };
    // });



    // //***************************KNIGHT************************************************ */



    // $("#character3Picture").click(function(){
    //     if ($('#hero').attr('src').indexOf('placeholder') != -1) {
    //         console.log($('#hero').attr('scr'));
    //         chooseHero();
    //         $(this).parent().hide();
    //         $("#hero").attr('src','images/knight.JPG');
    //     };
    // });



    // //***************************DRAGON************************************************ */



    // $("#character4Picture").click(function(){
    //     if ($('#hero').attr('src').indexOf('placeholder') != -1) {
    //         console.log($('#hero').attr('scr'));
    //         chooseHero();
    //         $(this).parent().hide();
    //         $("#hero").attr('src','images/superEvilDragon.jpg');
    //     };
    // });   


//     <!-- 1) Have the pictures formatted in a way that allows you to know you're picking your character -->

//     <!-- CSS: Cursor -->

//     <!-- 2)Onclick the following things will happen -->
//     <!--        -  Picture will move
//                 -  OPTIONAL: Player will appear
//                 -  Ask for first opponent -->






//     <!-- ******************SELECTING OPPONENT*************** -->
    
    
//     <!-- 1)Enemy selection changes the pictures in some way -->
    
//     <!-- 2)Able to click on the remaining enemies -->

//     <!-- 3)Onclick The enemy becomes the defender -->
//         <!-- - Defender picture will move
//              - OPTIONAL: Player will appear -->




//     <!-- *********BATTLE SEQUENCE************ -->




//     <!-- 1) Attack button will appear and be clickable -->



//     <!-- 2) Player's attack power will increase by it's base attack power after every attack -->



//     <!-- 3) The defender's HP will decrease -->



//     <!-- 4) The defender will instantly counter attack. The attack power never changes. -->



//     <!-- 5) The hero wil lose HP -->



//     <!-- 6) Player will continue to click attack until they defeat the defender. -->



//     <!-- 7) Loop back to selecting opponent.-->
//             <!-- - Defeated opponents cannot be selected again
//             - Message appears that tells you that that opponent has lost
//             - If attack is selected, it will inform you that no enemy is there. -->




//     <!-- ************END OF GAME************ -->


//     <!-- 1) There will be a restart button no matter what the outcome. -->



//     <!-- 2) Player wins when all opponents defeated. -->



//     <!-- 3) Player loses when hero HP < 0 -->
});