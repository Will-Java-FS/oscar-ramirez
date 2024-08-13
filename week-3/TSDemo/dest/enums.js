"use strict";
// Example 2 - String-based Enums
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
// Access enum member values
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
console.log(Direction['Up']);
console.log(Direction['Down']);
// Enums are a feature added to JavaScript in TypeScript
// which makes it easier to handle named sets of constants.
// By default an enum is number based, starting at zero,
// and each option is assigned an increment by one. This is
// useful when the value is not important.
var CompassDirection;
(function (CompassDirection) {
    CompassDirection[CompassDirection["North"] = 0] = "North";
    CompassDirection[CompassDirection["East"] = 1] = "East";
    CompassDirection[CompassDirection["South"] = 2] = "South";
    CompassDirection[CompassDirection["West"] = 3] = "West";
})(CompassDirection || (CompassDirection = {}));
// By annotating an enum option, you set the value;
// increments continue from that value:
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
// You reference an enum by using EnumName.Value
const startingDirection = CompassDirection.East;
const currentStatus = StatusCodes.OK;
// Enums support accessing data in both directions from key
// to value, and value to key.
const okNumber = StatusCodes.OK;
const okNumberIndex = StatusCodes["OK"];
const stringBadRequest = StatusCodes[400];
// Enums can be different types, a string type is common.
// Using a string can make it easier to debug, because the
// value at runtime does not require you to look up the number.
var GamePadInput;
(function (GamePadInput) {
    GamePadInput["Up"] = "UP";
    GamePadInput["Down"] = "DOWN";
    GamePadInput["Left"] = "LEFT";
    GamePadInput["Right"] = "RIGHT";
})(GamePadInput || (GamePadInput = {}));
const handleMouseAction = (action) => {
    switch (action) {
        case 0 /* MouseAction.MouseDown */:
            console.log("Mouse Down");
            break;
    }
};
// If you look at the transpiled JavaScript, you can see
// how the other enums exist as objects and functions,
// however MouseAction is not there.
// This is also true for the check against MouseAction.MouseDown
// inside the switch statement inside handleMouseAction.
