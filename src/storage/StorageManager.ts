import {Injectable} from '@angular/core';
import Defaults from './Defaults';

@Injectable()
export default class StorageManager {

  private readonly localstorage = window.localStorage;

  public constructor() {
  }

  public get<T>(key: string): T {
    return JSON.parse(this.localstorage.getItem(key));
  }

  public getOrDefault<T>(key: string, fallBack: Defaults): T {
    const item = this.localstorage.getItem(key);

    return (!item) ? JSON.parse(fallBack) : JSON.parse(item);
  }

  public set(key: string, value: any) {
    this.localstorage.setItem(key, JSON.stringify(value));
  }

}
