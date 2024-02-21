var emailInput = document.querySelector('#email');
var titleInput = document.querySelector('#title');
var checkboxInput = document.querySelector('#checkbox');
var textInput = document.querySelector('#text');
var btnsArr = document.querySelectorAll('.btn');
var formArr = document.querySelectorAll('form');
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};
formArr.forEach(function (e) {
    e.addEventListener('submit', function (elem) {
        elem.preventDefault();
        formData.email = emailInput.value;
        formData.title = titleInput.value;
        formData.text = textInput.value;
        formData.checkbox = checkboxInput.checked;
        if (validateFormData(formData)) {
            checkFormData(formData);
        }
        else {
            alert('Заполните все данные');
        }
    });
});
// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом
function validateFormData(_a) {
    var email = _a.email, title = _a.title, text = _a.text, checkbox = _a.checkbox;
    if (email.length > 3 && title.length > 2 && text.length > 0 && checkbox) {
        return true;
    }
    else {
        return false;
    }
}
function checkFormData(_a) {
    var email = _a.email;
    // let data:string = email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    for (var i = 0; i <= emails.length; i++) {
        if (email[i] === email) {
            alert("This email is already exist");
            break;
        }
        else {
            alert("Posting data...");
        }
    }
    // Если email совпадает хотя бы с одним из массива
    // if (emails.includes(email)) {
    // 	alert("This email is already exist");
    // } else {
    // 	alert("Posting data...");
    // }
}
