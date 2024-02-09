import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { startOfDay, endOfDay } from 'date-fns';
// import { CalendarEvent } from 'mdb-calendar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

    casesWon = 50; // This can be any value from 0 to 100
    casesLost = 7;
    public minDate: Date = new Date ("01/01/2000");
    public maxDate: Date = new Date ("01/01/2999");
    public value: Date = new Date ("05/16/2017");
    // events: CalendarEvent[] = [
    //   {
    //     id: 'mdb-calendar-event-1',
    //     startDate: new Date(startOfDay(new Date())),
    //     endDate: new Date(endOfDay(new Date(2019, 2, 9))),
    //     name: 'Conference',
    //     color: 'info',
    //   },
    //   {
    //     id: 'mdb-calendar-event-2',
    //     startDate: new Date(startOfDay(new Date())),
    //     endDate: new Date(endOfDay(new Date())),
    //     name: 'Meeting',
    //     color: 'success'
    //   },
    // ];

    // generateUid() {
    //   const uid = Math.random().toString(36).substr(2, 9);
    //   return `mdb-calendar-event-${uid}`;
    // }

    // onEventAdd(event: CalendarEvent) {
    //   event.id = this.generateUid();
    //   this.events = [...this.events, event];
    // }
}
