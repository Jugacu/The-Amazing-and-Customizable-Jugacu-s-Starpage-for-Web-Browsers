import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import Marker, {MarkerData} from '../../storage/Marker';
import StorageManager from '../../storage/StorageManager';
import {FormBuilder, FormGroup} from '@angular/forms';
import Refreshable from '../../settings/Refreshable';
import SettingsManager from '../../settings/SettingsManager';
import {Types} from '../../settings/Types';

@Component({
  selector: 'app-markers',
  templateUrl: './markers.component.html',
  styleUrls: ['./markers.component.sass']
})
export class MarkersComponent extends Refreshable {

  private readonly markerForm: FormGroup;

  private markers: Marker[] = [];
  private dialog = false;
  private dialogIsEdit = false;
  private markerEditingIndex = -1;

  constructor(
    private formBuilder: FormBuilder,
    private storageManager: StorageManager,
    private readonly settingsManager: SettingsManager
  ) {
    super(Types.Markers, settingsManager);

    this.markerForm = formBuilder.group({
      title: '',
      url: ''
    });

    const json: MarkerData[] = storageManager.get<MarkerData[]>('markers');
    if (Array.isArray(json)) {
      json.forEach((data: MarkerData) => {
        this.markers.push(
          new Marker(
            data.url,
            data._title
          )
        );
      });
    }


  }

  public openMarkerDialog(): void {
    this.dialog = true;
  }

  public closeMarkerDialog(): void {
    this.markerForm.reset();
    this.dialog = false;
    this.dialogIsEdit = false;
  }

  public saveMarker(value: { title: string, url: string }): void {
    if (!value.url || value.url.length <= 0) {
      return;
    }

    if (this.dialogIsEdit && this.markerEditingIndex > -1) {
      this.markers[this.markerEditingIndex].url = value.url;
      this.markers[this.markerEditingIndex]._title = value.title;
    } else {
      this.markers.push(
        new Marker(
          value.url,
          value.title
        )
      );
    }

    this.saveMarkers();
    this.closeMarkerDialog();
  }

  public editMarker(marker: Marker, index: number) {
    this.openMarkerDialog();

    this.markerForm.setValue({
      title: marker._title,
      url: marker.url
    });

    this.saveMarkers();

    this.dialogIsEdit = true;
    this.markerEditingIndex = index;
  }

  public removeMarker(): void {
    if (this.dialogIsEdit && this.markerEditingIndex > -1) {
      this.markers.splice(this.markerEditingIndex, 1);
    }

    this.saveMarkers();
    this.closeMarkerDialog();
  }

  private saveMarkers() {
    this.storageManager.set(
      'markers',
      this.markers
    );
  }

  public refresh() {
  }
}
