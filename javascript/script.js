// <!-- Global Variables -->

//     <!-- The health points, attack power and counter attack power of each character must differ. Each character has these three attributes -->


//      <!-- *********CREATE AN OBJECT FOR EACH CHARACTER********* -->
    var sheep = {
        healthPoints : 20,
        attackPoints : 10,
        countAttackPower : 2
    };

    var superEvilDragon = {
        healthPoints : 199,
        attackPoints : 10,
        countAttackPower : 20
    };

    var neighborsDog = {
        healthPoints : 100,
        attackPoints : 2,
        countAttackPower : 5
    };

    var knight = {
        healthPoints : 120,
        attackPoints : 15,
        countAttackPower : 15
    };




//     <!-- When the game starts, the player will choose a character by clicking on the fighter's picture. The player will fight as this character for the rest of the game.-->
$(document).ready(function() {
console.log("At least its reading...")
//     <!-- *************CHOOSING A HERO************* -->
    $('#character1Picture','character2Picture','character3Picture','character4Picture').click(function(){
        console.log("After click, before function")
        $(this).parent().hide();
        console.log("At least it registers the click...");
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