import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables} from 'chart.js';
import { AgeRange } from 'src/app/models/chart-model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  @ViewChild('barCanvas') private barCanvas: ElementRef;
  chart: any
  constructor() {
    Chart.register(...registerables);
   }

  drawChart(users: AgeRange) {
    if(this.chart != null) {
      this.chart.destroy()
    }
    this.chart = new Chart("barCanvas", {
      type: 'bar',
      data: {
          labels: ['20-29', '30-39', '40-49', '50-59', '60-69', '70+'],
          datasets: [{
              label: 'Bar chart showing the number of men in a given age category',
              data: [users.under30th, users.under40th, users.under50th, users.under60th, users.under70th, users.over70th],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  }

}
