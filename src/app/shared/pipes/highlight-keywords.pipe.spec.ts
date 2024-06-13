import { HighlightKeywordsPipe } from './highlight-keywords.pipe';

describe('MarkKeywordsPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlightKeywordsPipe();
    expect(pipe).toBeTruthy();
  });
});
