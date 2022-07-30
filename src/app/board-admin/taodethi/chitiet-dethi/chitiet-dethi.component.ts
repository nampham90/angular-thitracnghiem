import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { Observable } from 'rxjs';
export interface cauhoi_traloi {
  id: number;
  cauhoi: string;
  traloi: any;
  dapan: number
}

export interface doanvan_dien_cho_trong {
  id: number;
  doanvan: string;
  traloi: any;
  dapan: number
}

export interface doanvan_chondapan {
  id: number;
  doanvan: string;
  cauhoi: string;
  traloi: any;
  dapan: number
}

export interface doanvan_chondapan2 {
  id: number;
  doanvan: string;
  cauhoi: any;
  traloi: any;
  dapan: number
}

@Component({
  selector: 'app-chitiet-dethi',
  templateUrl: './chitiet-dethi.component.html',
  styleUrls: ['./chitiet-dethi.component.css']
})
export class ChitietDethiComponent implements OnInit {
  vidumodel: string = ""
  id: any;
  data: any;
  listtcauhoi_phan1_part1: cauhoi_traloi[] = []
  listtcauhoi_phan1_part2: cauhoi_traloi[] = []
  listtcauhoi_phan1_part3: cauhoi_traloi[] = []
  listtcauhoi_phan2_part1: cauhoi_traloi[] = []
  listtcauhoi_phan2_part2: cauhoi_traloi[] = []
  listtcauhoi_phan2_part3: doanvan_dien_cho_trong[] = []
  listtcauhoi_phan2_part4: doanvan_chondapan[] = []
  listtcauhoi_phan2_part5: doanvan_chondapan[] = []
  title = 'angular-material-file-upload-app';
  uploadedImage: File[] = [];
  emp: any = new Object;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef;
  myfilename = 'Select File';

  doanvan_otrong = "Trang web này phù hợp với các bạn thành thạo __(1)__ và muốn nâng cao năng lực đọc hiểu tiếng Nhật của bản thân. Nội dung vô cùng gần gũi - chủ yếu viết về cuộc sống thường ngày tại Nhật Bản."
    + "Điểm cộng của trang web này đó là các bài viết đều chứa đoạn văn __(2)__t bằng chữ Hán kèm theo phần phiên dịch furigana và dịch tiếng Anh ở ngay bên dưới."
    + "Người đọc có thể lựa chọn hiển thị hoặc tắt phần __(3)__ đi nếu đã tự tin vào trình độ tiếng Nhật của bản thân."
    + "Matcha không chỉ giúp bạn cải thiện rõ rệt trình độ đọc hiểu mà quan trọng hơn còn cung cấp rất nhiều thông tin bổ ích về văn hóa, du lịch cho người học."
    + "Trang web có cập nhật các bài đăng liên tục, hỗ trợ tới 8 __(4)__ khác nhau, trong đó có tiếng Việt. Ngoài ra còn có phần bài đăng easy Japanese, sử dụng Kanji và kèm theo phiên âm furigana."
    + "Để học tập hiệu quả hơn, các bạn nên tự đọc bằng __(5)__ sau đó dịch thửm cuối cùng check lại bản tiếng Việt để đánh giá có bao nhiêu phần dịch chính xác.";

