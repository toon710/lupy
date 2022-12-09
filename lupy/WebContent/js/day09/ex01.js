
	document.getElementById('cbtn').onclick = function(){
		var id1 = document.getElementById('sid').value;
		var pw1 = document.getElementById('spw').value;
		
		document.getElementById('pid').innerHTML = id1;
		document.getElementById('ppw').innerHTML = pw1;
		
		document.getElementById('sid').value = '';
		document.getElementById('spw').value = '';
		
		document.getElementById('fr1').style.display = 'none';
		document.getElementById('fr2').style.display = 'block';
	};
	
	document.getElementById('bbtn').onclick = function(){
		/*var id2 = document.getElementById('pid').innerHTML;
		var pw2 = document.getElementById('ppw').innerHTML;
		
		document.getElementById('sid').value = id2;
		document.getElementById('spw').value = pw2;*/
		
		document.getElementById('pid').innerHTML = '';
		document.getElementById('ppw').innerHTML = '';
		
		document.getElementById('fr2').style.display = 'none';
		document.getElementById('fr1').style.display = 'block';
	};

	document.getElementById('sbtn').onclick = function(){
		var id3 = document.getElementById('pid').innerHTML;
		var pw3 = document.getElementById('ppw').innerHTML;
		
		var id4 = document.createElement('input');
		id4.setAttribute('type', 'hidden');
		id4.setAttribute('name', 'id');
		id4.setAttribute('id', 'id');
		
		var pw4 = document.createElement('input');
		pw4.setAttribute('type', 'hidden');
		pw4.setAttribute('name', 'pw');
		pw4.setAttribute('id', 'pw');
		
		id4.value = id3;
		pw4.value = pw3;
		document.getElementById('frm').appendChild(id4);
		document.getElementById('frm').appendChild(pw4);
		/*document.getElementById('id').value = id3;
		document.getElementById('pw').value = pw3;*/
		
		document.frm.submit();
	}
	
	