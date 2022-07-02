import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BaiKiemTra } from "../../model/baikiemtra";

@Component({
  selector: 'app-baikiemtra',
  templateUrl: './baikiemtra.component.html',
  styleUrls: ['./baikiemtra.component.css']
})
export class BaikiemtraComponent implements OnInit {
  
  BaiKiemTraValue!: FormGroup;

  btnSaveShow:boolean=true;

  btnUpdateShow:boolean=false;

  baikiemtraojb: BaiKiemTra =new BaiKiemTra;

  constructor(private formBuider:FormBuilder) { }

  ngOnInit(): void {
    this.BaiKiemTraValue=this.formBuider.group({
        iddethi: ['',Validators.required],
        trinhdo: ['',Validators.required],
        diem: ['',Validators.required]

    })
  }

  AddBaikiemtra(){

     this.baikiemtraojb.IDTheThi=this.BaiKiemTraValue.value.iddethi;
     this.baikiemtraojb.TrinhDo=this.BaiKiemTraValue.value.trinhdo;
     this.baikiemtraojb.Diem=this.BaiKiemTraValue.value.diem;

     console.log(this.baikiemtraojb);

  }

  UpdateBaiKiemtra(){
     
  }


  DeleteBaikiemtra(){
    
  }

  SaveBaikiemtra(){
     this.SaveShowBtn();
  }

  
  EditBaikiemtra(){
     
     this.UpdateShowBtn();
  }

  UpdateShowBtn()
  {
    this.btnUpdateShow = true;
    this.btnSaveShow = false;
  }
  SaveShowBtn()
  {
    this.btnUpdateShow = false;
    this.btnSaveShow = true;
  }


}
