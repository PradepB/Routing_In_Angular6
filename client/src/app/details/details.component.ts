import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import * as $ from 'jquery'
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  constructor(private router: Router) { }
selectedDocument=[]
  ngOnInit() {
    let myItem = localStorage.getItem("value");
    this.selectedDocument.push(JSON.parse(myItem))
    console.log(this.selectedDocument)
 
  }
  
clearrecord(){
  
  localStorage.clear()
  console.log(localStorage)
     this.router.navigate(['/']);
}
}
