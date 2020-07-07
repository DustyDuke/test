let side = document.querySelector('.sidebar')

side.addEventListener('click', e =>{
	
	let clicked = e.target.tagName
	if(clicked != 'LI' && clicked != 'A') {return
	}else if (clicked === 'LI'){
		e.target.classList.contains('active')?e.target.classList.remove('active'):e.target.classList.add('active')
	}else if (clicked === 'A'){
		let parent = e.target.closest('li')
		console.log(parent)
	parent.classList.contains('active')?parent.classList.remove('active'):parent.classList.add('active')
}
})