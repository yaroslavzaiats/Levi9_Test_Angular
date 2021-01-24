import { Component, Input, OnInit } from '@angular/core';
import { ActivationService } from '../../activation.service';
import { User } from '../../interfaces';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() user: User

 // isActive: boolean = false 
  
  
  constructor(private activation: ActivationService) { }

 // activeBtnText: string = 'ACTIVATE'

  ngOnInit(): void {
  }

  /*activatePut(userId, user) {
    this.activation.putUser(userId, user)
    .subscribe( data => {
      console.log(data);
      
    })
  }*/

  activate(user) {
    this.activation.activateUser(user)
  }

  deactivate(user){
    this.activation.deactivateUser(user)
  }
}
