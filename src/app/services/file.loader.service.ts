import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class FileLoaderService {

  constructor(private http: HttpClient) {
    this.getData().subscribe(data => {
      console.log(data);
    });
  }

  public getData(): Observable<any> {
    const fileUrl = "../assets/data/json/"+"WEB00HTML5"+".json";
    return this.http.get(fileUrl);
  }

}
