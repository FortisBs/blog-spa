import { ChangeDetectionStrategy, Component } from '@angular/core';
import { InputComponent } from "../../shared/components/input/input.component";
import { ArticlesListComponent } from "./components/articles-list/articles-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [InputComponent, ArticlesListComponent,],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  searchValue: string = '';
}
