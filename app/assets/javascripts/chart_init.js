// MAKE ROUNDED EDGES FOR PIE CHARTS
Chart.defaults.RoundedDoughnut    = Chart.helpers.clone(Chart.defaults.doughnut);
Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
    draw: function(ease) {
        var ctx           = this.chart.ctx;
        var easingDecimal = ease || 1;
        var arcs          = this.getMeta().data;
        Chart.helpers.each(arcs, function(arc, i) {
            arc.transition(easingDecimal).draw();

            var pArc   = arcs[i === 0 ? arcs.length - 1 : i - 1];
            var pColor = pArc._view.backgroundColor;

            var vm         = arc._view;
            var radius     = (vm.outerRadius + vm.innerRadius) / 2;
            var thickness  = (vm.outerRadius - vm.innerRadius) / 2;
            var startAngle = Math.PI - vm.startAngle - Math.PI / 2;
            var angle      = Math.PI - vm.endAngle - Math.PI / 2;

            ctx.save();
            ctx.translate(vm.x, vm.y);

            ctx.fillStyle = i === 0 ? vm.backgroundColor : pColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(startAngle), radius * Math.cos(startAngle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.fillStyle = vm.backgroundColor;
            ctx.beginPath();
            ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
            ctx.fill();

            ctx.restore();
        });
    }
});


const displayChart = () => {

params = { amount: $('#l_amount').val(), tenure: $('#l_tenure').val(), rate: $('#l_rate').val() }
var chartData = [0,0]

fetch('/home_loan/calc', {
  method: 'POST',
  headers:  {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(params)
}
).then(response => response.json())
.then(data => {
  console.log('Success:', data);
  chartData = [data['amount'], data['insurance']]
    console.log('chartData', chartData);
    var emiCalcDom = document.getElementById("emi_calc");
    var emiCalcChart = new Chart(emiCalcDom, {
        type: 'pie',
        options: {
            cutoutPercentage: 60,
            legend: {
                position: 'right',
                labels: {
                    boxWidth: 10,
                    fontStyle: 'italic',
                    fontColor: '#aaa',
                    usePointStyle: true,
                }
            },
        },
        data: {
          labels: [
                      "Home insurance",
                      "Mortage payment",
                  ],
            datasets: [
                {
                    data: chartData,
                    borderWidth: 2,
                    borderColor: [
                        '#0161E2',
                        "#02CD9A",
                    ],
                    backgroundColor: [
                        'rgba(0, 38, 89, 0.22)',
                        "rgba(01, 61, E2, 0.93)",
                    ],
                    hoverBackgroundColor: [
                        '#0161E2',
                        "#02CD9A",
                    ]
                }]
            }
        });
  $('#installment').text(data['amount'] + data['insurance']);
})
.catch((error) => {
  console.error('Error:', error);
});

  }

  $(function(){
    displayChart();
  });
