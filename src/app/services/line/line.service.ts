import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LineService {
  private lineStatusUrl = 'https://api.tfl.gov.uk/Line/Mode/{mode}/Status';
  private validModesUrl = 'https://api.tfl.gov.uk/Line/Meta/Modes';

  constructor(private http: HttpClient) { }

  getAllStatuses(detail: boolean = true, mode: string = 'tube') {
    return this.http.get<Array<any>>(
      this.lineStatusUrl.replace('{mode}', mode) + '?detail=' + detail
    );
  }

  getAllValidModes() {
    return this.http.get<Array<any>>(this.validModesUrl);
  }

}
