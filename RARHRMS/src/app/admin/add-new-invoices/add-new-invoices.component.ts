import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-invoices',
  templateUrl: './add-new-invoices.component.html',
  styleUrls: ['./add-new-invoices.component.css']
})
export class AddNewInvoicesComponent implements OnInit {


  afuConfig = {
    maxSize : 30,
    multiple: false,
    formatsAllowed: ".jpg,.png",
    uploadAPI: {
      url:"https://example-file-upload-api"
    }
};

  constructor() { }

  ngOnInit(): void {
  }

}
