function toggleFilters(){
	let button = document.querySelector(".filter-toggle")
	let filterList = document.querySelector(".filters")
	filterList.classList.toggle("hidden")
	button.classList.toggle("border-fusion")
}