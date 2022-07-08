import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
export interface cauhoi_traloi {
  id: number;
  cauhoi: string;
  traloi: any;
  dapan: number
}
@Component({
  selector: 'app-chitiet-dethi',
  templateUrl: './chitiet-dethi.component.html',
  styleUrls: ['./chitiet-dethi.component.css']
})
export class ChitietDethiComponent implements OnInit {

  id: any;
  data: any;
  listtcauhoi_phan1_part1: cauhoi_traloi[] = []
  listtcauhoi_phan1_part2: cauhoi_traloi[] = []
  listtcauhoi_phan1_part3: cauhoi_traloi[] = []
  constructor(
    private activateRouter: ActivatedRoute,
    private storageservice: TokenStorageService
  ) {
    for (let i = 1; i <= 30; i++) {
      const row = this.create_cauhoi_dapan(i);
      if (i <= 10) {
        this.listtcauhoi_phan1_part1.push(row)
      } else if (i <= 20) {
        this.listtcauhoi_phan1_part2.push(row)
      } else {
        this.listtcauhoi_phan1_part3.push(row)
      }
    }


  }

  ngOnInit(): void {
    this.id = this.activateRouter.snapshot.params.id;
    this.data = this.storageservice.getUser();
    //this.getListDethi(this.id,this.data);

  }

  create_cauhoi_dapan(id: number): cauhoi_traloi {
    return {
      id: id,
      cauhoi: "Câu hỏi " + id + " có nội dung là: ...",
      traloi: ["Trả lời 1", "Trả lời 2", "Trả lời 3", "Trả lời 4"],
      dapan: 1
    }
  }



}
