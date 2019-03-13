import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { ServiceService } from "../service.service"
import { from } from 'rxjs';
import { Router,NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private router: Router,private rootService: ServiceService) { }
  datavalue


  passData(val) {
    console.log(val)
    localStorage.setItem("value", JSON.stringify(val))
    console.log(localStorage)
     this.router.navigate(['/details']);
  }



  ngOnInit() {
    var config = {
      name: 11
    }
    this.rootService.getAPIData().subscribe((response) => {
      console.log(response)
      this.datavalue = response
    }, (error) => {
      console.log('error is ', error)
    })

    this.rootService.postAPIData(config).subscribe((response) => {
      console.log(response)
    }, (error) => {
      console.log('error is ', error)
    })
  }

}
