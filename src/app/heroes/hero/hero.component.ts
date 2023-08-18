import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  public name: string = 'WonderWoman';
  public age: number = 34;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `Nombre: ${this.name} - Edad: ${this.age}`;
  }

  public changed: boolean = true;
  public changed2: boolean = true;

  changeName(): void {
    this.name = 'Spiderman';
    this.changed = false;
  }

  changeAge(): void {
    this.age = 20;
    this.changed2 = false;
  }

  resetForm(): void {
    this.name = 'WonderWoman';
    this.age = 34;
    this.changed2 = true;
  }
}
