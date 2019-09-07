import {Component} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import StorageManager from '../../storage/StorageManager';
import Defaults from '../../storage/Defaults';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.sass']
})
export class SearcherComponent {

  private readonly searchForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private storageManager: StorageManager
  ) {
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
}
