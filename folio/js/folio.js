
$(function() {
    var chartCont = function(){
        $('.chart1').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#9d64c1',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1000,
            scaleLength: 0
        });
        $('.chart2').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#4e66a7',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1000,
            scaleLength: 0
        });
        $('.chart3').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#4ea78e',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1000,
            scaleLength: 0
        });
        $('.chart4').easyPieChart({
            scaleColor: "#ecf0f1",
            lineWidth: 20,
            lineCap: 'butt',
            barColor: '#e8c496',
            trackColor:	"#ecf0f1",
            size: 200,
            animate: 1000,
            scaleLength: 0
        });
    }

    
    $(window).scroll(function(){
        var skill = $('#main .about .about_box .skill');

        if($(this).scrollTop() > skill.offset().top -650){
            chartCont();
        }
    });
    
    
});


