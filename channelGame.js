var numberOfBalls = 5;

var channelAGoesLeft = true;
var channelBGoesLeft = true;
var channelCGoesLeft = true;
var channelDGoesLeft = true;
var channelEGoesLeft = true;
var channelFGoesLeft = true;

var total = 0;

console.log("The ball is thrown in the first channel");

while (numberOfBalls > 0) {

    if (channelAGoesLeft) {
        console.log("Channel A: The ball goes left");
        channelAGoesLeft = false;

        if (channelBGoesLeft) {
            console.log("Channel B: The ball goes left");
            channelBGoesLeft = false;

            if (channelDGoesLeft) {
                console.log("Channel D: The ball goes left");
                console.log("You scored 10 points!\n");
                total = total + 10;
                channelDGoesLeft = false;

            } else {
                console.log("Channel D: The ball goes right");
                console.log("You scored 15 points!\n");
                total = total + 15;
                channelDGoesLeft = true;

            }
        } else {
            console.log("Channel B: The ball goes right");
            channelBGoesLeft = true;

            if (channelEGoesLeft) {
                console.log("Channel E: The ball goes left");
                console.log("You scored 15 points!\n");
                total = total + 15;
                channelEGoesLeft = false;

            } else {
                console.log("Channel E: The ball goes right");
                console.log("You scored 20 points!\n");
                total = total + 20;
                channelEGoesLeft = true;
            }
        }

    } else {
        console.log("Channel A: The ball goes right");
        channelAGoesLeft = true;

        if (channelCGoesLeft) {
            console.log("Channel C: The ball goes left");
            channelCGoesLeft = false;

            if (channelEGoesLeft) {
                console.log("Channel E: The ball goes left");
                console.log("You scored 15 points!\n");
                total = total + 15;
                channelEGoesLeft = false;

            } else {
                console.log("Channel E: The ball goes right");
                console.log("You scored 20 points!\n");
                total = total + 20;
                channelEGoesLeft = true;

            }

        } else {
            console.log("Channel C: The ball goes right");
            channelCGoesLeft = true;

            if (channelFGoesLeft) {
                console.log("Channel F: The ball goes left");
                console.log("You scored 20 points!\n");
                total = total + 20;
                channelFGoesLeft = false;
            } else {
                console.log("Channel F: The ball goes right");
                console.log("You scored 25 points!\n");
                total = total + 25;
                channelFGoesLeft = true;
            }
        }
    }
    numberOfBalls = numberOfBalls - 1
}

console.log("Final score: " + total);