let myChart = document.getElementById('myChart').getContext('2d');

let usaPopulation = new Chart(myChart, {
  type: 'bar',
  data: {
    //'Illinois', 'Ohio', 'Georgia', 'North Carolina', 'Michigan' 
    labels: ['California', 'Texas', 'Florida', 'New York', 'Pennsylvania'],
    datasets: [{
      label: 'Population',
      data: [ 39776830, 28704330, 21312211, 19862512, 12823989],
      backgroundColor: ['red', 'orange', 'yellow', 'green', 'blue', 'purple']
    }]

  },
  options: {}
})