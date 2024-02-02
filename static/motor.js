var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu-btn');
var closeBtn = document.querySelector('.close-btn');

menuBtn.addEventListener("click", () => {
  menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove('active');
});





const languages = {
	Español: 'es',
	English: 'en'
}


// const changeLanguage = (lang) => {
// 	document.getElementById('language_flag').setAttribute('src', `${languages[lang] === 'es' ? './static/img/españa.png' : './static/img/usa.png'}`);
// 	document.getElementById('language_select').innerText = lang;
// 	document.getElementById('language_project').setAttribute('src', `${languages[lang] === 'es' ? './static/img/parte 2 texto.png' : './static/img/syntexeng.png'}`);
// 	video.addEventListener('click', (event) => {
// 		modal.classList.add('active')
// 		iframe.setAttribute("src", `${languages[lang] === 'es' ? './static/img/videoesp.mp4' : './static/img/videoing.mp4'}`)

// 	})
// 	Array.from(document.getElementsByClassName('trans')).forEach(function (elem) {
// 		if (elem.classList.contains('lang-' + languages[lang])) {
// 			elem.style.display = 'initial';
// 		}
// 		else {
// 			elem.style.display = 'none';
// 		}
// 	});

// }
// close.addEventListener("click", (event) => {
// 	modal.classList.remove("active")
// 	iframe.setAttribute("src", "")

// })
// var rellax = new Rellax('.rellax');

// changeLanguage("English");