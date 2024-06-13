import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, DestroyRef,
  ElementRef,
  EventEmitter, inject,
  Input,
  Output,
  ViewChild
} from '@angular/core';
import { debounceTime, fromEvent, map } from "rxjs";
import { takeUntilDestroyed } from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputComponent implements AfterViewInit {
  @ViewChild('inputEl', { static: true }) inputEl: ElementRef<HTMLInputElement>;

  @Input() label = '';
  @Input() debounce = 0;

  @Output() valueChange = new EventEmitter<string>();

  private destroyRef: DestroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    fromEvent(this.inputEl.nativeElement, 'input').pipe(
      takeUntilDestroyed(this.destroyRef),
      map((event: any) => event.target.value),
      debounceTime(this.debounce)
    ).subscribe((value: string) => this.valueChange.emit(value));
  }
}
