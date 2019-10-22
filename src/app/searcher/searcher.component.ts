import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import StorageManager from '../../storage/StorageManager';
import Defaults from '../../storage/Defaults';
import Refreshable from '../../settings/Refreshable';
import SettingsManager from '../../settings/SettingsManager';
import {Types} from '../../settings/Types';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.sass']
})
export class SearcherComponent extends Refreshable {

  private readonly searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storageManager: StorageManager,
    private readonly settingsManager: SettingsManager
  ) {
    super(Types.Searcher, settingsManager);
    this.searchForm = formBuilder.group({
      query: ''
    });
  }


  public onSubmit(value: { query: string }): void {
    const newTab = this.storageManager.getOrDefault('searchInNewTab', Defaults.SEARCH_IN_NEW_TAB);
    const url = `https://google.com/search?q=${value.query}`;

    if (newTab === 'true') {
      window.open(
        url,
        '_blank'
      );
    } else {
      document.location.href = url;
    }
  }

  public refresh() {
  }
}
