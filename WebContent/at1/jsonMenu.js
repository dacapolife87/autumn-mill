$.getJSON('http://dacapolife87.iptime.org:8080/dbtest/at1/JSONFile.json',function(data){

	items = [];
	dialist="";
	item = '<div data-role="collapsible">';
	$.each(data, function(index, val) {
       /* 移댄뀒怨좊━ 遺꾨쪟 */
       item += '<h3 id="clear_style">';
       //<a href="#" class="ui-collapsible-heading-toggle ui-btn ui-mini ui-btn-icon-right ui-btn-up-c" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="arrow-l" data-iconpos="right" data-theme="c" data-mini="true">';-->
       item += val['category'];
       item += '</a></h3>';
       //item +='<ul data-role="listview" data-inset="false">';
       list = "";
       console.log(val['category']);
	       $.each(val['list'] , function(index, val) {
	         /* �몃�移댄뀒怨좊━ 硫붾돱由ъ뒪��*/
		        //$.each(this, function(index, val){
		          list += "<div id='float_style'>";
		          list += '<a href="#';
		          list += val.id;
		          list += '" data-rel="dialog"><img src=img/';
		          list += val.picture;
		          list += " width='100px' height='100px'><br>";
		          //list += val.name;
		          list += "</a>";
		          list += "</div>";
		          /*�ㅼ씠�쇰줈洹�李��앹꽦*/
		          dialist += "<div data-role='page' data-overlay-theme='e' id=";
		          dialist += val.id;
		          dialist += ">"
		          dialist += '<div data-role="header" data-theme="b"><h1>';
		          dialist += val.name;
		          dialist += "</h1></div>";
		          dialist += '<div data-role="content" data-theme="d"><img src=img/';
		          dialist += val.picture;
		          dialist += "><p>";
		          dialist += val.about;
		          dialist += '</p></div></div>';
		        // });
	       });
       item += list;
       console.log(item);
       item+='</ul>';
    });
    item += "</div>";
    items.push(item);
    $("body").append(dialist);
	$("#menucategory").append(items);
	});