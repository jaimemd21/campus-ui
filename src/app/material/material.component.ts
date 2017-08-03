import { Material } from './../_models/material';
import { MaterialService } from './../_services/material.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  src: any;
  idEdition: number;
  materials: Material[] = [];

  constructor(
    private materialService: MaterialService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idEdition = +params['idEdition'];
      let obs = this.materialService.getMaterial(this.idEdition);
      obs.subscribe(data => {
        this.materials = data;
        if(this.materials.length > 0){
          this.getURLVideo(0);
        }        
      })
    });
  }

  getURLVideo(lesson: number) {
    this.src = this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + this.materials[lesson].url_video);
  }
}
