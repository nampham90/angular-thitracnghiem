
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DethiserviceService} from '../../../_services/dethiservice.service'
import { TokenStorageService} from '../../../_services/token-storage.service'

@Component({
  selector: 'app-listtheotrinhdo',
  templateUrl: './listtheotrinhdo.component.html',
  styleUrls: ['./listtheotrinhdo.component.css']
})
export class ListtheotrinhdoComponent implements OnInit {
  id:any;
  data:any;
  constructor(
    private activateRouter: ActivatedRoute,
    private dethiservice: DethiserviceService,
    private storageservice: TokenStorageService
  ) { }

  ngOnInit(): void {
    this.id=this.activateRouter.snapshot.params.id;
    this.data= this.storageservice.getUser();
    this.getListDethi(this.id,this.data);
    
  }
  getListDethi(id:any,data:any){
     this.dethiservice.getListDethitheoTrinhdo(data,id).subscribe(res=>{
        console.log(res);
     },err=>{
        console.log(err);
     });
  }

}
