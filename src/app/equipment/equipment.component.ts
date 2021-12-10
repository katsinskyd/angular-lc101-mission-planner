import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equipment',
  templateUrl: './equipment.component.html',
  styleUrls: ['./equipment.component.css']
})
export class EquipmentComponent implements OnInit {

  itemBeingEdited: object = null;

  equipment: object[] = [
    {name: "Habitat dome"},
    {name: "Drones"},
    {name: "Food containers"},
    {name: "Oxygen tanks"}
  ];

  add(itemName: string) {
    let inEquipment = false;
    for (let i = 0; i < this.equipment.length; i++) {
      if (this.equipment[i]['name'] === itemName) {
        inEquipment = true;
      } 
    }
    if (!inEquipment) {
      this.equipment.push({name: itemName});
    }
  }

  remove(item: object) {
    let index = this.equipment.indexOf(item);
    this.equipment.splice(index, 1);
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
