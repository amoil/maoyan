var cine=document.getElementsByClassName("cine")[0];
var ajax8 = new XMLHttpRequest;
ajax8.open("get", "../php/ying.php", true);
ajax8.send(null);
ajax8.onreadystatechange = function () {
    if (ajax8.readyState === 4 && ajax8.status === 200) {
        var data=JSON.parse(ajax8.responseText);
		var str="";
		for(var i=0;i<data.length;i++){
			  str+=`<dl>
						<dt>
							<h4>${data[i].name}</h4>
							<p>${data[i].address}</p>
						</dt>
						<dd>
							<span>￥<b>${data[i].price}</b>起</span>
							<a href="">选座购票</a>
						</dd>
					</dl>`;
		}
		cine.innerHTML=str;
     }
}
var lis=document.querySelectorAll("lis_nav li a");
for(var n=0;n<lis.length;n++){
	lis[n].onclick=function(){
		for(var m=0;m<lis.length;m++){
			lis[m].style.background="#fff";
			lis[m].style.color="#333";
			
		}
		this.style.background="#ef4238";
		this.style.color="#fff"	;
	}
}