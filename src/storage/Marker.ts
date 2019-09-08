export interface MarkerData  {
  url: string;
  _title: string;
}

export default class Marker {

  public constructor(
    public url: string,
    // tslint:disable-next-line:variable-name
    public _title ?: string,
  ) {

  }

  public get favicon(): string {
    return `https://i.olsh.me/icon?size=32..48..200&url=${this.url}`;
  }

  public get title(): string {
    return this._title && this._title.length > 0 ? this._title : this.url;
  }

}
