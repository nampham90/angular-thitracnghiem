import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { TaoDeThiRoutingModule } from "./taodethi.router";
import { ChitietDethiComponent } from './chitiet-dethi/chitiet-dethi.component';
import { MaterialModule } from "src/app/material.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "src/app/app-routing.module";
import { AdminModule } from "../admin.module";
import { UploadImageComponent } from "./chitiet-dethi/uploadimage/uploadimage.component";
import { SentencesComponent } from "./chitiet-dethi/sentences/sentences.component";

@NgModule({
  declarations: [
    ChitietDethiComponent,
    UploadImageComponent,
    SentencesComponent
  ],
  imports: [
    CommonModule,
    TaoDeThiRoutingModule,
    MaterialModule,
    AppRoutingModule,
    AdminModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ]
})
export class TaoDeThiModule { }
