import { Component } from '@angular/core';
import { dragula, DragulaService } from 'ng2-dragula/ng2-dragula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  groupA: any = {
    name: 'Group A',
    items: [{ name: 'Item A' }, { name: 'Item B' }, { name: 'Item C' }, { name: 'Item D' }]
  };

  groupB: any = {
    name: 'Group B',
    items: [{ name: 'Item 1' }, { name: 'Item 2C' }, { name: 'Item 3' }, { name: 'Item 4' }]
  };

  constructor(private dragulaService: DragulaService) {
    dragulaService.drag.subscribe((value) => {
      console.log(`drag: ${value[0]}`);
      this.onDrag(value.slice(1));
    });
    dragulaService.drop.subscribe((value) => {
      console.log(`drop: ${value[0]}`);
      this.onDrop(value.slice(1));
    });
    dragulaService.over.subscribe((value) => {
      console.log(`over: ${value[0]}`);
      this.onOver(value.slice(1));
    });
    dragulaService.out.subscribe((value) => {
      console.log(`out: ${value[0]}`);
      this.onOut(value.slice(1));
    });
  }

  private onDrag(args) {
    const [e, el] = args;
    // do something
  }

  private onDrop(args) {
    const [e, el] = args;
    // do something
  }

  private onOver(args) {
    const [e, el, container] = args;
    // do something
  }

  private onOut(args) {
    const [e, el, container] = args;
    // do something
  }

}
