import { Component } from "@angular/core";
import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "app";
  keys: any;
  data: any;
  dataTable: any;
  currentFile: any;
  table: Object = {};
  tableShow: boolean = false;

  constructor(private httpService: HttpService) {}

  ngOnInit() {
    this.httpService.get().subscribe(r => {
      this.keys = Object.keys(r);
      this.data = r;
    });
  }

  fileName(str): void {
    this.dataTable = this.data[str]["tables"];
  }

  tableName(tb): void {
    this.table = tb;
    this.tableShow = true;
  }
}
