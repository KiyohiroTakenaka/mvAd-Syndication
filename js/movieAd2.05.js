
    var urlPrm = new Object;
    var urlSearch = location.search.substring(1).split('&');
    var main_keywords ="";
    var list=0;
   
    for(i=0;urlSearch[i];i++) 
    {
    var kv = urlSearch[i].split('=');
    urlPrm[kv[0]]=kv[1];   
 　　 }

    if(decodeURI(urlPrm.name) === "おすすめ"||typeof(urlPrm.name)==="undefined")
     $('.swiper-container').css('display','block'); else $('.swiper-container').css('display','none');  
      
      main_keywords = decodeURI(urlPrm.name);

      var param1 = new Object();
      var param2 = new Object();
      var param3 = new Object();
      var param4 = new Object();
      var from = "201601010000";
      var to= "202101010000";
      param1.active_flg = 1;
      param1.pageSize = 5;
      param1.pageNumber= 1;
      param1.api_keywords="注目";
      param1.publication_date =　[from,to];
      var sort1_order ="publication_date";
      var sort1_by ="desc";
      var sort2_order ="month_count";
      var sort2_by ="desc";
      var sortArray = [{
      order: sort1_order,
      by: sort1_by }, {
      order: sort2_order,
      by: sort2_by }];
      param1.sort = sortArray;
      loadEqMeta(param1,callback);

      param2.active_flg = 1;
      param2.pageSize = 12;
      param2.pageNumber= 1;
      if (typeof(urlPrm.name)!=="undefined")
      param2.api_keywords=main_keywords;
      param2.publication_date =　[from,to];
      var sort1_order ="publication_date";
      var sort1_by ="desc";
      var sort2_order ="day_count";
      var sort2_by ="desc";
      var sortArray = [{
      order: sort1_order,
      by: sort1_by }, {
      order: sort2_order,
      by: sort2_by }];
      param2.sort = sortArray;

      param3.active_flg = 1;
      param3.pageSize = 5;
      param3.pageNumber= 1;
      param3.publication_date =　[from,to];
      var sort1_order ="month_count";
      var sort1_by ="desc";
      var sort2_order ="week_count";
      var sort2_by ="desc";
      var sortArray = [{
      order: sort1_order,
      by: sort1_by }, {
      order: sort2_order,
      by: sort2_by }];
      param3.sort = sortArray;

      var moviesum; 
      var pageSize;  
      var maxpage;
      var callback;

      function searchResultEq(result)
  {
      if (list===0)
      {
      render_page1(result);
      list=1;
      loadEqMeta(param2,callback);
      }
      else if (list===1)
      {
      left_container_under(result); 
      list=2;
      loadEqMeta(param3,callback);
      
      }
      else if (list===2)
      {
      right_container(result);
      list=3;
      }
      else if  (list===3){
      left_container_under(result);
      }
      
  }
       
      function render_page1(result){
        for (var data in result.meta)      
      {      
      // dir,cid,token,mid,ad,auto,title,thum 
     
      var query = "play.html?"+result.meta[data].custom_metadata.dir_cid_token+","+result.meta[data].mid+",true,true,"+encodeURI(result.meta[data].title)+","+result.meta[data].thumbnail_url;
      $('.swiper-wrapper').append("<div class='swiper-slide'><a href="+query+"><img class='swiper-image' src='"+result.meta[data].thumbnail_url+"'/><div class='swiper-title'>"+result.meta[data].title+"</div></a></div>");
      }
       var swiper = new Swiper('.swiper-container', {
         zoom:true,
         paginationClickable: true,
         paginationType: 'progress',
         direction: 'vertical',
         autoplay:4000,
         speed: 600,
         loop: true,
         pagination: '.swiper-pagination',
         nextButton: '.swiper-button-next',
         prevButton: '.swiper-button-prev',
    });
      }

      function left_container_under(result){
      if (typeof(urlPrm.name)!=="undefined"){
      $("#mvAd-media-head").html("<span class='mvAd-tag'>" + main_keywords + "</span>の検索結果");  
    }else 
      $("#mvAd-media-head").html("<span class='mvAd-tag'>すべて</span>の検索結果");
      moviesum = result.moviesum;
      pageSize = param2.pageSize;
      maxpage =  Math.floor(moviesum/param2.pageSize)+1;
 
      for(var i = 1; i <= maxpage; i++) {
      $('#mvAd-pager').removeClass('active');
      $('#mvAd-pager').append("<li onclick='getnextmeta("+i+")' id='mvAd-pager"+i+"' class='mvAd-pager-num'>"+i+"</li>");
      }
      $('#mvAd-pager'+param2.pageNumber).addClass('active');

      for (var data in result.meta)      
            {
            var　query = "play.html?"+result.meta[data].custom_metadata.dir_cid_token+","+result.meta[data].mid+",true,true,"+encodeURI(result.meta[data].title)+","+result.meta[data].thumbnail_url;
            var tag="";
            var separatorString = ";";
            var arrayStrig = result.meta[data].api_keywords.split(separatorString);
            for (i = 0; i < arrayStrig.length; i++) {
            tag += "<a href='"+location.pathname+"?name="+encodeURI(arrayStrig[i])+"'><span class='mvAd-tag'>"+arrayStrig[i]+"</span></a>";
            }
            $('.mvAd-media').append("<li class='mvAd-media-box'><a href="+query+"><img class='mvAd-media-picture' src='"+result.meta[data].thumbnail_url+"' /></a><div class='mvAd-media-content'><a href="+query+">"+result.meta[data].title+"</a><div class='mvAd-media-offer'>【提供】"+result.meta[data].exlink[0].title+"</div><div class='mvAd-box-tag'>"+  
            tag+"</div></div></li>");       
             }
           
      }

      function right_container(result){ 
      var i;
      for (var data in result.meta) 
      { i = Number(data)+1;
      var　query = "play.html?"+result.meta[data].custom_metadata.dir_cid_token+","+result.meta[data].mid+",true,true,"+encodeURI(result.meta[data].title)+","+result.meta[data].thumbnail_url;                  
      $('#mvAd-list-caption').append("<li class='mvAd-list'><span class='mvAd-ranking-number'>"+i+"</span><a href='"+query+"'><img class='mvAd-list-picture' src='"+result.meta[data].small_thumbnail_url+"'/></a><div class='mvAd-list-content'><a href='"+query+"'>"+result.meta[data].title+"</a></div></li>");       
      }
      }

      function getnextmeta(pNumber){
      param2.pageNumber = pNumber;
      $(".mvAd-media").empty();
      $("#mvAd-pager").empty()
      loadEqMeta(param2,callback);
      list=3;    
      }




 $.getJSON("js/tag.json" , function(data) {
     for (var i in data.supplier)
     {
      $(".mvAd-supplier-box").append("<li class'mvAd-supplier'><a target='_blank' href='"+data.supplier[i].url+"'>"+data.supplier[i].content+"</a></li>");
     
     }

    for (var p in data.taglist)
      {
       $(".mvAd-tag-box").append("<a href='"+location.pathname+"?name="+encodeURI(data.taglist[p].tag)+"'><span class='mvAd-tag'>"+data.taglist[p].tag+"</span></a>");
      }
 
  });
