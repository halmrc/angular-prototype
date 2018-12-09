import {Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ComponentsDetailComponent} from './details/component-details.component';
import {ComponentsService} from './components.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css'],
})
export class ComponentsListComponent implements OnInit {

  private components: any;
  private componentRef: any;

  @ViewChild(ComponentsDetailComponent, {read: ViewContainerRef}) componentDetails;

  constructor(private viewContainerRef:ViewContainerRef,
              private resolver: ComponentFactoryResolver,
              private compService: ComponentsService) { }

  ngOnInit() {
    this.compService.componentsList.subscribe(comps => {
      this.components = comps;
    });

  //  const factory = this.resolver.resolveComponentFactory(ComponentsDetailComponent);
  //  this.componentRef = this.componentDetails.viewContainerRef;

  //  this.componentRef = this.componentDetails.createComponent(factory);
  //  this.componentRef.instance.component = this.components[0];
  }

  loadDetail(component: { id: number; name: string }) {
    this.compService.viewComponentDetail(component.id);
    // this.componentDetails.instance.component = component;
    //if (this.componentDetails != undefined) this.componentDetails.clear();
    //this.componentRef.instance.component = component;
  }
}
