//core
import {Component, OnInit} from '@angular/core';
//forms
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpRequestsService} from "../../../../core/services/http-requests.service";
import {HttpRequestData} from "../../../../data/modals/httpRequestData";
import {NzMessageService} from "ng-zorro-antd/message";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {

  //initialize form variable
  customerDetailsForm: FormGroup | any;

  //customer list
  listOfData: any[] = []

  //search value
  searchValue: any = null


  confirmModal?: NzModalRef;

  constructor(
    private formBuilder: FormBuilder,
    private httpService: HttpRequestsService,
    private message: NzMessageService,
    private modal: NzModalService
  ) {
    this.initializeForm()
  }

  ngOnInit() {
    this.getCustomerDetails()
  }

  //for initialize form
  initializeForm() {
    this.customerDetailsForm = this.formBuilder.group({
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      Email: ['', Validators.required]
    });
  }

  //access form controllers in any where
  get form() {
    return this.customerDetailsForm.controls
  }

  getCustomerDetails() {
    let data: HttpRequestData = {
      URL: 'https://api-generator.retool.com/iwafyx/customer',
      DATA: null,
      TYPE: 'GET',
      VARIABLES: null,
    }
    this.httpService.request(data).subscribe(res => {
      console.log(res)
      if (res != null) {
        this.listOfData = res
        this.listOfData.sort((a, b) => b.id - a.id)
      }
    });
  }

  getCustomersByName(value: string) {
    let data: HttpRequestData = {
      URL: 'https://api-generator.retool.com/iwafyx/customer',
      DATA: null,
      TYPE: 'GET',
      VARIABLES: null,
    }
    if (value != '' && value != null) {
      data.DATA = {
        key: 'FirstName',
        value: value,
      }
    }
    this.httpService.request(data).subscribe(res => {
      this.listOfData = res
      this.listOfData.sort((a, b) => b.id - a.id)
    })
  }

  saveCustomer() {
    this.customerDetailsForm.markAllAsTouched()
    if (this.customerDetailsForm.valid) {
      let data: HttpRequestData = {
        URL: 'https://api-generator.retool.com/iwafyx/customer',
        DATA: this.customerDetailsForm.value,
        TYPE: 'POST',
        VARIABLES: null,
      }
      this.httpService.request(data).subscribe(res => {
        if (res != null) {
          this.createMessage('customer added success', 1)
          this.reFreshPage()
        }
      })
    }
  }

  verifyDelete(id:any) {
    this.confirmModal = this.modal.error({
      nzTitle: 'Do you Want to delete these item',
      nzContent: 'When clicked the OK button, this item will be delete from database',
      nzOnOk: () =>this.deleteCustomer(id)
    });
  }

  deleteCustomer(id: any) {
    let data: HttpRequestData = {
      URL: 'https://api-generator.retool.com/iwafyx/customer',
      DATA: null,
      TYPE: 'PUT',
      VARIABLES: id,
    }
    this.httpService.request(data).subscribe(res => {
      if (res!=null){
        this.createMessage('customer delete succeeded',2);
        this.reFreshPage();
      }
    })
  }

  reFreshPage() {
    this.getCustomerDetails()
    this.customerDetailsForm.reset()
  }

  createMessage(msg: string, type: number): void {
    if (type == 1) {
      this.message.success(msg);
    } else if (type === 2) {
      this.message.error(msg);
    }
  }

}
