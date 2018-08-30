export class ScrollButton {
  constructor({scrollButtonWrap}) {
    this.scrollButtonWrap = scrollButtonWrap;
    this.buttonWrapOffsetTop = scrollButtonWrap.offsetTop;
    this._registerAllEventListener();
  }

  _registerAllEventListener() {
    this.scrollButtonWrap.addEventListener('click', ({target: {dataset: {direction}}}) => {
      if(!direction) return;
      this._scroll(direction);
    });
    
    document.addEventListener('scroll', () => {
      if(pageYOffset > 0) {
        this.scrollButtonWrap.classList.remove('deactive');
        this.scrollButtonWrap.classList.add('active');
      }
      else {
        this.scrollButtonWrap.classList.remove('active');
        this.scrollButtonWrap.classList.add('deactive');
      }
    })
  }

  _scroll(direction) {
    const endY = document.body.offsetHeight - innerHeight;

    if(direction === 'up') this._scrollEaseIn({targetRange: {from: 0, to: endY}, volume: -1});
    else if(direction === 'down') this._scrollEaseIn({targetRange: {from: 0, to: endY}, volume: 1});
  }

  _scrollEaseIn({targetRange: {from, to}, volume}) {
    scrollBy(0, volume);
    if(pageYOffset > from && pageYOffset < to) requestAnimationFrame(() => {
      this._scrollEaseIn({targetRange: {from: from, to: to}, volume: volume * 1.5});
    });
  }
}