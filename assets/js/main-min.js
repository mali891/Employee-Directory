$(document).ready(function(){var e=$(".employee-container"),t=$("#modal1"),s="",i=0,a=[],l=[],n=[],r;$("#modal1").modal(),$.ajax({url:"https://randomuser.me/api/?results=12&?nat=en&?inc=name,location,email,dob,phone,picture",dataType:"json",error:function(){console.log("something didnt work")},success:function(e){$.each(e,function(t,r){for(var t=0;t<e.results.length;t++)++i<13&&(a.push(e.results[t].phone),l.push(e.results[t].location),n.push(e.results[t].dob),s+='<div class="col s12 m4"><a href="#modal1" data-target="modal1" class="employee-link modal-trigger"><div class="employee-container"><div class="employee-img">',s+='<img src="'+e.results[t].picture.large+'" alt="" class="circle responsive-img"></div>',s+='<div class="employee-details"><h3 class="name">'+e.results[t].name.first+" "+e.results[t].name.last+"</h3>",s+='<p class="email">'+e.results[t].email+"</p>",s+='<p class="city">'+e.results[t].location.city+"</p>",s+='<p class="link">View <span class="capitalise">'+e.results[t].name.first+"'s</span> details</p>",s+="</div></div></a></div>")}),$(".employee-entry").html(s);for(var o=0;o<n.length;o++)n[o]=n[o].split(" ")[0],n[o]=n[o].split("-"),n[o][0]=n[o][0].substr(2,3),n[o]=n[o][2]+"/"+n[o][1]+"/"+n[o][0];$(".employee-container").click(function(){r=$(".employee-container").index(this);var e=$(this).find("img").attr("src"),s=$(this).find("h3.name").text(),i=$(this).find("p.email").text();t.find("img").attr("src",e),t.find("h3.name").text(s),t.find("p.email").text(i),t.find("p.city").text(l[r].city),t.find("p.tel").text(a[r]),t.find("p.address").text(l[r].street+", "+l[r].state+" "+l[r].postcode),t.find("p.birthday").text("Birthday: "+n[r])})}})});