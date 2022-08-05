import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DethiserviceService } from 'src/app/_services/dethiservice.service';

import { TrinhdoserviceService } from "../../_services/trinhdoservice.service"

export interface dethi {
  id: string;
  tendethi: string;
  thoigian: number;
  trinhdo: string;
  trangthai: number;
}

export interface trinhdo {
  id: number;
  name: string
}

@Component({
  selector: 'app-taodethi',
  templateUrl: './taodethi.component.html',
  styleUrls: ['./taodethi.component.css']
})
export class TaodethiComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tendethi', 'thoigian', 'trinhdo', 'trangthai'];
  TD: string[] = ['N1', 'N2', 'N3', 'N4', 'N5',];
  dataSource: MatTableDataSource<dethi>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  lDethi: dethi[] = [];
  list_trinh_do: trinhdo[] = []
  formTaodethi: FormGroup = new FormGroup({
    tendethi: new FormControl(''),
    thoigianthi: new FormControl(''),
    trinhdo: new FormControl('')
  });

  submited = false;

  constructor(
    private fb: FormBuilder,
    private trinhDoService: TrinhdoserviceService,
    private dethiservice: DethiserviceService,
    private router: Router

  ) {
    // for (let i = 1; i <= 150; i++) {
    //   const Dethi = this.createNewDethi(i);
    //   this.lDethi.push(Dethi);
    // }
    this.getListTrinhDo();
    this.getListDeThi();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
    this.formTaodethi = this.fb.group({
      tendethi: ['', Validators.required],
      thoigianthi: ['', Validators.required],
      trinhdo: ['', Validators.required]
    })
  }

  get f(): { [key: string]: AbstractControl } {
    return this.formTaodethi.controls;
  }

  dethiDto = []
  onSubmit() {
    let dethiDto1 = {
      tendethi: this.formTaodethi.value.tendethi,
      thoigianthi: this.formTaodethi.value.thoigianthi,
      trinhdo: {
        id: this.formTaodethi.value.trinhdo,
        name: this.list_trinh_do.find((item) => { if (item.id == this.formTaodethi.value.trinhdo) { return item.name } }).name
      },
      trangthai: "Đang cập nhật"
    }

    this.dethiservice.insertDethi(dethiDto1).subscribe(
      data => {

        console.log("data sau khi insert: " + data);
      },
      err => {
        console.log("Loi insert: " + err);
      }
    );
    console.log(dethiDto1);
  }

  getListTrinhDo() {

    this.trinhDoService.getListTrinhdo().subscribe((data) => {
      this.list_trinh_do = data;
    }, (err) => {
      console.log(err);

    })
  }

  fnClear() {
    this.formTaodethi.reset();
  }
  getListDeThi() {
    this.dethiservice.getAllDethi().subscribe((data) => {
      if (data) {
        this.lDethi = data
      } else {
        this.lDethi = []
      }
      this.dataSource = new MatTableDataSource(this.lDethi);
    }, (err) => {
      console.log(err)
    })
  }
  fnDetail(id: number) {
    console.log("detail" + id);
    this.router.navigate(['admin/dethi', id]);
  }
}
