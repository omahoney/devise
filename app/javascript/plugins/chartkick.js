import Chartkick from 'chartkick';
import Chart from 'chart.js';

$(document).on('turbolinks:load', function() {
    window.Chartkick = Chartkick
    Chartkick.addAdapter(Chart)
    Chartkick.options = {
        library: {animation: {easing: 'easeOutQuart'}},
    }

    // Stockplans Dashboard
    const stockplanAuthorizedPieChart = $('#optionOutstanding-pie-chart')
//    if (stockplanAuthorizedPieChart.length > 0) {
//        let data = stockplanAuthorizedPieChart.data('stockplans')
//        new Chartkick.ColumnChart('stockplanAuthorized-pie-chart', data)
//    }

})







