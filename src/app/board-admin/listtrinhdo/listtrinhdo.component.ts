import { Component, OnInit } from '@angular/core';
import {TrinhdoserviceService} from '../../_services/trinhdoservice.service';
import {TokenStorageService} from '../../_services/token-storage.service'

@Component({
  selector: 'app-listtrinhdo',
  templateUrl: './listtrinhdo.component.html',
  styleUrls: ['./listtrinhdo.component.css']
})
export class ListtrinhdoComponent implements OnInit {

  list:[];

  constructor(
    private listtrinhdo: TrinhdoserviceService,
    private tokenstorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.getListTrinhdo();
  }

  getListTrinhdo(){
    //  if(this.tokenstorage.getUser()){
    //      this.listtrinhdo.getListTrinhdo(this.tokenstorage.getUser())
    //         .subscribe(res=>{
    //            this.list=res;
    //            console.log(this.list);
    //         },err=>{
    //           console.log(err);
    //         });
    //  }
  }

}
