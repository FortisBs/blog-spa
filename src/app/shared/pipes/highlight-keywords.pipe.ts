import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlightKeywords',
  standalone: true
})
export class HighlightKeywordsPipe implements PipeTransform {
  transform(text: string, keywords: string): string {
    if (keywords === '') {
      return text;
    }

    const keywordArray: string[] = keywords.split(' ');

    keywordArray.forEach((keyword) => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      text = text.replace(regex, '<mark>$1</mark>');
    });

    return text;
  }
}
