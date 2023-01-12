$('#page').fullpage({
    autoScrolling:true,
    scrollHorizontally:true,
    navigation:true,
    anchors:['1page' , '2page' ,'3page' ,'4page','5page','6page','7page','8page','9page','10page','11page','12page','13page','14page','15page','16page','17page','18page','19page'],
    menu:'#menu',
    afterLoad:function(o,destination, d ,trigger){
 
        if(destination.anchor == "4page"){
            $('.section:nth-child(4) #c1').addClass('c1ani');
            $('.section:nth-child(4) #c2').addClass('c2ani');
            $('.section:nth-child(4) #c3').addClass('c3ani');
            $('.section:nth-child(4) #c4').addClass('c4ani');
            $('.section:nth-child(4) #c5').addClass('c5ani');
            $('.section:nth-child(4) #c6').addClass('c6ani');
            $('.section:nth-child(4) #c7').addClass('c7ani');
            $('.section:nth-child(4) #c8').addClass('c8ani');
            $('.section:nth-child(4) #c9').addClass('c9ani');
            $('.section:nth-child(4) #c10').addClass('c10ani');
            $('.section:nth-child(4) #c11').addClass('c11ani');
            $('.section:nth-child(4) #c12').addClass('c12ani');
            $('.section:nth-child(4) #c13').addClass('c13ani');
            $('.section:nth-child(4) #c14').addClass('c14ani');
            $('.section:nth-child(4) .con1').animate({
                left: 155
            },500);
            // $('.section:nth-child(4) .con1').addClass('conani');
        }else{
            $('.section:nth-child(4) #c1').removeClass('c1ani');
            $('.section:nth-child(4) #c2').removeClass('c2ani');
            $('.section:nth-child(4) #c3').removeClass('c3ani');
            $('.section:nth-child(4) #c4').removeClass('c4ani');
            $('.section:nth-child(4) #c5').removeClass('c5ani');
            $('.section:nth-child(4) #c6').removeClass('c6ani');
            $('.section:nth-child(4) #c7').removeClass('c7ani');
            $('.section:nth-child(4) #c8').removeClass('c8ani');
            $('.section:nth-child(4) #c9').removeClass('c9ani');
            $('.section:nth-child(4) #c10').removeClass('c10ani');
            $('.section:nth-child(4) #c11').removeClass('c11ani');
            $('.section:nth-child(4) #c12').removeClass('c12ani');
            $('.section:nth-child(4) #c13').removeClass('c13ani');
            $('.section:nth-child(4) #c14').removeClass('c14ani');
            $('.section:nth-child(4) .con1').animate({
                left: -10
            },00);
            // $('.section:nth-child(4) .con1').removeClass('conani');
        }
        if(destination.anchor == "7page"){
            $('.section:nth-child(7) .t1').addClass('t1ani');
            $('.section:nth-child(7) .t2').addClass('t2ani');
            $('.section:nth-child(7) .t3').animate({
                opacity:1
            },500);
        }else{
            $('.section:nth-child(7) .t1').removeClass('t1ani');
            $('.section:nth-child(7) .t2').removeClass('t2ani');
            $('.section:nth-child(7) .t3').animate({
                opacity:0,
            },00);
        }
        if(destination.anchor == "19page"){
            $('#page .section:nth-child(19) .l1').animate({
                opacity:1
            },300,function()
            {
                $('#page .section:nth-child(19) .l2').animate({
                    opacity:1
                },300,function(){
                    $('#page .section:nth-child(19) .l3').animate({
                        opacity:1
                    },300,function(){
                        $('#page .section:nth-child(19) .l4').animate({
                            opacity:1
                        },300,function(){
                            $('#page .section:nth-child(19) .l5').animate({
                                opacity:1
                            },300);
                        });
                    });
                }); 
            });
        }else{
            $('#page .section:nth-child(19) .l1').animate({
                opacity:0
            },00,function(){
                $('#page .section:nth-child(19) .l2').animate({
                    opacity:0
                },00,function(){
                    $('#page .section:nth-child(19) .l3').animate({
                        opacity:0
                    },00,function(){
                        $('#page .section:nth-child(19) .l4').animate({
                            opacity:0
                        },00,function(){
                            $('#page .section:nth-child(19) .l5').animate({
                                opacity:0
                            },00);
                        });
                    });
                });
            });
        }
    }
});

$('.gnb li').click(function(){
   
    if($(this).attr('data-menuanchor')== "1page"){
        location.href="#1page";
    }else if($(this).attr('data-menuanchor')== "2page"){
        location.href="#2page";
    }else if($(this).attr('data-menuanchor')== "3page"){
        location.href="#3page";
    }else if($(this).attr('data-menuanchor')== "4page"){
        location.href="#4page";
    }else if($(this).attr('data-menuanchor')== "5page"){
        location.href="#5page";
    }

});
$('.gnb').hide();

setTimeout(function(){
    $('#page .section:nth-child(1) #n2').css('opacity','1')
},3000);