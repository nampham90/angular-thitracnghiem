import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html'
})
export class UploadImageComponent {
  uploadedImage: File[] = [];
  dbImage: any;
  postResponse: any;
  successResponse: string;
  image: any;
  preview1: any = "";
  preview2: any = "";
  preview3: any = "";
  preview4: any = "";
  tempImage1: File;
  tempImage2: File;
  tempImage3: File;
  tempImage4: File;
  @Input() rowspan: any;
  @Input() colspan: any;
  @Input() cauhoi: any;
  @Output() loadedImageChange = new EventEmitter();

  // public onImageUpload1(event) {
  //   let image : File;
  //   const index = this.uploadedImage.indexOf(this.tempImage1);
  //   if (index > -1) { // only splice array when item is found
  //      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
  //   }
  //   this.uploadedImage.push(event.target.files[0]);
  //   this.tempImage1 = event.target.files[0];
  //   image = event.target.files[0];

  //   const reader = new FileReader();

  //   reader.onload = (e: any) => {
  //     console.log(e.target.result);
  //     this.preview1 = e.target.result;
  //   };

  //   reader.readAsDataURL(image);
  //   this.loadedImageChange.emit(this.uploadedImage);
  // }

  public onImageUpload1(event) {
    let image: File;
    const index = this.uploadedImage.indexOf(this.tempImage1);
    if (index > -1) { // only splice array when item is found
      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    let uploadedImage: File = event.target.files[0]
    // this.uploadedImage.push(event.target.files[0]);
    this.tempImage1 = event.target.files[0];
    image = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview1 = e.target.result;
    };

    reader.readAsDataURL(image);
    var data = {
      cauhoi: this.cauhoi,
      image1: uploadedImage
    }
    this.loadedImageChange.emit(data);
  }

  public onImageUpload2(event) {
    let image: File;
    const index = this.uploadedImage.indexOf(this.tempImage2);
    if (index > -1) { // only splice array when item is found
      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    let uploadedImage: File = event.target.files[0]
    //this.uploadedImage.push(event.target.files[0]);
    this.tempImage2 = event.target.files[0];
    image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview2 = e.target.result;
    };

    reader.readAsDataURL(image);
    var data = {
      cauhoi: this.cauhoi,
      image1: uploadedImage
    }
    this.loadedImageChange.emit(data);
  }

  public onImageUpload3(event) {
    let image: File;
    const index = this.uploadedImage.indexOf(this.tempImage3);
    if (index > -1) { // only splice array when item is found
      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.uploadedImage.push(event.target.files[0]);
    this.tempImage3 = event.target.files[0];
    image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview3 = e.target.result;
    };

    reader.readAsDataURL(image);
    this.loadedImageChange.emit(this.uploadedImage);
  }

  public onImageUpload4(event) {
    let image: File;
    const index = this.uploadedImage.indexOf(this.tempImage4);
    if (index > -1) { // only splice array when item is found
      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.uploadedImage.push(event.target.files[0]);
    this.tempImage4 = event.target.files[0];
    image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview4 = e.target.result;
    };

    reader.readAsDataURL(image);
    this.loadedImageChange.emit(this.uploadedImage);
  }
}
