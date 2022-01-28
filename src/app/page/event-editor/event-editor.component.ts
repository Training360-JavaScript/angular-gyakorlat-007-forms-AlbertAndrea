import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {
  event: Event = new Event();

  constructor(
    private activatedRoute: ActivatedRoute,
    private eventService: EventService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>
      this.eventService.get(params['id']).subscribe(
          event => this.event = event)
    );
  }

  onUpdate(form: NgForm): void{
    console.log(form.value);
    this.eventService.update(form.value)
  }

}
