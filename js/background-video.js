$(function()
{
    $.fn.startBGvideo = function(vid_webm, vid_mp4, img) 
    {
        if($("div#background-video").length > 0)
        {
            $("div#background-video").each(function()
            {
                $(this).append('<video autoplay loop poster="'+img+'" id="bgvid"><source src="'+vid_webm+'" type="video/webm"><source src="'+vid_mp4+'" type="video/mp4"></video>'); 
            });
        }
    }
});