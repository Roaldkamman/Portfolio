Chart.defaults.global.responsive = true;
Chart.defaults.global.maintainAspectRatio = false;

var $hourlyChart = $('canvas#hourly-chart');
$hourlyChart.parent().css({'height': '40vh'});

var hourlyChart= new Chart($hourlyChart, {
   type: 'line',
   data: {
       labels: ["00:00", "01:00", "02:00", "03:00", "04:00", "05:00", "06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00"],
       datasets: [{
           label: '# of Visitors',
           data: [0, 0, 0, 0, 0, 1, 5, 10, 12, 15, 24, 38, 49, 78, 70, 90, 89, 88, 79, 50, 29, 14, 10, 1],
           backgroundColor: 'rgba(48, 135, 221, 0.4)',
           borderColor: 'rgb(48, 135, 221)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#3087DD',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});

var $dailyChart = $('canvas#daily-chart');
$dailyChart.parent().css({'height': '40vh'});

var dailyChart = new Chart($dailyChart, {
   type: 'line',
   data: {
       labels: ["May 28", "May 29", "May 30", "May 31", "June 1", "June 2", "June 3"],
       datasets: [{
           label: '# of Visitors',
           data: [12, 14, 18, 25, 41, 68, 90],
           backgroundColor: 'rgba(48, 135, 221, 0.4)',
           borderColor: 'rgb(48, 135, 221)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#3087DD',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});

var $weeklyChart = $('canvas#weekly-chart');
$weeklyChart.parent().css({'height': '40vh'});

var weeklyChart = new Chart($weeklyChart, {
   type: 'line',
   data: {
       labels: ["W 1", "W 2", "W 3", "W 4", "W 5", "W 6"],
       datasets: [{
           label: '# of Visitors',
           data: [19, 39, 48, 60, 71, 90],
           backgroundColor: 'rgba(48, 135, 221, 0.4)',
           borderColor: 'rgb(48, 135, 221)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#3087DD',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});


var $monthlyChart = $('canvas#monthly-chart');
$monthlyChart.parent().css({'height': '40vh'});

var monthlyChart = new Chart($monthlyChart, {
   type: 'line',
   data: {
       labels: ["Dec 2019", "Jan 2020", "Feb 2020", "Mar 2020", "Apr 2020", "May 2020"],
       datasets: [{
           label: '# of Visitors',
           data: [27, 34, 40, 42, 49, 90],
           backgroundColor: 'rgba(48, 135, 221, 0.4)',
           borderColor: 'rgb(48, 135, 221)',
           borderWidth: 1,
           pointRadius: 6,
           pointBackgroundColor: '#fff',
           pointBorderWidth: 2,
           pointBorderColor: '#3087DD',
           tension: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: true
       }
   }
});


var $blockChart = $('canvas#block-chart');

$blockChart.parent().css({'height': '40vh'});

var blockChart = new Chart($blockChart, {
   type: 'bar',
   data: {
       labels: ["S", "M", "T", "W", "T", "F", "S"],
       datasets: [{
           label: '# of Visitors',
           data: [12, 14, 18, 25, 41, 46, 99],
           backgroundColor: 'rgb(48, 135, 221)',
           borderRadius: 10,
           borderWidth: 1
       }]
   },
   options: {
       scales: {
           yAxes: [{
               ticks: {
                   beginAtZero:true
               }
           }]
       },
       legend: {
         display: false
       }
   }
});

var $pieChart = $('canvas#pie-chart');
$pieChart.parent().css({'height': '40vh'});

var pieChart = new Chart($pieChart, {
   type: 'doughnut',
   data: {
       labels: ["Phones", "Tablets", "Desktop"],
       datasets: [{
           label: '# of Users',
           data: [36, 12, 52],
           backgroundColor: [
               '#465cda',
               '#46c45f',
               '#3087DD'
           ],
           borderWidth: 0
       }]
   },
   options: {
       scales: {
           yAxes: [{
               display: false
           }]
       },
       legend: {
         position: 'right'
       }
   }
});

const $dataTimeframe = $('.data-timeframe');
const $lineCharts = $('.line-chart');

function showChart() {
  for (let i = 0; i < $dataTimeframe.length; i++) {
    if ($dataTimeframe.eq(i).attr('checked')) {
      $lineCharts.hide();
      $lineCharts.eq(i).show();
    }
  }
}


showChart();

$dataTimeframe.on('click', function(e) {
    $dataTimeframe.attr('checked', false);
    $(this).attr('checked', true);
    showChart();
});
