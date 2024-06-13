import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitCharacters',
  standalone: true
})
export class LimitCharactersPipe implements PipeTransform {
  transform(value: string, limitLength:  number): string {
    if (value.length <= limitLength) {
      return value;
    }

    const shortenedText = value.substring(0, limitLength);

    return shortenedText + '...';
  }
}
