import { Component } from '@angular/core';

@Component({
  selector: 'app-heores-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  public heroes: string[] = ['Spiderman', 'IronMan', 'Hulk', 'Thor'];

  public heroDeleted?: string = '';

  deleteHero(): void {
    this.heroDeleted = this.heroes.pop();
  }
}
