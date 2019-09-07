import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import StorageManager from '../../storage/StorageManager';
import Defaults from '../../storage/Defaults';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.sass']
})
export class BackgroundComponent implements AfterViewInit {

  @ViewChild('backgroundContainer', {static: true}) backgroundContainer: ElementRef;

  constructor(
    private readonly storageManager: StorageManager
  ) {
  }

  ngAfterViewInit(): void {
    const img = this.storageManager.getOrDefault('background', Defaults.BACKGROUND);
    this.backgroundContainer.nativeElement.style.backgroundImage = `url('assets/${img}')`;
  }

}
