$('document').ready (() =>{
	//on click event on save button 
$('.save').on('click', () =>{
let discription = $(this).siblings('.text').val()
let time = $(this).parent().attr('id')
localStorage.setItem(time, discription)
})
	//get the values of the dis and time 

	//store in local storage 

	//cerat fun to update hours
	const hoursUpdate = () =>{
		let curentHours = moment().hours();
		let totalHours = $('.col');
		for (i = 0; i < totalHours.lenght; i++){
			var blockHour = parseInt($(this).attr('id').split('-')[1]);
			if (blockHour < currentHour){
				$(this).addClass('pass')
			} else if (blockHour === curentHours){
				$(this).removeClass('pass')
				$(this).addClass('present')
			} else {
				$(this).removeClass('pass')
				$(this).removeClass('present')
				$(this).addClass('future')
			}		
		}
	};
	hoursUpdate ();

	var intervale = setInterval (hoursUpdate, 15000);

	$('#hour-9 .text').val(localStorage.getItem('hour-9'))
	$('#hour-10 .text').val(localStorage.getItem('hour-10'))
	$('#hour-11 .text').val(localStorage.getItem('hour-11'))
	$('#hour-12 .text').val(localStorage.getItem('hour-12'))
	$('#hour-1 .text').val(localStorage.getItem('hour-9'))
	$('#hour-2 .text').val(localStorage.getItem('hour-9'))
	$('#hour-3 .text').val(localStorage.getItem('hour-9'))
	$('#hour-4 .text').val(localStorage.getItem('hour-9'))
	$('#hour-5 .text').val(localStorage.getItem('hour-9'))


	$('#currentDay').text(moment().format('dddd,MMMM Do'))

	//in fun creat var to hold current number hours 

	//loop throuhg the time if the block hour currnt ass to pass 


	//call fun 

	//set inter

	//laod data on loc storage in to day 

	//display date 

})