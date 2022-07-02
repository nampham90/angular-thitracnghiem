import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {LoadingService} from '../_services/loading.service'
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  isLoadding = false;
  constructor(
    private loadingService:LoadingService,
    private cdRef: ChangeDetectorRef
  ) { 
    
  }

  ngOnInit(): void {
    this.init();
  }

  init(){
    this.loadingService.getLoaddingObserver().subscribe((status)=>{
      this.isLoadding = (status === 'start');
      this.cdRef.detectChanges();
    })
  }

}
