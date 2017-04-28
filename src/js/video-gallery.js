/*
	Desarrollado por @stivengordillor 
	Para: laweb.pro y stivengordillo.com
	Licencia: Puedes usarlo en cualquier proyecto pero cuentanos donde - si lo vas a vender piensa en ayudar a stivengordillo.com con una donación :)
	Nota: Si puedes mejorarla cuentanos en twitter @stivengordillor
	Actualizada: 17/Nov/2015
*/
$(document).ready(function(){
	//0 elimina los controles del video - 1 Los habilita
	controls=1;
	//0 Elimina la información del video y las opciones para compartir - 1 Los habilita
	showinfo=0;
	//0 elimina los videos recomendados al finar la reproducción - 1 Los habilita
	rel=0;

	function UrlExists(url){
		var http = new XMLHttpRequest();
		http.open('HEAD', url, false);
		http.send();
		return http.status!=404;
	}

	var url ='../src/xml/video-list.xml';

	if (!UrlExists(url)) {
		url ='../../src/xml/video-list.xml';
	}

	$.ajax({
		url: url,
		dataType:'xml',
		success:function(data){
			$(data).find('playlist video').each(function(){
				var titulo= $(this).attr('titulo');
				var id= $(this).attr('id');
				var datos=$('.reproductor__thumbs ul li').length;
				var urlVideo= id;
				var urlImg ="<li id='"+id+"' class='thumb"+ datos +"'><figure><figcaption>"+titulo+"</figcaption><img src='http://img.youtube.com/vi/"+id+"/0.jpg' /></figure></li>";
				$('.reproductor__thumbs ul').append(urlImg);
			})
			idLoad= $('.reproductor__thumbs ul li:first').attr("id");
			$('.reproductor__frame--play').append("<iframe src='https://www.youtube.com/embed/" + idLoad + "?rel=" + rel + "&controls=" + controls +"&showinfo=" + showinfo + "' frameborder='0' allowfullscreen></iframe>");
			$('.reproductor__thumbs ul li').click(function(){
				idVideo=$(this).attr("id");
				$('.reproductor__frame--play').empty();
				$('.reproductor__frame--play').append("<iframe src='https://www.youtube.com/embed/" + idVideo + "?rel=" + rel + "&controls=" + controls +"&showinfo=" + showinfo + "' frameborder='0' allowfullscreen></iframe>");
			})
		},
		error: function(){
			$('.reproductor__thumbs ul').text('error');
		}
	})
});
