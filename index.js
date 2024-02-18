var isBirthdayData = true;
var ageData = 40;
var userNameData = 'John';
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName, ", age: ").concat(age + 1));
    }
}
function logBrtMsg2(isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, ", age: ").concat(age + 1);
    }
    else {
        return 'Error';
    }
}
logBrtMsg(isBirthdayData, userNameData, ageData);
logBrtMsg2(isBirthdayData, userNameData, ageData);
