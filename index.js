let counterA = 0;
let counterB = 1;
const sections = document.querySelectorAll('section');

window.addEventListener('wheel', e => {
	const deltaY = e.deltaY > 0;
	if (deltaY) {
		counterA++;
		counterB++;
	} else {
		counterA--;
		counterB--;
	}

	if (counterA === 5) {
		sections.forEach(section => {
			section.style.left = '0';
		});
		counterA = 0;
		counterB = 1;
		return;
	}

	if (counterA < 0) {
		sections.forEach(section => {
			if (section.classList[0] === 'section-5') return;
			section.style.left = '-100vw';
		});
		counterA = 4;
		counterB = 5;
	}

	document.querySelector(
		`.section-${deltaY ? counterA : counterB}`
	).style.left = `${deltaY ? '-100vw' : 0}`;

	console.log(e);
});
