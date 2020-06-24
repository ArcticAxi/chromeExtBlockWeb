// times in HH:MM:SS format
var startTime = "9:00:00";
var endTime = "17:00:00";

// url of webpage to redirect to
var redirectUrl = "https://www.google.com";


var currentDate = new Date();
if (currentDate.getSeconds().toString().length == 1) {
	currentSeconds = "0" + currentDate.getSeconds();
} else {
	currentSeconds = currentDate.getSeconds();
}
var currentTime = currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentSeconds;

// parsing to ensure comparison is done correctly
var regExp = /(\d{1,2})\:(\d{1,2})\:(\d{1,2})/;
currentTime = parseInt(currentTime.replace(regExp, "$1$2$3"));
startTime = parseInt(startTime.replace(regExp, "$1$2$3"));
endTime = parseInt(endTime.replace(regExp, "$1$2$3"));

if (currentTime > startTime && currentTime < endTime) {
	window.location.href = redirectUrl;
};
