import { Component } from '@angular/core';

@Component({
  selector: 'cui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cui works!';
  profile = {
    name: 'zhangsan'
  };

  initProfile() {
    this.profile.name = "lisi";
  }
}
