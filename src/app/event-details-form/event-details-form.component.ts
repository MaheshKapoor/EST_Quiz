import { Component, OnInit } from '@angular/core';
import {EventDetails} from  '../event-details';
import search from '../../assets/data/search.json';
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-event-details-form',
  templateUrl: './event-details-form.component.html',
  styleUrls: ['./event-details-form.component.css']
})
export class EventDetailsFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  public data= search;
  public filterText;
  public filterDist;
  public filterDate;

  filteredData = [];

   submitted = false;

  onSubmit() {

    this.submitted = true;
    console.log(this.filteredData);

    if (this.filterText && this.filterDist && this.filterDate) {
      //Case1: text, dist and date filters
      this.filteredData = this.data.filter(
        datum =>  ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
                    datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
                    (datum.domain.indexOf(this.filterDist) > -1 ) &&
                    (datum.language.indexOf(this.filterDate) > -1 )) );
      console.log("filter text & dist & date" + this.filteredData);
    } else if (this.filterText && this.filterDist) {
      //Case2: text and dist filters
      this.filteredData = this.data.filter(
        datum =>  ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
                    datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
                    (datum.domain.indexOf(this.filterDist) > -1 )));
      console.log("filter text & dist " + this.filteredData);
    } else if (this.filterText && this.filterDate) {
      //Case3: text & date filters
      this.filteredData = this.data.filter(
        datum =>  ((datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 ||
                    datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) &&
                    (datum.language.indexOf(this.filterDate) > -1 )) );
      console.log("filter text & date" + this.filteredData);
    } else if (this.filterText && this.filterDist && this.filterDate) {
      //Case4: dist and date filters
      this.filteredData = this.data.filter(
        datum => ((datum.domain.indexOf(this.filterDist) > -1 ) &&
                  (datum.language.indexOf(this.filterDate) > -1 )));
      console.log("filter dist & date" + this.filteredData);
    } else if (this.filterText) {
        //Case5: only text filter
        this.filteredData = this.data.filter(
          datum => (datum.name.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1 || datum.level.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1) ||
                    datum.description.toLowerCase().indexOf(this.filterText.toLowerCase()) > -1);
        console.log("filter text" + this.filteredData);
    } else if (this.filterDist) {
        //Case6: only Dist filter
        this.filteredData = this.data.filter(
          datum => (datum.domain.indexOf((this.filterDist)) > -1));
        console.log("filter dist" +this.filteredData);
    } else if(this.filterDate){
        //Case7: only date filter
        this.filteredData = this.data.filter(
          datum => (datum.language.indexOf(this.filterDate) > -1 ));
        console.log("filter date data" + this.filterDate + ":::" + this.filteredData);
    }
  }
}
