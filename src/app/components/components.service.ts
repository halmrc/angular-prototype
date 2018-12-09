import {ComponentDecorator, Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

interface ComponentDetail {
  id: number,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {

  private dataStore: {data: ComponentDetail[]};
  private components: Observable<ComponentDetail[]>;
  private component: Subject<ComponentDetail>;
  private co: ComponentDetail;

  constructor() {
    this.dataStore = { data: [] };
    this.dataStore.data = Array.from({length: 100}, function (x, i) {
      return  { id: i + 1, name: 'Component-' + i }
    });

    /* this.components = <Observable<ComponentDetail[]>> new Subject();*/
    this.components = new Observable(observer => {
      observer.next(Object.assign({}, this.dataStore).data);
    });

    this.component = <Subject<ComponentDetail>> new Subject();
    this.component.next(Object.assign({}, this.dataStore).data[1]);
  }

  get componentsList(): Observable<ComponentDetail[]> {
    return this.components;
  }

  get componentDetail(): Observable<ComponentDetail> {
    return this.component.asObservable();
  }

  viewComponentDetail(id: number) {

    this.component.next();
    const a = this.components.pipe(
      map(comp => comp.find(x => x.id == 1))
    );
    const b = this.dataStore.data.forEach((t, i) => {
      if (t.id === id) { return t; }
    });
    this.component.next(Object.assign({}, this.dataStore).data[id - 1]);

  }
}

