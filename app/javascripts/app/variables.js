var activeArea = 9200;

var landWaarde = 0.00100;
var vliegWaarde = 0.00018;
var densityStijging = (landWaarde-vliegWaarde)/10;
var fogDistance = vliegWaarde;

var fov = 40;
var near = 1;
var far = activeArea+4500;

var widthScreen = 1400;
var heightScreen = 1050;

var afstandAnimatie = 1500;
var rotatieSnelheidAnimatie = 0.02;

var controllerMoves = false;

var boundingBoxScale = 900;

var cameraTarget;;
