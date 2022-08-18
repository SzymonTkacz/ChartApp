import { Component, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { ChartComponent } from './components/chart/chart.component';
import { LoaderService } from './components/loader/loader.service';
import { AgeRange } from './models/chart-model';
import { User } from './models/user-model';
import { UserService } from './shared/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oldestUsers: User[]
  usersData: User[]
  chartData: AgeRange = new AgeRange()
  @ViewChild(ChartComponent) chartComponent:ChartComponent;
  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(
    private userService: UserService, 
    private loaderService: LoaderService
  ) {}
  
  getUsers() {
    this.userService.getUsers().subscribe({
      next: (res) => {
        this.usersData = res.results
        this.oldestUsers = res.results.sort((a, b) => new Date(a.dob.date).getTime() - new Date(b.dob.date).getTime()).slice(0,10)        
      },
      error: (e) => console.error(e),
      complete: () => {
        this.prepareChartData(this.usersData) 
        this.chartComponent.drawChart(this.chartData)
      }
    })
  }

  prepareChartData(data: User[]) {
    this.chartData.under30th = data.filter(x => x.dob.age >= 20 && x.dob.age < 30).length
    this.chartData.under40th = data.filter(x => x.dob.age >= 30 && x.dob.age < 40).length
    this.chartData.under50th = data.filter(x => x.dob.age >= 40 && x.dob.age < 50).length
    this.chartData.under60th = data.filter(x => x.dob.age >= 50 && x.dob.age < 60).length
    this.chartData.under70th = data.filter(x => x.dob.age >= 60 && x.dob.age < 70).length
    this.chartData.over70th = data.filter(x => x.dob.age >= 70).length
  }
}
