import { Component } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css',
  providers: [NotificationService]
})
export class NotificationComponent {

  message = 'Notification component created';

  constructor(private notificationService: NotificationService) {

    this.notificationService.show(this.message);

  }

}