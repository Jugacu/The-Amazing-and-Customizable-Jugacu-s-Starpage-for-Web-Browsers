import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import StorageManager from '../../storage/StorageManager';
import Defaults from '../../storage/Defaults';
import Refreshable from '../../settings/Refreshable';
import SettingsManager from '../../settings/SettingsManager';
import {Types} from '../../settings/Types';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent extends Refreshable implements AfterViewInit {

  @ViewChild('backgroundContainer', {static: true}) backgroundContainer: ElementRef;

  constructor(
    private readonly storageManager: StorageManager,
    private readonly settingsManager: SettingsManager
  ) {
    super(Types.Background, settingsManager);
  }

  ngAfterViewInit(): void {
    this.refresh();
  }

  public refresh() {
    const img = this.storageManager.getOrDefault('background', Defaults.BACKGROUND);
    this.backgroundContainer.nativeElement.style.backgroundImage = `url('assets/${img}')`;
  }

}
