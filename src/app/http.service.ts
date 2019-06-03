import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import "rxjs/add/operator/map";

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {}

  private encode: any = new HttpHeaders().set(
    "content-type",
    "application/x-www-form-urlencoded"
  );

  private conf = { headers: this.encode, withcredentials: true };
  readonly endPoint = "http://127.0.0.1:3000";

  get() {
    return this.http.get(this.endPoint, this.conf).map(r => r);
  }
}
