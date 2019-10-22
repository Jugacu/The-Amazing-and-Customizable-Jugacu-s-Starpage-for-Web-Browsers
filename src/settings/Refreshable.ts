import SettingsManager from './SettingsManager';

abstract class Refreshable {

  protected constructor(key: symbol, settingsManager: SettingsManager) {
    settingsManager.register(key, this);
  }


  abstract refresh();
}

export default Refreshable;
