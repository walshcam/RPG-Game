// <!-- Global Variables -->
var challengerHealthPoints = 0;
var heroHealthPoints = 0;
var heroAttackPoints = 0;
//     <!-- The health points, attack power and counter attack power of each character must differ. Each character has these three attributes -->


//      <!-- *********CREATE AN OBJECT FOR EACH CHARACTER********* -->
    var sheep = {
        healthPoints : 20,
        attackPoints : 10,
        originalAttackPoints : 10,
        countAttackPower : 2
    };

    var superEvilDragon = {
        healthPoints : 199,
        attackPoints : 10,
        originalAttackPoints : 10,
        countAttackPower : 20
    };

    var neighborsDog = {
        healthPoints : 100,
        attackPoints : 2,
        originalAttackPoints : 2,
        countAttackPower : 5
    };

    var knight = {
        healthPoints : 120,
        attackPoints : 15,
        originalAttackPoints : 15,
        countAttackPower : 15
    };

console.log("Is this reading?")


//     <!-- When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as this character for the rest of the game.-->

$(document).ready(function() {
console.log("At least its reading...")

// Initial health points

$("#textbox1").html(sheep.healthPoints);
$("#textbox2").html(neighborsDog.healthPoints);
$("#textbox4").html(superEvilDragon.healthPoints);
$("#textbox3").html(knight.healthPoints);

//     <!-- *************CHOOSING A HERO************* -->

//Response if attack button is clicked

$('#buttonAttack').click(function(){
    $('#comment').html("There's nobody to fight with yet silly goose. Choose your hero first.")
});

//Function used when a hero is chosen.

function chooseHero(){
    console.log("The hero is chosen...");
    $('.heroImage').css('border', '10px solid green');
    $('.heroTextbox').css('background-color', 'black');
    $('.remainingCharacter').css('border','10px solid red');
    $('#comment').html('Choose your opponent!');
    $('#buttonAttack').click(function(){
        $('#comment').html("The wind is a worthy opponent, but now it is time to fight something a little more solid. Choose your challenger!")
    });
}

//Function used when a challenger is chosen.

function chooseChallenger(){
    console.log("The challenger is chosen...");
    $('.challengerImage').css('border', '10px solid black');
    $('.challengerTextbox').css('background-color', 'black');
    $('.remainingCharacter').css('border','10px solid white')
    $('#comment').html('Now it is time to fight... TO THE DEATH! (No really, fight to the death.)')
    $('#textboxChallenger').html(challengerHealthPoints);
};

//Function that randomizes the attack comments
function attackComments(){
    var attackCommentArray = ["You got this! Attack again!","You get a flesh wound! And you get a flesh wound!","Direct hit!","Kill him all the way to death! Attack again!","That was his favorite foot!"];
    var attackComment = Math.floor(Math.random() * attackCommentArray.length);
    $('#comment').html(attackCommentArray[attackComment]);
}

//Function that 
    //increases the attack power per attack
    //Has challenger attack hero

function attack() {
    //*******SHEEP ATTACK */
    if($('#hero').attr('src').indexOf('sheep') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + sheep.attackPoints;
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('knight') != -1) {
            heroHealthPoints = heroHealthPoints - knight.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
    }
    //*******DOG ATTACK */
    if($('#hero').attr('src').indexOf('dog') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + neighborsDog.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('knight') != -1) {
            heroHealthPoints = heroHealthPoints - knight.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
    }
    //*******KNIGHT ATTACK */
    if($('#hero').attr('src').indexOf('knight') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + knight.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - sheep.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
    }
//*******KNIGHT ATTACK */
    if($('#hero').attr('src').indexOf('knight') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + knight.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - sheep.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('Dragon') != -1) {
            heroHealthPoints = heroHealthPoints - superEvilDragon.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
    }
    //*******SUPER EVIL DRAGON ATTACK */
    if($('#hero').attr('src').indexOf('Dragon') != -1) {
        attackComments()
        challengerHealthPoints = challengerHealthPoints - heroAttackPoints;
        $('#textboxChallenger').html(challengerHealthPoints);
        heroAttackPoints = heroAttackPoints + knight.attackPoints;
        if($('#challenger').attr('src').indexOf('sheep') != -1) {
            heroHealthPoints = heroHealthPoints - sheep.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('knight') != -1) {
            heroHealthPoints = heroHealthPoints - knight.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
        if($('#challenger').attr('src').indexOf('dog') != -1) {
            heroHealthPoints = heroHealthPoints - neighborsDog.countAttackPower;
            $('#textboxHero').html(heroHealthPoints);
        }
    }
}

//Function when player wins

//Function when player loses

function loss() {
    $('#buttonAttack').html('RESET')
    $('#comment').html("Hero has fainted! Please try again... this is a pay-by-click website.")
    $('#buttonAttack').click(function(){
        lossAfterReset();
    });
}

function lossAfterReset () {
    //****Comment */
    $('#comment').html('The fate of this website... and your pride, depends on you! Choose your hero!');
    //****CSS RESET */
    $('.challengerImage').css('border', '10px solid white');
    $('.challengerTextbox').css('background-color', 'white');
    $('.heroImage').css('border', '10px solid white');
    $('.heroTextbox').css('background-color', 'white');
    $('.remainingCharacter').css('border','10px solid green');
    $("#hero").attr('src','images/placeholder.jpg');
    $("#challenger").attr('src','images/placeholder.jpg');
    //*****UNHIDE CHARACTERS */
    $('character1, character2, character3, character4').unhide();
}

    $("#character1Picture").click(function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            chooseHero();
            $(this).parent().hide();
            heroHealthPoints = sheep.healthPoints;
            $('#textboxHero').html(heroHealthPoints);
            $("#hero").attr('src','images/sheep.jpg');
            $('#character2Picture').click(function(){
                console.log("Second Level Function")
                $(this).parent().hide();
                challengerHealthPoints = neighborsDog.healthPoints;
                $("#challenger").attr('src','images/dog.jpeg');
                chooseChallenger();
                $('#buttonAttack').click(function(){
                    attack();
                    if (heroHealthPoints <= 0) {
                        loss();
                    }
                });
            });
        };
    });

    $("#character2Picture").click(function(){
        if ($('#hero').attr('src').indexOf('placeholder') != -1) {
            console.log("Not The Right Function");
            console.log($('#hero').attr('scr'));
            chooseHero();
            $(this).parent().hide();
            heroHealthPoints = sheep.healthPoints;
            $('#textboxHero').html(heroHealthPoints);
            $("#hero").attr('src','images/dog.jpeg');
        };
    });

    $("#character3Picture").click(function(){
        chooseHero();
        $(this).parent().hide();
        heroHealthPoints = sheep.healthPoints;
        $('#textboxHero').html(heroHealthPoints);
        $("#hero").attr('src','images/knight.JPG');
    });

    $("#character4Picture").click(function(){
        chooseHero();
        $(this).parent().hide();
        heroHealthPoints = sheep.healthPoints;
        $('#textboxHero').html(heroHealthPoints);
        $("#hero").attr('src','images/superEvilDragon.jpg');
    });    


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