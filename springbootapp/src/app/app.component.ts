import { Component } from '@angular/core';
import { SpringbootdbServiceService } from './springbootdb-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'springbootapp';

  constructor(private service:SpringbootdbServiceService){
    this.service.get();
  }
}
