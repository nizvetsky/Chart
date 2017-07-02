/**
 * Created by nizvetskyi on 29.06.2017.
 */
$(document).ready(function() {
    var parsedX = [];                           // масив значень осі Х
    var parsedY = [];                           // масив значень осі Y
    var timerI = setInterval(function () {},0);
    var data = {                                // дані графіка
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
    var option = {                              // характеристики форматування графіка
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

    var lineChart1 = new Chart.Line('lineChart', {      // об'єкт Chart
        options: option,
        data: data
    });

    function newChart() {                               // функція, яка знищує попередній об'єкт, знищує таймер і створює новий об'єект
        if (lineChart1) {
            delete lineChart1;
        }
        clearInterval(timerI);
        lineChart1 = new Chart.Line('lineChart', {      // об'єкт Chart
            options: option,
            data: data
        });
    }

    function removeCanvas() {
        $('#lineChart').remove();
        $('#graph-container').append('<canvas id="lineChart" width="900px" height="400px"><canvas>');
    }

    function clearArray(arr) {
        for (var i = arr.length; i > 0; i--) {
            arr.pop();
        }
    }

    $('#input_date').click(function () {
        clearArray(parsedX);
        clearArray(parsedY);
        removeCanvas();
        newChart();
        var time_now = new Date();                          // теперішня дата
        var getS = time_now.getSeconds();                   // вирахунок даної секунди часу
        $.getJSON("/time?d="+getS, function(result){        // get запит на створення json рядка
            result.replace("\/", '');                       // очистка зайвих '\', які ставляться сервером
            var object = JSON.parse(result);                // створення об'єкта json
            var q = 0;                                      // ітератор для циклу
            timerI = setInterval(function () {              // виконання кожної секунди функції, яка в ньому описана
                var x = parseInt(object.employees[0].x);    // вирахунок X
                var y = parseInt(object.employees[0].y);    // вирахунок Y
                x = x+q;                                    // вирахунок значення Х, який йде в масив
                y = Math.pow(Math.sqrt(y)+q,2);             // вирахунок значення Y, який йде в масив
                parsedX.push(x);                            // занесення в масив X
                parsedY.push(y);                            // занесення в масив Y
                lineChart1.update();                        // оновлення графіка
                q = q + 1;                                  // збільшення ітератора на 1
            },1000);
        });
    });
    $('#input_gip').click(function () {
        clearArray(parsedX);
        clearArray(parsedY);
        removeCanvas();
        newChart();
        var time_now = new Date();                          // теперішня дата
        var getS = time_now.getSeconds();                   // вирахунок даної секунди часу
        $.getJSON("/time?g="+getS, function(result){        // get запит на створення json рядка
            result.replace("\/", '');                       // очистка зайвих '\', які ставляться сервером
            var object = JSON.parse(result);                // створення об'єкта json
            var q = 0;                                      // ітератор для циклу
            timerI = setInterval(function () {              // виконання кожної секунди функції, яка в ньому описана
                var x = parseInt(object.employees[0].x);    // вирахунок X
                var y = parseInt(object.employees[0].y);    // вирахунок Y
                x = x+q;                                    // вирахунок значення Х, який йде в масив
                y = (1/(x+q)).toFixed(3);                   // вирахунок значення Y, який йде в масив
                parsedX.push(x);                            // занесення в масив X
                parsedY.push(y);                            // занесення в масив Y
                lineChart1.update();                        // оновлення графіка
                q = q + 1;                                   // збільшення ітератора на 1
            },1000);
        });
    });
    $('#input_log').click(function () {
        clearArray(parsedX);
        clearArray(parsedY);
        removeCanvas();
        newChart();
        var time_now = new Date();                          // теперішня дата
        var getS = time_now.getSeconds();                   // вирахунок даної секунди часу
        $.getJSON("/time?l="+getS, function(result){        // get запит на створення json рядка
            result.replace("\/", '');                       // очистка зайвих '\', які ставляться сервером
            var object = JSON.parse(result);                // створення об'єкта json
            var q = 0;                                      // ітератор для циклу
            timerI = setInterval(function () {              // виконання кожної секунди функції, яка в ньому описана
                var x = parseInt(object.employees[0].x);    // вирахунок X
                var y = parseInt(object.employees[0].y);    // вирахунок Y
                x = x+q;                                    // вирахунок значення Х, який йде в масив
                y = (Math.log(x+q)).toFixed(3);             // вирахунок значення Y, який йде в масив
                parsedX.push(x);                            // занесення в масив X
                parsedY.push(y);                            // занесення в масив Y
                lineChart1.update();                        // оновлення графіка
                q = q + 1;                                  // збільшення ітератора на 1
            },1000);
        });
    });
});