import {Component, Input, OnInit} from '@angular/core';
import Refreshable from '../../settings/Refreshable';
import SettingsManager from '../../settings/SettingsManager';
import {Types} from '../../settings/Types';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.sass']
})
export class NotepadComponent extends Refreshable implements OnInit {

  @Input()
  private bounds: HTMLElement;

  constructor(
    private readonly settingsManager: SettingsManager
  ) {
    super(Types.Notepad, settingsManager);
  }
  
  ngOnInit() {
  }

  public refresh() {
  }

}
