$(document).ready(function() {
	$(".act_1").click(function(){
		$('#t_1').removeClass('hidden');
		$('#t_2').addClass('hidden');
		$('#t_3').addClass('hidden');
	});
		$(".act_2").click(function(){
		$('#t_2').removeClass('hidden');
		$('#t_1').addClass('hidden');
		$('#t_3').addClass('hidden');
	});
	$(".act_3").click(function(){
		$('#t_3').removeClass('hidden');
		$('#t_1').addClass('hidden');
		$('#t_2').addClass('hidden');
	});
});