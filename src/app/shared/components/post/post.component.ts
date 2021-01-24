import { Component, Input, OnInit } from '@angular/core';
import { ActivationService } from '../../activation.service';
import { Post } from '../../interfaces';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post: Post

  constructor(private activation: ActivationService) { }

  ngOnInit(): void {
  }

  activate(post) {
    this.activation.activatePost(post)
  }

  deactivate(post){
    this.activation.deactivatePost(post)
  }

}
