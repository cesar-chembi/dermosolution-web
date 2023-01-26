import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academica',
  templateUrl: './academica.component.html',
  styleUrls: ['./academica.component.css']
})
export class AcademicaComponent implements OnInit {

  uploadedFiles: any[] = [];


  onUpload(event: any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
      }
    }
  constructor() { }

  ngOnInit() {
  }

}
