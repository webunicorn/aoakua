


$(function() {
    var chartCont = function(){
        $('.chart1').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#9d64c1',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1400,
            scaleLength: 0
        });
        $('.chart2').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#4e66a7',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1400,
            scaleLength: 0
        });
        $('.chart3').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#4ea78e',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1400,
            scaleLength: 0
        });
        $('.chart4').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#e8c496',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1400,
            scaleLength: 0
        });
    }

    
    $(window).scroll(function(){
        var skill = $('#main .about .about_box .skill');

        if($(this).scrollTop() > skill.offset().top -650){
            chartCont();
        }
    });

    

    //star
    var a = 2000;
    var b = $(window).height();
    var f = a*b/6000;

    function star(obj, frequency, k, size) {
        for (var i=0;i<frequency;i++) {
            var x = Math.random()*a*k;
            var y = Math.random()*b*k;
            $('.'+obj).append('<div class="star" style="left:'+x+'px;top:'+y+'px;transform:scale('+size+')"></div>')
        }
    }

    var k1=1.5;
    var k2=1.5*k1;
    star('cosmo1',f,k1,1);
    star('cosmo2',f*0.1,k2,2);

    $(document).mousemove(function(e) {
        var posX = e.pageX;
        var posY = e.pageY;
        $('.cosmo1').css('left',(1-k1)*posX+'px')
        $('.cosmo1').css('top',(1-k1)*posY+'px')
        $('.cosmo2').css('left',(1-k2)*posX+'px')
        $('.cosmo2').css('top',(1-k2)*posY+'px')
    });
    
});

