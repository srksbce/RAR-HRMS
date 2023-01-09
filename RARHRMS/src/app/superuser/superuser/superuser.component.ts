import { Component, OnDestroy, OnInit } from '@angular/core';
import { disableDebugTools } from '@angular/platform-browser';
import Chart from 'chart.js/auto';
import { ObservableLike, Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-superuser',
  templateUrl: './superuser.component.html',
  styleUrls: ['./superuser.component.css']
})
export class SuperuserComponent implements OnInit, OnDestroy  {

  loginuser: any;
  public chart: any;

  subscription!: Subscription;
  dashBoardData = {} as any;
  activeEmpDataCount!:number

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.loginuser = JSON.parse(localStorage.getItem('logindetails') || '{}');
    let empdata = JSON.parse(localStorage.getItem('personal') || '{}');

    this.getDashBoardData();
    this.getOperationalcostData();
    this.getEmpData()
  }

  getDashBoardData() {
    this.subscription = this.http.getData('dashboard').subscribe({
      next: (data: any) => {
        console.log(data);
        this.dashBoardData.activeEmployees = data.activeemp;
        this.dashBoardData.OReceivables = data.receivablestotal;
        this.dashBoardData.PayrollExp = data.payrollexpensestotal;
        this.dashBoardData.EmpExpenses = data.empexpensestotal;
        this.dashBoardData.MgmtExpenses = data.mgmtexpensestotal;

        this.createChart();
      },
      error: (reason) => console.log(reason),
    });
  }
  getOperationalcostData() {
    this.subscription = this.http.getData('operationalaccess').subscribe({
      next: (data: any) => {
        console.log(data);
        let showData = data.result;
        console.log(showData[0].totalexpenses);
        let opCount = 0;
        for (var i = 0; i < showData.length; i++) {
          opCount = (opCount + parseInt(showData[i].totalexpenses)) as number;
          this.dashBoardData.operationalCount = opCount;
        }
      },
      error: (reason) => console.log(reason),
    });
  }
  getEmpData() {
    this.subscription = this.http.getData("Register").subscribe({
      next: (data: any) => {
        console.log(data);
        let actEmpData = data.filter((ele:any)=>{
          // ele['empstatus'] == 'Active'
          // console.log(ele);
          if(ele.status === "Active"){
            return ele
          }
          
        })
        console.log(actEmpData);
        
        this.activeEmpDataCount = actEmpData.length
        console.log(this.activeEmpDataCount);
        

        
        
      },
      error: reason => console.log(reason)
    });

  }

  createChart() {
    this.chart = new Chart('MyChart', {
      type: 'bar', //this denotes tha type of chart

      data: {
        // values on X-Axis
        labels: [
          'Outstanding Receivabels',
          'Payroll Expenses',
          'Employee Expenses',
          'Management Expenses',
          'Operational Cost',
        ],
        datasets: [
          {
            label: 'EXPENSE DATA',
            data: [
              this.dashBoardData.OReceivables,
              this.dashBoardData.PayrollExp,
              this.dashBoardData.EmpExpenses,
              this.dashBoardData.MgmtExpenses,
              this.dashBoardData.operationalCount,
            ],
            backgroundColor: 'pink',
          },
        ],
      },
      options: {
        aspectRatio: 2,
      },
    });
    console.log(this.dashBoardData.OReceivables);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

