// Close alert

const alert = document.querySelector('.alert');
const alertBtn = document.querySelector('.btn-alert');

alertBtn.addEventListener('click', () => {
  alert.style.display = "none";
})

// Bell dropdown
// Used this link to help with dropdown menu: https://www.w3schools.com/howto/howto_js_dropdown.asp
const bell = document.querySelector('.bell-icon');
const dot = document.querySelector('.bell-dot');
const dropdown = document.querySelector('.notifications');

bell.addEventListener('click', () => {
  dropdown.classList.toggle("show-drop");
  dot.style.display = "none";
});

// Traffic Chart

const trafficChart = document.querySelector('#traffic-graph');

let trafficDataHourly = {
  labels: ['HR 1', 'HR 2', 'HR 3', 'HR 4', 'HR 5', 'HR 6', 'HR 7', 'HR 8', 'HR 9', 'HR 10'],
  datasets: [{
    data: [46, 28, 74, 91, 101, 54, 37, 65, 41, 29],
    backgroundColor: 'rgba(106, 95, 202, 0.3)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  }]
};

let trafficDataDaily = {
  labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
  datasets: [{
    data: [450, 550, 600, 500, 750, 950, 300],
    backgroundColor: 'rgba(106, 95, 202, 0.3)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  }]
}

let trafficDataWeekly = {
  labels: ['WK 1', 'WK 2', 'WK 3', 'WK 4'],
  datasets: [{
    data: [2550, 5000, 1400, 3300],
    backgroundColor: 'rgba(106, 95, 202, 0.3)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  }]
}

let trafficDataMonthly = {
  labels: ['MTH 1', 'MTH 2', 'MTH 3', 'MTH 4', 'MTH 5', 'MTH 6', 'MTH 7', 'MTH 8', 'MTH 9', 'MTH 10', 'MTH 11', 'MTH 12'],
  datasets: [{
    data: [11500, 12000, 13500, 11000, 15000, 17500, 20000, 16000, 12500, 13000, 18000, 10500],
    backgroundColor: 'rgba(106, 95, 202, 0.3)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  }]
}

const trafficOptions = {
  fill: true,
  aspectRatio: 2,
  scales: {
      y:{
          beginAtZero: true
      }
  },
  plugins: {
      legend: {
          display: false
      }
  }
};

let trafficLineChart = new Chart( trafficChart, {
  type: 'line',
  data: trafficDataHourly,
  options: trafficOptions
});

const trafficList = document.querySelector('.traffic-list');

trafficList.addEventListener('click', (e) => {
  let chartLabel = e.target;
  let liveLabel = document.querySelector('.live');

  if ( chartLabel.className !== 'traffic-list-nav live' &&  chartLabel.tagName === 'LI') {
    chartLabel.classList.add('live');
    liveLabel.classList.remove('live');

    if ( chartLabel.textContent.includes('Hourly') ) {
      trafficLineChart.destroy();
      trafficLineChart = new Chart( trafficChart, {
        type: 'line',
        data: trafficDataHourly,
        options: trafficOptions
      });
    } else if ( chartLabel.textContent.includes('Daily')){
      trafficLineChart.destroy();
      trafficLineChart = new Chart( trafficChart, {
        type: 'line',
        data: trafficDataDaily,
        options: trafficOptions
      });
    } else if ( chartLabel.textContent.includes('Weekly') ) {
      trafficLineChart.destroy();
      trafficLineChart = new Chart( trafficChart, {
        type: 'line',
        data: trafficDataWeekly,
        options: trafficOptions
      });
    } else if ( chartLabel.textContent.includes('Monthly') ) {
      trafficLineChart.destroy();
      trafficLineChart = new Chart( trafficChart, {
        type: 'line',
        data: trafficDataMonthly,
        options: trafficOptions
      });
    }
  }
});

// Daily Traffic

const dailyChart = document.querySelector('#daily-graph');

const dailyData = {
  labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  datasets: [{
    data: [450, 550, 600, 500, 750, 950, 300],
    backgroundColor: 'rgba(106, 95, 202, 0.8)',
    borderColor: 'rgba(189, 189, 189, 0.7)',
    borderWidth: 1
  }]
}

const dailyOptions = {
  scales: {
      y:{
          beginAtZero: true
      }
  },
  plugins: {
      legend: {
          display: false
      }
  }
};

const dailyBarChart = new Chart( dailyChart, {
  type: 'bar',
  data: dailyData,
  options: dailyOptions
});

// Mobile Users 

const mobileChart = document.querySelector('#mobile-graph');

const mobileData = {
  labels: ['Desktop','Tablets','Phones'],
  datasets: [{
    data: [670, 510, 890],
    label: '# of users',
    backgroundColor: [
      'rgba(106, 95, 202, 0.863)',
      'turquoise',
      'lightgreen'
    ],
    borderWidth: 1
  }]
};

const mobileOptions = {
  aspectRatio: 2,
  plugins: {
    legend: {
        position: 'left',
        labels: {
            boxWidth: 25,
            boxHeight: 25
        }
    }
  }
};

const mobileDoughChart = new Chart( mobileChart, {
  type: 'doughnut',
  data: mobileData,
  options: mobileOptions
});

// Message User 