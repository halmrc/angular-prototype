import {Component, OnInit} from '@angular/core';
import {ComponentsService} from '../components.service';

@Component({
  selector: 'component-details',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css'],
})
export class ComponentsDetailComponent implements OnInit {

  public component:any;

  constructor(private compService: ComponentsService) {}

  ngOnInit(): void {
    this.compService.componentDetail.subscribe(comp => {
      this.component = comp;
    });
  }
}
