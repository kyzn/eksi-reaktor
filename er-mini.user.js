// 59saniye'yi youtube ile değiştir
var title = $("#title").text().replace(/'/g, "").trim();
var titleuri = encodeURIComponent(title);
var yt_url =  "https://www.googleapis.com/youtube/v3/search?safeSearch=none&part=snippet&q="+ encodeURIComponent(title) +"&relevanceLanguage=tr&maxResults=1&key=AIzaSyBrQhJDh900EamsDLWZH6kQm_9Dc1AqcX8"
$.ajax({
    type: "GET",
    url: yt_url,
    datatype: "json",
    success: function (response) {
      if (response.items) {
            $.each(response.items, function (i, data) {
                var video_id = data.id.videoId;
                if(video_id){ //undefined check
                  var video_frame = "<h2 id=\"videolar\">konulu video</h2><iframe width='100%' height='360' src='https://www.youtube.com/embed/"+ video_id + "?feature=player_embedded' frameborder='0' allowfullscreen></iframe>";
                  var video_upper_frame = "<iframe width='100%' height='315' src='https://www.youtube.com/embed/"+ video_id + "?feature=player_embedded' frameborder='0' allowfullscreen></iframe>";
                  //Convert videos on right side
                  if ($("#videos")) $("#videos").html(video_frame);
                  //Convert videos that appear at top
                  if ($("#video")) $("#video").html(video_upper_frame);
                }
            }); //.each
        } //if.response
    } //.sucess
}); //.ajax

//araştır düğmesini geri getir (google)
$(".sub-title-menu").prepend("<div><a href='https://google.com/search?q="+title+"' target='_blank'>araştır</a></div>");