import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searc-employee',
  templateUrl: './searc-employee.component.html',
  styleUrls: ['./searc-employee.component.css']
})
export class SearcEmployeeComponent {

  constructor(private api:ApiService){}
  

  empcode=""

  searchEmployee:any=[]

  readValue=()=>{
    let data:any ={
      "empcode":this.empcode}
  
  console.log(data)
  this.api.searchEmployee(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("Invalid empcode")
        
      } else {
        this.searchEmployee=response
        
      }
    }
  )
  }
  deleteBtnClick=(id:any)=>{
    let data:any={"id":id}
    this.api.deleteEmployee(data).subscribe(
      (response:any)=>{
        console.log(response)
        if(response.status=="success"){
          alert("deleted successfully")
          this.searchEmployee=[]
        }else{
          alert("something went wrong")
        }
        
      }
    )
  }

  

}
