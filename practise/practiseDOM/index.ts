const emailInput = document.querySelector('#email') as HTMLInputElement;
const titleInput = document.querySelector('#title') as HTMLInputElement;
const checkboxInput = document.querySelector('#checkbox') as HTMLInputElement;

const textInput = document.querySelector('#text') as HTMLTextAreaElement;

const btnsArr = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;

const formArr = document.querySelectorAll('form');


interface FormConfig {
    email: string;
    title: string;
    text: string;
    checkbox: boolean;
}

const formData: FormConfig = {
	email: "",
	title: "",
	text: "",
	checkbox: false,
};

formArr.forEach(e => {
    e.addEventListener('submit', (elem) => {
        elem.preventDefault();

        formData.email = emailInput?.value ?? "";
        formData.title = titleInput?.value ?? "";
        formData.text = textInput?.value ?? "";
        formData.checkbox = checkboxInput.checked ?? false;

        if (validateFormData(formData)) {
            checkFormData(formData);
        } else {
            alert('Заполните все данные');
        }
    })
})

// Последовательность действий:
// 1) Происходит submit любой из форм
// 2) Все данные из 4х полей со страницы переходят в свойства объекта formData
// 3) Запускается функция validateFormData с этим объектом, возвращает true/false
// 4) Если на предыдущем этапе true, то запускается функция checkFormData с этим объектом

function validateFormData({email, title, text, checkbox}:FormConfig):boolean {
	if (email.length > 3 && title.length > 2 && text.length > 0 && checkbox) {
		return true;
	} else {
		return false;
	}
}

function checkFormData({email}:FormConfig):void {
	// let data:string = email;
	const emails: string[] = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];

    for (let i = 0; i <= emails.length; i++) {
        if (email[i] === email) {
            alert("This email is already exist");
            break;
        } else {
            alert("Posting data...");
            break;
        }
    }
	// Если email совпадает хотя бы с одним из массива
	// if (emails.includes(email)) {
	// 	alert("This email is already exist");
	// } else {
	// 	alert("Posting data...");
	// }
}
