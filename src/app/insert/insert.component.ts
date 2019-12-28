import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource, MatTable } from "@angular/material";

const Status = ["قبول", "مردود", "قبول", "مردود", "مردود", "قبول"];

const NAMES = [
  "علی",
  "حسین",
  "مریم",
  "محمد",
  "پریسا",
  "پریناز",
  "شایان",
  "احمد",
  "شهلا",
  "ساناز",
  "مهدی",
  "امیر"
];

const elements: UserData[] = [
  {
    id: 1,
    name: "امیر",
    scores: "12",
    status: "قبول"
  }
];

export class UserData {
  id: number;
  name: string;
  scores: string;
  status: string;
}

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.scss"]
})
export class InsertComponent {
  @ViewChild("table", {static:true}) table: MatTable<any>;

  displayedColumns = ["id", "name", "Scores", "color"];
  dataSource: any = elements;

  constructor() {}

  addRow(value: string) {
    let item = new UserData();
    item.id = 2;
    item.name = "امیر";
    item.scores = value;
    item.status = "مردود";

    elements.push(item);
    this.table.renderRows();
  }
}
