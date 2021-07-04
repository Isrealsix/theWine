let counterA = 0;
let counterB = 1;
let boolWatch = true;

const sections = document.querySelectorAll('section');
const progress = document.querySelector('.progress-box h2');
const circles = document.querySelectorAll('.circle');
const [leftBtn, rightBtn] = document.querySelectorAll(
	'.page-btn--left, .page-btn--right'
);

const progressCounter = () => {
	const total = sections.length;

	progress.textContent = `${counterB}/${total}`;

	circles.forEach(circle => {
		circle.style.backgroundColor = 'transparent';
	});

	document.querySelector(`.circle-${counterB}`).style.backgroundColor = '#ddd';
};

const pageController = () => {
	boolWatch = true;
	if (counterA === 5) {
		sections.forEach(section => {
			section.style.left = '0';
		});
		counterA = 0;
		counterB = 1;
		progressCounter();
		boolWatch = false;
	}

	if (counterA < 0) {
		sections.forEach(section => {
			if (section.classList[0] === 'section-5') return;
			section.style.left = '-100vw';
		});
		counterA = 4;
		counterB = 5;
		progressCounter();
		boolWatch = false;
	}
	progressCounter();
	return boolWatch;
};

window.addEventListener('wheel', e => {
	const deltaY = e.deltaY > 0;
	if (deltaY) {
		counterA++;
		counterB++;
	} else {
		counterA--;
		counterB--;
	}

	pageController();
	progressCounter();

	boolWatch &&
		(document.querySelector(
			`.section-${deltaY ? counterA : counterB}`
		).style.left = `${deltaY ? '-100vw' : 0}`);

	console.log(e);
});

leftBtn.addEventListener('click', () => {
	counterA--;
	counterB--;
	pageController() &&
		(document.querySelector(`.section-${counterB}`).style.left = 0);
});

rightBtn.addEventListener('click', () => {
	counterA++;
	counterB++;
	pageController() &&
		(document.querySelector(`.section-${counterA}`).style.left = '-100vw');
});

document.querySelector('.grapes-img').addEventListener('mouseover', () => {
	document.querySelector('.section-3-wrapper').style.opacity = '.5';
});

document.querySelector('.grapes-img').addEventListener('mouseleave', () => {
	document.querySelector('.section-3-wrapper').style.opacity = '1';
});
