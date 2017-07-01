/**
 * Created by nizvetskyi on 29.06.2017.
 */
$(document).ready(function() {
    $('#input_date').click(function () {
        var parsedX = [];
        var parsedY = [];

        var data = {
            labels: parsedX,
            datasets: [
                {
                    fillColor: "rgba(172,194,132,0.4)",
                    strokeColor: "#ACC26D",
                    pointColor: "#fff",
                    pointStrokeColor: "#9DB86D",
                    data: parsedY
                }
            ]
        };

        var option = {
            responsive: false,
            scales: {
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        display: true,
                        color: "rgba(255,99,132,0.2)"
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false
                    }
                }]
            }
        };

        var lineChart1 = new Chart.Line('lineChart', {
            options: option,
            data: data
        });

        setInterval(function () {
        var time_now = new Date();
        var getS = time_now.getSeconds();
        $.getJSON("/time?d="+getS, function(result){
            result.replace("\/", '');
            var object = JSON.parse(result);
                var x = object.employees[0].x;
                var y = object.employees[0].y;
                parsedX.push(x);
                parsedY.push(y);
            lineChart1.update();
        });
        },2000);

    });
});
/*
var lab = [];
var d = [];

function getPoint() {
    var text_input_time = document.getElementById("input_title").value;
    lab.push(text_input_time);
    var two = Math.pow(text_input_time,2);
    d.push(two);
    ch();
}



const CHART = document.getElementById("lineChart");
console.log(CHART);
function ch() {
    var lineChart = new Chart(CHART, {
        type: 'line',
        data: {
            labels: lab,
            datasets: [
                {
                    fillColor: "rgba(172,194,132,0.4)",
                    strokeColor: "#ACC26D",
                    pointColor: "#fff",
                    pointStrokeColor: "#9DB86D",
                    data: d
                }
            ]
        }
    });
}*/