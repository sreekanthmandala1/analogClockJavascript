document.addEventListener('DOMContentLoaded', function() {

	const hour_hand = document.getElementById("hour_hand");
	const min_hand = document.getElementById("min_hand");
	const sec_hand = document.getElementById("sec_hand");
	const segments = document.getElementById("segments");
	let num_rotation = 0;
	let seg_rotation = 0

	for (let idx = 1; idx <= 60; idx++) {
		const segment = document.createElement('div');
		const mark = document.createElement('div');
		segment.classList.add('segment');
		segment.style.transform = `rotate(${seg_rotation += 6}deg) translate(-50%, -100%)`;
		mark.classList.add('mark');
		if ( idx % 5 === 0 ) {
			const num = document.createElement('span');
			num.innerText = idx / 5;
			num.classList.add('num');
			num.style.transform = `translateX(-50%) rotate(-${num_rotation += 30}deg)`;
			mark.classList.add('mark-hour');
			segment.appendChild(mark);
			segment.appendChild(num);
		} else {
			segment.appendChild(mark);
		}
		segments.appendChild(segment);
	}

	(function getTime() {
		const time = new Date();
		const hours = time.getHours();
		const minutes = time.getMinutes();
		const seconds = time.getSeconds();
		const hour_pos = hours * 360 / 12 + ((minutes * 360 / 60 ) / 12 );
		const min_pos = minutes * 360 / 60 + ((seconds * 6) / 60 );
		const sec_pos = seconds * 360 / 60;
		hour_hand.style.transform = `rotate(${hour_pos}deg) translateY(-3rem)`;
		min_hand.style.transform = `rotate(${min_pos}deg) translateY(-4.5rem)`;
		sec_hand.style.transform = `rotate(${sec_pos}deg) translateY(-4rem)`;
		setTimeout(getTime, 1000);
	})()

});
