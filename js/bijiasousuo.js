$(function () {
    getResult({
        url:"http://139.199.157.195:9090/api/getcategorytitle",
        obj: ".fenglei",
        tplId: "tit_tpl",
        callback: function () {
            $.get( "http://139.199.157.195:9090/api/getcategory",{titleid:$(".fl_tit_link").attr("titleid")},function (data){
                    var html = template('tit_con_tpl',data);
                    $(".fl_tit_link").parent().append(html);
                }
            );
        }
    });
    $(".fenglei").on("click",".fl_tit",function (e) {
        console.log(e.target)
        $(e.target).next(".fl_list").slideToggle(500);
        $(e.target).parent(".fl_tit").siblings(".fl_tit").find('.fl_list').slideUp(500);
    });
})