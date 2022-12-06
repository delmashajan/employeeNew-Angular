import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  name=""
  empcode=""
  designation=""
  salary=""
  companyname=""
  mobileno=""
  username=""
  password=""

  readValue=()=>{
    let data:any={"name":this.name,"empcode":this.empcode,"designation":this.designation,"salary":this.salary,"companyname":this.companyname
  ,"mobileno":this.mobileno,"username":this.username,"password":this.password}
  console.log(data)
  }


}
