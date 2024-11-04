import { Component } from '@angular/core';
import { ChartData, ChartOptions, ChartType, LabelItem } from 'chart.js';
import { BaseChartDirective, } from 'ng2-charts';

@Component({
  selector: 'app-step-analyse',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './step-analyse.component.html',
  styleUrl: './step-analyse.component.scss'
})
export class StepAnalyseComponent {
  // Données simulées pour les graphiques
  tempsCible = 60;
  tempsProduction = [58, 62, 59, 65, 61, 55, 63, 67, 60, 64]; // Temps par pièce
  ecarts = this.tempsProduction.map(t => t - this.tempsCible); // Écarts

  // Bar Chart (Temps de production individuel)
  barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Temps (s)'
        },
        suggestedMax: Math.max(...this.tempsProduction) + 5
      }
    },
    plugins: {

      // annotation: {
      //   annotations: {
      //     line1: {
      //       type: 'line',
      //       yMin: this.tempsCible,
      //       yMax: this.tempsCible,
      //       borderColor: 'rgb(255, 205, 86)',
      //       borderWidth: 2,
      //       label: {
      //         content: 'Temps cible',
      //         enabled: true
      //       }
      //     }
      //   }
      // }
    }
  }


  // barChartLabels: LabelItem = this.tempsProduction.map((_, index) => `Pièce ${index + 1}`);
  barChartData: ChartData = {
    datasets: [
      {
        data: this.tempsProduction,
        label: 'Temps de production (s)',
        backgroundColor: this.tempsProduction.map(t => t > this.tempsCible ? 'rgba(255, 99, 132, 0.5)' : 'rgba(75, 192, 192, 0.5)'),
        borderColor: this.tempsProduction.map(t => t > this.tempsCible ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)')
      }
    ],
    labels: this.tempsProduction.map((_, index) => `Pièce ${index + 1}`)
  }

  barChartType: ChartType = 'bar';

  // Histogramme (Distribution des écarts)
  // histogramChartLabels: Label[] = this.ecarts.map((_, index) => `Pièce ${index + 1}`);
  histogramChartData = [
    {
      data: this.ecarts,
      label: 'Écart par rapport au temps cible (s)',
      backgroundColor: this.ecarts.map(e => e > 0 ? 'rgba(255, 99, 132, 0.5)' : 'rgba(75, 192, 192, 0.5)'),
      borderColor: this.ecarts.map(e => e > 0 ? 'rgba(255, 99, 132, 1)' : 'rgba(75, 192, 192, 1)')
    }
  ];
  histogramChartType: ChartType = 'bar';
}
