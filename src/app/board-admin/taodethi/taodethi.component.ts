import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { TrinhdoserviceService } from "../../_services/trinhdoservice.service"

export interface dethi {
  id: string;
  tendethi: string;
  thoigian: number;
  trinhdo: string;
  trangthai: number;
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

  formTaodethi: FormGroup = new FormGroup({
    tendethi: new FormControl(''),
    thoigianthi: new FormControl(''),
    trinhdo: new FormControl('')
  });

  submited = false;

  constructor(
    private fb: FormBuilder,
    private trinhDoService: TrinhdoserviceService,
    private router: Router

  ) {
    for (let i = 1; i <= 150; i++) {
      const Dethi = this.createNewDethi(i);
      this.lDethi.push(Dethi);
    }
    this.dataSource = new MatTableDataSource(this.lDethi);
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

  onSubmit() {
    let data = {
      tendethi: this.formTaodethi.value.tendethi,
      thoigianthi: this.formTaodethi.value.thoigianthi,
      trinhdo: this.formTaodethi.value.trinhdo
    }
    console.log(data);
  }
  createNewDethi(id: number): dethi {
    const trdo = this.TD[Math.round(Math.random() * (this.TD.length - 1))]
    return {
      id: id.toString(),
      tendethi: "Đề thì trình độ " + trdo,
      thoigian: 60,
      trinhdo: trdo,
      trangthai: 0
    }
  }

  changeLoading() {

    this.trinhDoService.getDatatest().subscribe((data) => {
      console.log(data);
    }, (err) => {
      console.log(err);

    })
  }
  fnDetail(id: number) {
    console.log("detail" + id);
    this.router.navigate(['admin/dethi', id]);
  }
}
