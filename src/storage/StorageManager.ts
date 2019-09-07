import {Injectable} from '@angular/core';
import Defaults from './Defaults';

@Injectable()
export default class StorageManager {

  private readonly localstorage = window.localStorage;

  public constructor() {
  }

  public get(key: string): string {
    return this.localstorage.getItem(key);
  }

  public getOrDefault(key: string, fallBack: Defaults): string {
    const item = this.localstorage.getItem(key);
    return (!item) ? fallBack : item;
  }

  public set(key: string, value: string) {
    this.localstorage.setItem(key, value);
  }

}
