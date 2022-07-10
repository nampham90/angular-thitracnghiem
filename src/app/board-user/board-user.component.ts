import { Component, OnInit,ViewChild,HostListener  } from '@angular/core';
import { UserService } from '../_services/user.service';
import { MatSidenav } from '@angular/material/sidenav';
import {TrinhdoserviceService} from "../_services/trinhdoservice.service";
import {ActivatedRoute} from "@angular/router"
import { MatGridTileHeaderCssMatStyler } from '@angular/material/grid-list';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {

  rows:any=[];
  id:any;

  constructor(
    private userService: UserService,
    private trinhdoService: TrinhdoserviceService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {

    this.trinhdoService.getListTrinhdo().subscribe({
        next: (v) => {
          this.rows=v;
          console.log(v);
        },
        error: (e) => console.error(e),
        complete: () => console.info('complete') 
      }
    )

  }
}
