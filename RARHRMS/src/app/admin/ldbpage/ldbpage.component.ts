import { HttpClient, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Papa } from 'ngx-papaparse';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

// import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ldbpage',
  templateUrl: './ldbpage.component.html',
  styleUrls: ['./ldbpage.component.css'],
})
export class LdbpageComponent implements OnInit, OnDestroy {
  ldb = ({} as any) || null;
  fileToUpload: File | null = null;
  selectedFile?: FileList | any;
  currentFile?: File;
  filename = {} as any;
  fileContent = [] as any;
  parsed = false as boolean;
  validate_message!: string;
  subscription!: Subscription;
  insertmessage: any;

  constructor(private http: HttpService, private _papa: Papa) {}

  ngOnInit(): void {}

  selectFile(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
    this.parseFile();
  }

  parseFile() {
    this._papa.parse(this.selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (results: any) => {
        this.fileContent = results;
        console.log(this.fileContent);
        this.parsed = true;
      },
    });
  }

  load(F: NgForm) {
    if (!this.filename && !this.fileContent.data) {
      this.validate_message = 'Please Select File Name  and choose file';
    } else if (!this.filename) {
      this.validate_message = 'Please Select File Name';
    } else if (!this.fileContent.data) {
      this.validate_message = 'Choose File ';
    } else if (this.filename && this.fileContent.data.length > 0) {
      this.submitUpdates();
      F.resetForm();
    }
  }

  submitUpdates() {
    var data;
    if (this.filename == '0') {
      console.log('client data');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].clientcode = parseInt(data[i].clientcode);
        data[i].taxfederal = parseInt(data[i].taxfederal);
      }
    }
    if (this.filename == '1') {
      console.log('payroll');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].employeeid = parseInt(data[i].employeeid);
        data[i].noofhours = parseInt(data[i].noofhours);
        data[i].payrate = parseInt(data[i].payrate);
        data[i].grosspay = parseInt(data[i].grosspay);
        data[i].payrollexpense = parseInt(data[i].payrollexpense);
        data[i].insurancebycompany = parseInt(data[i].insurancebycompany);
        data[i].totalpayroll = parseInt(data[i].totalpayroll);
        data[i].createdby = parseInt(data[i].createdby);
        data[i].updatedby = parseInt(data[i].updatedby);
      }
    }
    if (this.filename == '2') {
      console.log('time sheet');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].employeeid = parseInt(data[i].employeeid);
        data[i].clientid = parseInt(data[i].clientid);
        data[i].noofhours = parseInt(data[i].noofhours);
        data[i].payrate = parseInt(data[i].payrate);
        data[i].revenuerate = parseInt(data[i].revenuerate);
        data[i].operationalcost = parseInt(data[i].operationalcost);
        data[i].receivables = parseInt(data[i].receivables);
        data[i].createdby = parseInt(data[i].createdby);
        data[i].updatedby = parseInt(data[i].updatedby);
      }
    }
    if (this.filename == '3') {
      console.log('management expenses');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].employeeid = parseInt(data[i].employeeid);
        data[i].amount = parseInt(data[i].amount);
        data[i].approvedby = parseInt(data[i].approvedby);
        data[i].createdby = parseInt(data[i].createdby);
      }
    }
    if (this.filename == '4') {
      console.log('employee data');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].employeeid = parseInt(data[i].employeeid);
        data[i].supervisor = parseInt(data[i].supervisor);
        data[i].contactnumber = parseInt(data[i].contactnumber);
      }
    }
    if (this.filename == '5') {
      console.log('employee expenses');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].employeeid = parseInt(data[i].employeeid);
        data[i].clientcode = parseInt(data[i].clientcode);
        data[i].amount = parseInt(data[i].amount);
        data[i].approvedby = parseInt(data[i].approvedby);
        data[i].createdby = parseInt(data[i].createdby);
        data[i].updatedby = parseInt(data[i].updatedby);
      }
    }

    if (this.filename == '6') {
      console.log('immigration expenses');
      data = this.fileContent.data;
      for (var i = 0; i < data.length; i++) {
        data[i].employeeid = parseInt(data[i].employeeid);
        data[i].amount = parseInt(data[i].amount);
        data[i].approvedby = parseInt(data[i].approvedby);
        data[i].createdby = parseInt(data[i].createdby);
        data[i].updatedby = parseInt(data[i].updatedby);
      }
    }
    console.log(data);
    let sdata = {
      FileUploadData: data,
      filename: this.filename,
      FileData: data,
    };
    console.log(sdata);
    this.subscription = this.http.postdata('fileupload', sdata).subscribe({
      next: (data: any) => {
        console.log(data);
        this.fileContent.data = data.duplicaterecords;
        this.insertmessage = data.message;
        //  alert(this.insertmessage);
        this.validate_message = '';
      },
      error: (reaso) => console.log(reaso),
    });
  }
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
