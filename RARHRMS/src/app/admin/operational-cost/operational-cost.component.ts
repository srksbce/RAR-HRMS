import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { IEmployee } from './employeedetails';

@Component({
  selector: 'app-Operational-cost',
  templateUrl: './operational-cost.component.html',
  styleUrls: ['./operational-cost.component.css'],
})
export class OperationalCostComponent implements OnInit, OnDestroy {
  employees = [] as IEmployee[];

  // constructor() { }

  // ngOnInit(): void {
  //   this.employees=[

  //     {empEmployeeNo:1, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$4888',     },
  //     {empEmployeeNo:2, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$6497',    },
  //     {empEmployeeNo:3, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$1000',    },
  //     {empEmployeeNo:4, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2828',    },
  //     {empEmployeeNo:5, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2272',    },
  //     {empEmployeeNo:6, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2292',    },
  //     {empEmployeeNo:7, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2022',    },
  //     {empEmployeeNo:8, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2828',    },
  //     {empEmployeeNo:9, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2982',    },
  //     {empEmployeeNo:10, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2982',   },
  //     {empEmployeeNo:11, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$9282',   },
  //     {empEmployeeNo:12, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$9292',   },
  //     {empEmployeeNo:13, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$8762',   },
  //     {empEmployeeNo:14, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$7222',   },
  //     {empEmployeeNo:15, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$8272',   },
  //     {empEmployeeNo:16, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$8278',   },
  //     {empEmployeeNo:17, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$8222',   },
  //     {empEmployeeNo:18, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$9282',   },
  //     {empEmployeeNo:19, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$9282',   },
  //     {empEmployeeNo:20, empFIRSTNAME:'channu', empLASTNAME:'praveen', empTOTALOPERATIONALEXPENSES:'$2922',   },

  // ]

  subscription!: Subscription;

  constructor(private http: HttpService) {}

  ngOnInit(): void {
    this.operationalaccessdata();
  }

  operationalaccessdata() {
    this.subscription = this.http.getData('operationalaccess').subscribe({
      next: (data: any) => {
        this.employees = data.result as IEmployee[];
      },
      error: (reason) => console.log(reason),
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
