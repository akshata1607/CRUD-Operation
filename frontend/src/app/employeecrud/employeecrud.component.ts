import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.scss']
})
export class EmployeecrudComponent {
  empArray: any[] = [];
  currentEmpID = '';
  name: string = '';
  address: string = '';
  phone: string = '';

  constructor(private userService: UserService) {
    this.getAllEmployee();
  }

  getAllEmployee() {
    this.userService.getEmp().subscribe((res: any) => {
      console.log(res);
      this.empArray = res.data; // Make sure the response structure matches this assignment
    });
  }

  setUpdate(data: any) {
    this.name = data.name;
    this.address = data.address;
    this.phone = data.phone;
    this.currentEmpID = data._id;
  }

  UpdateRecords() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.userService.updateEmp(this.currentEmpID, bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Employee Updated');
      this.getAllEmployee();
    });
  }

  setDelete(data: any) {
    this.userService.deleteEmp(data._id).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Employee Deleted');
      this.getAllEmployee();
    });
  }

  save() {
    if (this.currentEmpID === '') {
      this.register();
    } else {
      this.UpdateRecords();
    }
  }

  register() {
    let bodyData = {
      name: this.name,
      address: this.address,
      phone: this.phone,
    };

    this.userService.createEmp(bodyData).subscribe((resultData: any) => {
      console.log(resultData);
      alert('Employee Registered Successfully');
      this.name = '';
      this.address = '';
      this.phone = '';
      this.getAllEmployee();
    });
  }
}
