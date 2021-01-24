import { Component, OnInit } from '@angular/core';

import { Photo, Post, User } from '../shared/interfaces';
import { ActivationService } from '../shared/activation.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  users: User[] = []

  posts: Post[] = []

  photos: Photo[] = []

  constructor(
    private httpActivationService: ActivationService
    ) { }

  ngOnInit() {
    this.httpActivationService.getUsers()
    .subscribe(users => {
      users.forEach(user => user.isActive = false)
      this.users = this.httpActivationService.updateActivatedUsers(users)
    })

    this.httpActivationService.getPosts()
    .subscribe(posts => {
      posts.forEach(post => post.isActive = false)
      this.posts = this.httpActivationService.updateActivatedPosts(posts)
    })

    this.httpActivationService.getPhotos()
    .subscribe(photos => {
      photos.forEach(photo => photo.isActive = false)
      this.photos = this.httpActivationService.updateActivatedPhotos(photos)
    })
  }

}
