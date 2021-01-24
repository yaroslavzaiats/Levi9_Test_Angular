import { Component, DoCheck } from '@angular/core';
import { ActivationService } from '../shared/activation.service';
import { Photo, Post, User } from '../shared/interfaces';

@Component({
  selector: 'app-activated-layout',
  templateUrl: './activated-layout.component.html',
  styleUrls: ['./activated-layout.component.scss']
})
export class ActivatedLayoutComponent implements DoCheck {

  constructor(private activated: ActivationService) { }

  activatedUsers: User[] = this.activated.activatedUsers

  activatedPosts: Post[] = this.activated.activatedPosts

  activatedPhotos: Photo[] = this.activated.activatedPhotos

  isEmptyPhotos = this.activated.isEmptyPhotos
  isEmptyPosts = this.activated.isEmptyPosts
  isEmptyUsers = this.activated.isEmptyUsers

  ngDoCheck() {
    this.isEmptyPhotos = this.activated.isEmptyPhotos
    this.isEmptyPosts = this.activated.isEmptyPosts
    this.isEmptyUsers = this.activated.isEmptyUsers
  }
}