  doanvan = "Trang web này phù hợp với các bạn thành thạo và muốn nâng cao năng lực đọc hiểu tiếng Nhật của bản thân. Nội dung vô cùng gần gũi - chủ yếu viết về cuộc sống thường ngày tại Nhật Bản."
    + "Điểm cộng của trang web này đó là các bài viết đều chứa đoạn văn t bằng chữ Hán kèm theo phần phiên dịch furigana và dịch tiếng Anh ở ngay bên dưới."
    + "Người đọc có thể lựa chọn hiển thị hoặc tắt phầnđi nếu đã tự tin vào trình độ tiếng Nhật của bản thân."
    + "Matcha không chỉ giúp bạn cải thiện rõ rệt trình độ đọc hiểu mà quan trọng hơn còn cung cấp rất nhiều thông tin bổ ích về văn hóa, du lịch cho người học."
    + "Trang web có cập nhật các bài đăng liên tục, hỗ trợ tới 8 khác nhau, trong đó có tiếng Việt. Ngoài ra còn có phần bài đăng easy Japanese, sử dụng Kanji và kèm theo phiên âm furigana."
    + "Để học tập hiệu quả hơn, các bạn nên tự đọc bằng sau đó dịch thửm cuối cùng check lại bản tiếng Việt để đánh giá có bao nhiêu phần dịch chính xác.";
  constructor(
    private activateRouter: ActivatedRoute,
    private storageservice: TokenStorageService
  ) {
    for (let i = 1; i <= 30; i++) {
      const row = this.create_cauhoi_dapan(i)
      if (i <= 10) {
        this.listtcauhoi_phan1_part1.push(row)
      } else if (i <= 20) {
        this.listtcauhoi_phan1_part2.push(row)
      } else {
        this.listtcauhoi_phan1_part3.push(row)
      }
    }

    // cau hoi phan 2 part 1
    for (let i = 1; i <= 15; i++) {
      const row = this.create_cauhoi_dapan(i)
      this.listtcauhoi_phan2_part1.push(row)
    }

    // cau hoi phan 2 part 2
    for (let i = 1; i <= 5; i++) {
      const row = this.create_cauhoi_dapan(i)
      this.listtcauhoi_phan2_part2.push(row)
    }

    // cau hoi phan 2 part 3
    this.listtcauhoi_phan2_part3.push(this.create_doanvan_dien_o_trong(3))

    //cau hoi phan 2 part 4
    for (let i = 1; i <= 4; i++) {
      const row = this.create_doanvan_chondapan(i)
      this.listtcauhoi_phan2_part4.push(row)
    }

    // cau hoi phan 2 part 5
    this.listtcauhoi_phan2_part5.push(this.create_doanvan_chondapan2(1))

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

  create_doanvan_dien_o_trong(id: number): doanvan_dien_cho_trong {
    return {
      id: id,
      doanvan: this.doanvan_otrong,
      traloi: [
        ["Đáp án 1 cho ô trống 1", "Đáp án 2 cho ô trống 1", "Đáp án 3 cho ô trống 1", "Đáp án 4 cho ô trống 1"],
        ["Đáp án 1 cho ô trống 2", "Đáp án 2 cho ô trống 2", "Đáp án 3 cho ô trống 2", "Đáp án 4 cho ô trống 2"],
        ["Đáp án 1 cho ô trống 3", "Đáp án 2 cho ô trống 3", "Đáp án 3 cho ô trống 3", "Đáp án 4 cho ô trống 3"],
        ["Đáp án 1 cho ô trống 4", "Đáp án 2 cho ô trống 4", "Đáp án 3 cho ô trống 4", "Đáp án 4 cho ô trống 4"],
        ["Đáp án 1 cho ô trống 5", "Đáp án 2 cho ô trống 5", "Đáp án 3 cho ô trống 5", "Đáp án 4 cho ô trống 5"]
      ],
      dapan: 1
    }
  }

  create_doanvan_chondapan(id: number): doanvan_chondapan {
    return {
      id: id,
      doanvan: this.doanvan,
      cauhoi: "Câu hỏi " + id + " có nội dung là: ...",
      traloi: ["Trả lời 1", "Trả lời 2", "Trả lời 3", "Trả lời 4"],
      dapan: 1
    }
  }

  create_doanvan_chondapan2(id: number): doanvan_chondapan2 {
    return {
      id: id,
      doanvan: this.doanvan,
      cauhoi: [
        "Câu hỏi  1  có nội dung là: ...",
        "Câu hỏi  2  có nội dung là: ...",
        "Câu hỏi  3  có nội dung là: ...",
        "Câu hỏi  4  có nội dung là: ...",
      ],
      traloi: [
        ["Trả lời 1 cau hoi 1", "Trả lời 2 cau hoi 1", "Trả lời 3 cau hoi 1", "Trả lời 4 cau hoi 1"],
        ["Trả lời 1 cau hoi 2", "Trả lời 2 cau hoi 2", "Trả lời 3 cau hoi 2", "Trả lời 4 cau hoi 2"],
        ["Trả lời 1 cau hoi 3", "Trả lời 2 cau hoi 3", "Trả lời 3 cau hoi 3", "Trả lời 4 cau hoi 3"],
        ["Trả lời 1 cau hoi 4", "Trả lời 2 cau hoi 4", "Trả lời 3 cau hoi 4", "Trả lời 4 cau hoi 4"],
      ],
      dapan: 1
    }
  }



  fnClick() {
    console.log("log " + this.vidumodel)
  }

  preview = "";

  fileChangeEvent(fileInput: any) {

    if (fileInput.target.files && fileInput.target.files[0]) {


      this.myfilename = '';
      Array.from(fileInput.target.files).forEach((file: File) => {
        console.log(file);
        this.myfilename += file.name + ',';
      });

      const reader = new FileReader();
      reader.onload = (e: any) => {
        const image = new Image();
        image.src = e.target.result;
        image.onload = rs => {

          // Return Base64 Data URL
          const imgBase64Path = e.target.result;
          this.preview = e.target.result

        };
      };
      reader.readAsDataURL(fileInput.target.files[0]);

      // Reset File Input to Selct Same file again
      this.uploadFileInput.nativeElement.value = "";
    } else {
      this.myfilename = 'Select File';
    }
  }

  fnloadedImage($event: any) {
    this.uploadedImage.push($event.image1)
    this.emp.id = $event.cauhoi
  }

  isImage: boolean
  isSentences: boolean
  fnCheck($event: any) {
    if ($event.index == 0) {
      this.isImage = true;
      this.isSentences = false;
      console.log("tabs is: " + $event.index + "___ isimage " + this.isImage + "___ issentences " + this.isSentences)
    } else {
      this.isImage = false;
      this.isSentences = true;
      console.log("tabs is: " + $event.index + "___ isimage " + this.isImage + "___ issentences " + this.isSentences)
    }
  }




}
