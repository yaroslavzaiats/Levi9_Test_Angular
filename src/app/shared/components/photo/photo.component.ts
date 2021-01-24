import { Component, Input, OnInit } from '@angular/core';
import { ActivationService } from '../../activation.service';
import { Photo } from '../../interfaces';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {

  @Input() photo: Photo

  constructor(private activation: ActivationService) { }

  ngOnInit(): void {
  }

  activate(photo) {
    this.activation.activatePhoto(photo)
  }

  deactivate(photo){
    this.activation.deactivatePhoto(photo)
  }

}
