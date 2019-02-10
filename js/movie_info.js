var hot=document.getElementById("hothot");
var oup=document.getElementById("up");

var ajax=new XMLHttpRequest;
ajax.open("get","php/movie_info.php",true);
ajax.send(null);
ajax.onreadystatechange=function(){
		if(ajax.readyState===4&&ajax.status===200){
				var data=JSON.parse(ajax.responseText);
				var cstr="";
				var mstr="";
				
				for(var ca=0;ca<data.length;ca++){
					cstr+=`
						<li>
							<a href="html/movie.html">
								<div class="movie_img">
									<img src="${data[ca].imgurl}"" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}"" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}"" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li class="four">
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}"" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}"" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}"" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
						<li class="four">
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="sale">
									购 票
								</span>
								
							</a>
						</li>
					`
					mstr+=`
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li class="four" style="margin-right: 0;">
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li>
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>
						<li class="four" style="margin-right: 0;">
							<a href="">
								<div class="movie_img">
									<img src="${data[ca].imgurl}" alt="">
									<div class="shadow">
										<p class="movie-info">${data[ca].cont}</p>
									</div>
									
								</div>
								<span class="look">
									${data[ca].look}人想看
								</span>
								<p class="advance">
									<span href="">预告片</span>
									<span href="">预售</span>
								</p>
								
							</a>
							<div class="date">2月5日上映</div>
						</li>

					`
					
				}
				hothot.innerHTML=cstr;
				oup.innerHTML=mstr;
				
		}
}
