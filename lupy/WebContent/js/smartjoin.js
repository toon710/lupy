$(document).ready(function(){
	$('#mgen').on("click", function(){		
		$('#avatarBox').css('display', 'block');
		$('#man').slideDown(1000, function(){
		$('#woman').css('display', 'none');
				//$('#man').css('display', 'block');
				//$('#avataBox').slideUp(500);
		
		//$('#man').css('display', 'block');
		});
	});
	
	$('#fgen').click(function(){
		$('#avatarBox').css('display', 'block');
		$('#man').slideUp();
		$('#woman').slideDown();
	});
});

/*document.getElementById('mgen').onclick = function(){
		document.getElementById('avatarBox').style.display = 'block';
		document.getElementById('woman').style.display = 'none';
		document.getElementById('man').style.display = 'block';
	};
	 
	
	document.getElementById('fgen').onclick = function(){
		document.getElementById('avatarBox').style.display = 'block';
		document.getElementById('man').style.display = 'none';
		document.getElementById('woman').style.display = 'block';
	}; 
	*/	
	

