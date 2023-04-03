
			//<!--
			var TRange=null;
			function findString (str) {
			 if (parseInt(navigator.appVersion)<4) return;
			 var strFound;
			 if (window.find) {
			
			  // CODE FOR BROWSERS THAT SUPPORT window.find
			  strFound=self.find(str);
			  if (strFound && self.getSelection && !self.getSelection().anchorNode) {
			   strFound=self.find(str)
			  }
			  if (!strFound) {
			   strFound=self.find(str,0,1)
			   while (self.find(str,0,1)) continue
			  }
			 }
			 else if (navigator.appName.indexOf("Microsoft")!=-1) {
			
			  // EXPLORER-SPECIFIC CODE
			
			  if (TRange!=null) {
			   TRange.collapse(false)
			   strFound=TRange.findText(str)
			   if (strFound) TRange.select()
			  }
			  if (TRange==null || strFound==0) {
			   TRange=self.document.body.createTextRange()
			   strFound=TRange.findText(str)
			   if (strFound) TRange.select()
			   
			  }
			 }
			 else if (navigator.appName=="Opera") {
			  alert ("Search in opera browsers not supported, sorry...")
			  return;
			 }
			 if (!strFound) alert ("String '"+str+"' not found!")
			 return;
			}


			$("#inpt_search").on('focus', function () {
				$(this).parent('label').addClass('active');
			});
			
			$("#inpt_search").on('blur', function () {
				if($(this).val().length == 0)
					$(this).parent('label').removeClass('active');
			});




function myFunctionit() {
	var x = document.getElementById("itdiv");
	var x1 = document.getElementById("engdiv");
	var x2 = document.getElementById("mathdiv");
	var x3 = document.getElementById("electdiv");

	x.style.display = "block";
	x1.style.display = "none";
	x2.style.display = "none";
	x3.style.display = "none";
}
function myFunctioneng() {
	var x = document.getElementById("engdiv");
	var x1 = document.getElementById("itdiv");
	var x2 = document.getElementById("mathdiv");
	var x3 = document.getElementById("electdiv");

	x.style.display = "block";
	x1.style.display = "none";
	x2.style.display = "none";
	x3.style.display = "none";

}
function myFunctionmath() {
	var x = document.getElementById("mathdiv");
	var x1 = document.getElementById("itdiv");
	var x2 = document.getElementById("engdiv");
	var x3 = document.getElementById("electdiv");

	x.style.display = "block";
	x1.style.display = "none";
	x2.style.display = "none";
	x3.style.display = "none";

}
function myFunctionelect() {
	var x = document.getElementById("electdiv");
	var x1 = document.getElementById("itdiv");
	var x2 = document.getElementById("engdiv");
	var x3 = document.getElementById("mathdiv");

	x.style.display = "block";
	x1.style.display = "none";
	x2.style.display = "none";
	x3.style.display = "none";

}


			  

/*sliderr */
window.onload = function() {

    let slider = document.querySelector('#slider');
    let move = document.querySelector('#move');
    let moveLi = Array.from(document.querySelectorAll('#slider #move li'));
    let forword = document.querySelector('#slider #forword');
    let back = document.querySelector('#slider #back');
    let counter = 1;
    let time = 3000;
    let line = document.querySelector('#slider #line');
    let dots = document.querySelector('#slider #dots');
    let dot;

    for (i = 0; i < moveLi.length; i++) {

        dot = document.createElement('li');
        dots.appendChild(dot);
        dot.value = i;
    }

    dot = dots.getElementsByTagName('li');

    line.style.animation = 'line ' + (time / 1000) + 's linear infinite';
    dot[0].classList.add('active');

    function moveUP() {

        if (counter == moveLi.length) {

            moveLi[0].style.marginLeft = '0%';
            counter = 1;

        } else if (counter >= 1) {

            moveLi[0].style.marginLeft = '-' + counter * 100 + '%';
            counter++;
        } 

        if (counter == 1) {

            dot[moveLi.length - 1].classList.remove('active');
            dot[0].classList.add('active');

        } else if (counter > 1) {

            dot[counter - 2].classList.remove('active');
            dot[counter - 1].classList.add('active');

        }

    }

    function moveDOWN() {

        if (counter == 1) {

            moveLi[0].style.marginLeft = '-' + (moveLi.length - 1) * 100 + '%';
            counter = moveLi.length;
            dot[0].classList.remove('active');
            dot[moveLi.length - 1].classList.add('active');

        } else if (counter <= moveLi.length) {

            counter = counter - 2;
            moveLi[0].style.marginLeft = '-' + counter * 100 + '%';   
            counter++;

            dot[counter].classList.remove('active');
            dot[counter - 1].classList.add('active');

        }  

    }

    for (i = 0; i < dot.length; i++) {

        dot[i].addEventListener('click', function(e) {

            dot[counter - 1].classList.remove('active');
            counter = e.target.value + 1;
            dot[e.target.value].classList.add('active');
            moveLi[0].style.marginLeft = '-' + (counter - 1) * 100 + '%';

        });

    }

    forword.onclick = moveUP;
    back.onclick = moveDOWN;

    let autoPlay = setInterval(moveUP, time);

    slider.onmouseover = function() {

        autoPlay = clearInterval(autoPlay);
        line.style.animation = '';

    }

    slider.onmouseout = function() {

        autoPlay = setInterval(moveUP, time);
        line.style.animation = 'line ' + (time / 1000) + 's linear infinite';

    }
  
}


