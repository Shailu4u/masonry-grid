import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <ng-masonry-grid class="grid" id="grid"
                  [masonryOptions]="{ transitionDuration: '0.8s', gutter: 5 }"
                  [useAnimation]="true"
                  [scrollAnimationOptions]="{ animationEffect: 'effect-6', minDuration : 0.4, maxDuration : 0.7 }">
      <ng-masonry-grid-item class="masonry-item" *ngFor="let item of masonryItems; let i = index;">
        <img src="../assets/images/{{ (i+1) >  15 ? masonryItems.length - i: i+1 }}.jpg" alt="No image" />
      </ng-masonry-grid-item>
    </ng-masonry-grid>
  </div>
`,
styleUrls: ['../../node_modules/ng-masonry-grid/ng-masonry-grid.css'] // point to ng masonry grid css
})
export class AppComponent {
  title = 'app';
  masonryItems: Array<number> = [];

  constructor() {
    this.masonryItems.length = 30;
  }
}