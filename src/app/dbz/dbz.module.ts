import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DbzMainComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';

@NgModule({
  exports: [DbzMainComponent],
  declarations: [DbzMainComponent, ListComponent, AddCharacterComponent],
  imports: [CommonModule, FormsModule],
})
export class DbzModule {}
