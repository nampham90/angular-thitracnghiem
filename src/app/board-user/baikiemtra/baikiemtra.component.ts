import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaiKiemTra } from "../../model/baikiemtra";
import { Router,ParamMap,ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-baikiemtra',
  templateUrl: './baikiemtra.component.html',
  styleUrls: ['./baikiemtra.component.css']
})
export class BaikiemtraComponent implements OnInit {
  


  name:any;

  id:any;

  constructor(
    private formBuider:FormBuilder,
    private route : ActivatedRoute
    
    ) { }

  ngOnInit(): void {
   
    const params = this.route.snapshot.paramMap;
    this.id = params.get('id');

  }

 



  



}
