import Refreshable from './Refreshable';
import {Injectable} from '@angular/core';

@Injectable()
export default class SettingsManager {
  private components: Map<symbol, Refreshable> = new Map<symbol, Refreshable>();

  public constructor() {
  }


  /**
   * Registers an instance if not exists
   */
  public register(key: symbol, instance: Refreshable): void {
    this.components.set(key, instance);
  }

  /**
   * Returns an instance
   */
  public get<T extends Refreshable>(key: symbol): T {
    return this.components.get(key) as T;
  }

}
