import {Component} from '@angular/core';
import StorageManager from '../storage/StorageManager';
import Defaults from '../storage/Defaults';
import Refreshable from '../settings/Refreshable';
import SettingsManager from '../settings/SettingsManager';
import {Types} from '../settings/Types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent extends Refreshable {

  private title: string;

  public constructor(
    private readonly storageManager: StorageManager,
    private readonly settingsManager: SettingsManager
  ) {
    super(Types.App, settingsManager);
    this.refresh();
  }

  public refresh() {
    this.title = this.storageManager.getOrDefault<string>('title', Defaults.TITLE);
  }

}
