// No arguments
const paintWall1 = function() {
    console.log("The wall has been painted red");
};

// Single argument
const paintWall2 = function(color){
    console.log("The wall has been painted " + color + ".");
}
paintWall2("green");
paintWall2("yellow");

// Multiple arguments
const paintWall3 = function(wallSide, color) {
    console.log("The " + wallSide + " wall has been painted " + color);
};
paintWall3("north", "yellow");
paintWall3("south-east", "grey");

