import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiments',
  templateUrl: './experiments.component.html',
  styleUrls: ['./experiments.component.css']
})
export class ExperimentsComponent implements OnInit {

  itemBeingEdited: object = null;

  experiments: object[] = [
    {name: "Mars soil sample"},
    {name: "Plant growth in habitat"},
    {name: "Human bone density"},
  ];

  add(experimentName: string) {
    let inExperiments = false;
    for (let i = 0; i < this.experiments.length; i++) {
      if (this.experiments[i]['name'] === experimentName) {
        inExperiments = true;
      } 
    }
    if (!inExperiments) {
      this.experiments.push({name: experimentName});
    }
  }

  remove(item: object) {
    let index = this.experiments.indexOf(item);
    this.experiments.splice(index, 1);
  }

  edit(piece: object) {
    this.itemBeingEdited = piece;
 }

  save(name: string, item: object) {
    item['name'] = name;
    this.itemBeingEdited = null;
  }

  constructor() { }

  ngOnInit() {
  }

}
