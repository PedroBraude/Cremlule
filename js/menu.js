$(document).ready(main);
var contador = 1;

function main(){
	$('.menu_bar').click(function(){
		if(contador == 1){
			$('.navMobile').animate({
				right:'0'
			});
			contador = 0;
		} else {
			contador = 1
			$('.navMobile').animate({
				right:'-100%'
			});


		}
	});
}