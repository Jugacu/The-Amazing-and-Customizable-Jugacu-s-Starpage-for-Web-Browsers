import {Component, HostListener, Input, OnInit} from '@angular/core';
import StorageManager from '../../storage/StorageManager';
import Defaults from '../../storage/Defaults';
import {IPosition} from 'angular2-draggable';
import Refreshable from '../../settings/Refreshable';
import SettingsManager from '../../settings/SettingsManager';
import {Types} from '../../settings/Types';
@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.sass']
})
export class ClockComponent extends Refreshable implements OnInit {

  private position: IPosition = {x: 0, y: 0};
  private draggable = true;
  @Input() private bounds: HTMLElement;

  private hour = '00';
  private minutes = '00';

  private day = 'day';
  private month = 'month';
  private year = 'year';

  constructor(
    private readonly storageManager: StorageManager,
    private readonly settingsManager: SettingsManager
  ) {
    super(Types.Clock, settingsManager);
  }

  ngOnInit() {
    this.clock();
    this.refresh();
  }

  public onDragEnd(pos: IPosition): void {
    this.setPosition(pos.x, pos.y);
  }

  @HostListener('window:resize', ['$event'])
  public onResize(event: Event): void {
    this.refresh();
  }

  public setStoredPos(): void  {
    const pos: IPosition = this.storageManager.getOrDefault<IPosition>('clock_pos', Defaults.CLOCK_POSITION);
    this.setPosition(pos.x, pos.y);
  }

  public setPosition(x: number, y: number): void {
      this.position = {x, y};
      this.storageManager.set('clock_pos', this.position);
  }

  private clock(): void {
    const today = new Date();

    this.hour = today.getHours() < 10 ? '0' + today.getHours() : today.getHours() + '';
    this.minutes = today.getMinutes() < 10 ? '0' + today.getMinutes() : today.getMinutes() + '';

    this.day = today.getDate() + '';
    this.month = today.toLocaleString(undefined, {month: 'long'});
    this.year = today.getFullYear() + '';

    setTimeout(() => this.clock(), 1000);
  }

  public refresh() {
    this.setStoredPos();
  }

}
