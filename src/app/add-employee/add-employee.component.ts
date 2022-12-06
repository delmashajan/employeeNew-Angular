import { Component } from '@angular/core';
import { ApiService } from '../api.service';

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

  constructor(private api:ApiService){}

  readValue=()=>{
    let data:any={"name":this.name,"empcode":this.empcode,"designation":this.designation,"salary":this.salary,"companyname":this.companyname
  ,"mobileno":this.mobileno,"username":this.username,"password":this.password}
  console.log(data)

    this.api.addEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("success")
          this.name=""
          this.designation=""
          this.companyname=""
          this.empcode=""
          this.mobileno=""
          this.salary=""
          this.username=""
          this.password=""
        }else{
          alert("wrong")
        }
      }
    )
  }


}
