/**
 * Created by nizvetskyi on 29.06.2017.
 */
$(document).ready(function() {
    $('#input_date').click(function () {
        var x = document.getElementById("input_title").value;
        $.ajax({
            type: "POST",
            url: "php/func.php",
            data: "x="+x,
            dataType: "html",
            cache: false,
            success: function (data) {
                alert(data);
            }
        });
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