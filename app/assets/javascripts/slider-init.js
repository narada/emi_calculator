
$(function(){
  $('.slider_1').alRangeSlider({
  initialSelectedValues:{to: 5000000}, showInputs: false, range: {min: 100000,max: 30000000,step: 100000},
  onInit: (IState) => ($('#l_amount').val(IState.currentValue[1])),
  onChange: (IState) => {
    $('#l_amount').val(IState.currentValue[1])
    displayChart();
  },
  });

  $('.slider_2').alRangeSlider({initialSelectedValues:{to: 72},showInputs: false, range: {min: 12,max: 84,step: 1},
    onInit: (IState) => ($('#l_tenure').val(IState.currentValue[1])),
    onChange: (IState) => {
      $('#l_tenure').val(IState.currentValue[1])
      displayChart();
    },
  });

  $('.slider_3').alRangeSlider({initialSelectedValues:{to: 7.5},showInputs: false, range: {min: 1,max: 15,step: 0.5}, allowSmoothTransition: true,
    onInit: (IState) => ($('#l_rate').val(IState.currentValue[1])),
    onChange: (IState) => {$('#l_rate').val(IState.currentValue[1])
    displayChart();
  },
  });
});
