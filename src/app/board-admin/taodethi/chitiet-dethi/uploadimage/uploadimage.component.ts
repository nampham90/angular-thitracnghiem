import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  selector: 'app-uploadimage',
  templateUrl: './uploadimage.component.html',
  styleUrls: ['./uploadimage.component.css']
})
export class UploadimageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }
  tiles: Tile[] = [
    { text: 'One', cols: 2, rows: 2, color: 'lightblue' },
    { text: 'Two', cols: 2, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 2, rows: 2, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 2, color: '#DDBDF1' },
  ];


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

  public onImageUpload1(event) {
    let image: File;
    const index = this.uploadedImage.indexOf(this.tempImage1);
    if (index > -1) { // only splice array when item is found
      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.uploadedImage.push(event.target.files[0]);
    this.tempImage1 = event.target.files[0];
    image = event.target.files[0];

    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview1 = e.target.result;
    };

    reader.readAsDataURL(image);
  }

  public onImageUpload2(event) {
    let image: File;
    const index = this.uploadedImage.indexOf(this.tempImage2);
    if (index > -1) { // only splice array when item is found
      this.uploadedImage.splice(index, 1); // 2nd parameter means remove one item only
    }
    this.uploadedImage.push(event.target.files[0]);
    this.tempImage2 = event.target.files[0];
    image = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      console.log(e.target.result);
      this.preview2 = e.target.result;
    };

    reader.readAsDataURL(image);
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
  }


  imageUploadAction() {
    let uploadedImage1: File[] = this.uploadedImage
    console.log("this  " + this.uploadedImage);
    const imageFormData = new FormData();
    this.uploadedImage.forEach(image => {
      imageFormData.append('image', image, image.name)
    })
    // const imageFormData = new FormData();
    // imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    //imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);


    // this.httpClient.post('http://localhost:8080/upload/image/', imageFormData, { observe: 'response' })
    //   .subscribe((response) => {
    //     if (response.status === 200) {
    //       this.postResponse = response;
    //       this.successResponse = this.postResponse.body.message;
    //     } else {
    //       this.successResponse = 'Image not uploaded due to some error!';
    //     }
    //   }
    //   );
  }
  dbImage1: any;
  dbImage2: any;



  viewImage() {
    this.httpClient.get('http://localhost:8080/get/image/info/' + this.image)
      .subscribe((response) => {
        this.postResponse = response;
        this.dbImage = 'data:image/jpeg;base64,' + this.postResponse[0].image;
        //           var uri = URL.createObjectURL(this.postResponse);
        //          // this.dbImage2 = uri;
        // var img = new Image();

        // img.src = uri;
        // document.getElementById("abc").appendChild(img);

        //           this.blobToImage(this.postResponse);
        //           let mySrc;
        //           const reader = new FileReader();
        //           reader.readAsDataURL(this.postResponse);
        //           reader.onloadend = function() {
        //              // result includes identifier 'data:image/png;base64,' plus the base64 data
        //              mySrc = reader.result;
        //           }
        //           this.dbImage2 = mySrc;
        //  this.dbImage1 = 'data:image/jpeg;base64,' + this.postResponse;

        //     this.dbImage2 = 'data:image/jpeg;base64,' + this.postResponse[1].image;

        // this.dbImage = 'data:image/jpeg;base64,' + this.postResponse.image;
        //    console.log("image "+this.postResponse.image);
      }
      );
  }


  blobToImage(blob) {
    return new Promise(resolve => {
      const url = URL.createObjectURL(blob)
      let img = new Image()
      img.onload = () => {
        URL.revokeObjectURL(url)
        resolve(img)
      }
      this.dbImage2 = url
    })
  }

  fnloadedImage($event: any) {
    this.uploadedImage = $event.uploadedImage
  }


}
