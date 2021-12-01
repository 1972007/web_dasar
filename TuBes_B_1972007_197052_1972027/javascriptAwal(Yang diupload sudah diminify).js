//Javascript untuk Tugas Akhir Web 1
var arrMonth =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"] ;
function hour()
	{
		//Pencatat Jam sekarang
		var today = new Date();
		var hours = today.getHours();
		var minutes = today.getMinutes();
		var seconds = today.getSeconds();
		
		//Pencatat tanggal hari ini
		var date = today.getDate();
		var month = arrMonth[today.getMonth()];
		var year = today.getFullYear();
		
		hours=(hours<10)?"0"+hours:hours;
		minutes=(minutes<10)?"0"+minutes:minutes; 
		seconds=(seconds<10)?"0"+seconds:seconds;
		
		document.getElementById('jaam').innerHTML = date +" "+ month+" " + year+"<br/>"+"Jam : "+ hours+':'+minutes+':'+seconds;
		t=setTimeout('hour()', 1000);
	}


// js untuk toggle warna jam
var cssHourCount = 0;
var cssHourArr = ['wite','red','yelow','gren','blu','blec'];
function cssHour()
{	
	var clas = cssHourArr[cssHourCount];
	$('#jaam').removeClass(clas);
	cssHourCount++;
	cssHourCount = cssHourCount % 6;
	clas = cssHourArr[cssHourCount];
	$('#jaam').addClass(clas);
	
}


//Dipake untuk slide foto makanan dan resep
var imgMakanCount = 1;
var imgMakanCount1 = 2;

// Show hide untuk bagian makanan dan resepnya
function show(id1,id2,id3,id4)
	{	
		$("#"+id2).slideUp();
		$("#"+id3).slideUp();
		$("#"+id4).slideUp();
		$("#"+id1).slideToggle();
		//Reset slide foto dan makanan
		imgMakanCount = 1;
		imgMakanCount1 = 2;
		//Reset video jika ada
		$('iframe').each(
			function(){
				var src = $(this).attr('src');
				$(this).attr('src',src);
				
			}
		);
	}


//Reset slide foto (dengan panah)
function reseting(id1,id2,max)
{
	var i = 1;
	for (i;i<=max;i++)
	{
		var reset1 = id1+i;
		var reset2 = id2+i;
		$("#"+reset1).hide();
		$("#"+reset2).hide();
	}
	$("#"+id1+1).fadeIn();
	$("#"+id2+1).fadeIn();
	
}


// fungsi panah "Next" slides (dengan panah)
function upMakan(id1,id2,max)
{	
	var max = parseInt(max);
	var div2 = id1+(imgMakanCount1);
	var div4 = id2+(imgMakanCount1);
	imgMakanCount = (parseInt(imgMakanCount)%max)+1;
	imgMakanCount1 = (parseInt(imgMakanCount))%max +1;
		for (i=1;i<=max;i++)
		{
			var reset1 = id1+i;
			var reset2 = id2+i;
			$("#"+reset1).hide();
			$("#"+reset2).hide();
		}
		$("#"+div2).fadeIn();
		$("#"+div4).fadeIn();
		
}

// fungsi panah "Prev" slides (dengan panah)
function downMakan(id1,id2,max)
{ 	
	var max = parseInt(max);
	imgMakanCount = imgMakanCount-1;
	imgMakanCount1 = imgMakanCount1-1;
	if(imgMakanCount == 0)
	{
		imgMakanCount = max;
	}
	if(imgMakanCount1 == 0)
	{
		imgMakanCount1 = max;
	}
	var div2 = id1+(imgMakanCount);
	var div4 = id2+(imgMakanCount);
	for (i=1;i<=max;i++)
	{
		var reset1 = id1+i;
		var reset2 = id2+i;
		$("#"+reset1).hide();
		$("#"+reset2).hide();
	}
	$("#"+div2).fadeIn();
	$("#"+div4).fadeIn();
}


//fungsi untuk contact di tentang kami
function showContact(id,id2)
{	
	var shown =document.getElementById(id2);
	$("#"+id2).toggle();
	
	$("#"+id).toggle();
}


//fungsi untuk slide foto otomatis di bagian Sekilas jogja
var slideDefinisi = 1;
function autoSlides()
{
	id='jogja';
	id2='ketJogja';
	for (i=1;i<=5;i++){
		$("#"+id+i).hide();
		$("#"+id2+i).hide();		
	}
	slideDefinisi = slideDefinisi%5;
	slideDefinisi++;
	$("#"+id+slideDefinisi).fadeIn();
	$("#"+id2+slideDefinisi).fadeIn();
	t=setTimeout('autoSlides()',2000);
}

function online(){
	var onlineCheck = window.navigator.onLine;
	var img = document.getElementById('onlineOffline');
	if(onlineCheck==true){
		img.src = 'Pic/signal.png';
	}
	else{
		img.src = 'Pic/nosignal.jpg';
	}
	setTimeout('online()',1);
}
window.onload = function(){
	hour();
	online();
	autoSlides();
	document.getElementById("preloaded-images").display = 'none';
}