$(function(){

    clickJump();

    var flag=true;
    var page=1;

    if(window.sessionStorage.page){
        page=window.sessionStorage.page;
    }

    var sStorage=window.sessionStorage;
        getList(page);

    $('#yyChoose').on("change",function () {
        page = this.value;
        flag=false;
        getList(page);
        sStorage.page=page;
    })

    $(".previous").on("click",function () {
        page--;
        if (page<1) {
            page=1;
        }
        flag=false;
        getList(page);
        setTimeout(function () {
            $('#yyChoose').val(page);
        },1000)
        sStorage.page=page;
    })

    $(".next").on("click",function () {
        page++;
        if (page>15) {
            page=15;
        }
        flag=false;
        getList(page);

        sStorage.page=page;
    })

    $(window).scroll(function () {
        sStorage.scroll=$(this).scrollTop()
    })

    function getList( page ) {
        $.ajax({
            url:"http://139.199.157.195:9090/api/getmoneyctrl",
            data: {pageid : page},
            success: function (res) {
                var html = '';
                html += template("savaMoneyTpl", res);
                $("#container>#listdiv>ul").html(html);
                if(flag){
                    window.scrollTo(0,window.sessionStorage.scroll)
                }else{
                    window.scrollTo(0,0)
                }
                $('#yyChoose').prop('selectedIndex',window.sessionStorage.page-1)
                flag = true;
            }
        })
    }



    //点击跳转页面
    function clickJump(pageid){
            $.ajax({
                type:'get',
                url:"http://139.199.157.195:9090/api/getmoneyctrl",
                data:{'pageid':pageid},
                success:function (res) {
                    //动态设置选页栏
                    var html='';
                    var num=Math.ceil(res.totalCount /res.pagesize);
                    for(var i=0;i<num;i++){
                        html+='<option value=' +(i+1)+'>'
                            +(i+1)+' /'+num
                            +'</option>'
                    }
                    $('#yyChoose').html(html);
                }
            });

    }

    //动态加载数据 （基础版）
    //function getSaveMoneyMenu(pageid ) {
    //    //不传参就默认第一页
    //    if(pageid==""){
    //        pageid=0;
    //    }
    //    $.ajax({
    //        type:'get',
    //        url:"http://139.199.157.195:9090/api/getmoneyctrl",
    //        data:{'pageid':pageid},
    //        success:function (res) {
    //            //使用模板函数
    //            tpl(res,'savaMoneyTpl','#container>#listdiv>ul');
    //
    //
    //        }
    //    });
    //}

    //模板函数
    //    function tpl(res,modelId,elementId){
    //        var html = template(modelId,res);
    //        //console.log(html);
    //        $(elementId).html(html);
    //    }


    //添加模板函数中的方法 获取日期 并以 2017/2/16 的格式返回
    template.helper('getDate',function getDate(){
        var d=new Date();
        var year= d.getFullYear();
        var month= d.getMonth()+1;
        month = month < 10 ? '0' + month : month;
        var day= d.getDay();
        return year+'/'+month+'/'+day;

    });

    //添加模板函数中的方法 获取数字
    template.helper('getNum',function getNum(str){
        return str.replace(/[^0-9]+/g, '')
    });

    //获取数字
    function getNum(str) {
        return str.replace(/[^0-9]+/g, '');
    }



});