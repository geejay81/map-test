import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LineService {
  private lineStatusUrl = 'https://api.tfl.gov.uk/Line/{line}/Status?detail={detail}';
  private modeLineStatusUrl = 'https://api.tfl.gov.uk/Line/Mode/{mode}/Status?detail={detail}';
  private validModesUrl = 'https://api.tfl.gov.uk/Line/Meta/Modes';

  constructor(private http: HttpClient) { }

  getAllStatuses(detail: boolean = true, mode: string = 'tube') {
    return this.http.get<Array<any>>(
      this.modeLineStatusUrl.replace('{mode}', mode).replace('{detail}', detail.toString())
    );
  }

  getAllValidModes() {
    return this.http.get<Array<any>>(this.validModesUrl);
  }

  getLineStatuses(line: string, detail: boolean = true) {
    return this.http.get<Array<any>>(
      this.lineStatusUrl.replace('{line}', line).replace('{detail}', detail.toString())
    );
  }

}
