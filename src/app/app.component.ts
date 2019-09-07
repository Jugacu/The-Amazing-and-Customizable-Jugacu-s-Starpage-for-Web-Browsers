import {Component} from '@angular/core';
import StorageManager from '../storage/StorageManager';
import Defaults from '../storage/Defaults';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  private title: string;

  public constructor(
    private readonly storageManager: StorageManager
  ) {
    this.title = storageManager.getOrDefault('title', Defaults.TITLE);
  }


}
