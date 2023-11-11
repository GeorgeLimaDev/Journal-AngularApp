import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DialogService } from '../../dialog/dialogService';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit, OnDestroy {
  private colorChangeInterval: Subscription = new Subscription();
  private imageChangeInterval: Subscription = new Subscription();
  private colors: string[] = ['#fdd32c', '#9dd7ee', '#e06fa9'];
  private images: string[] = ['assets/Goodies - Face Happy.png', 'assets/Goodies - Face Neutral.png', 'assets/Goodies - Face Sad.png'];
  private currentIndex = 0;
  private fadePercentage = 50;
  backgroundColor: string = '';
  currentImageUrl: string = '';
  imageOpacity: number = 1;

  constructor(private dialogService: DialogService) {
  }

  ngOnInit(): void {
    this.startColorChange(); // Start color change interval
    this.startImageChange(); // Start image change interval
    this.updateBackgroundColorAndImage(); // Set the initial background color and image
  }


  ngOnDestroy(): void {
    this.colorChangeInterval.unsubscribe();
    this.imageChangeInterval.unsubscribe();
  }

  openDialog(): void {
    this.dialogService.openDialog();
  }

  private startColorChange(): void {
    this.colorChangeInterval = interval(5000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.colors.length;
      this.updateBackgroundColor();
    });
  }

  private startImageChange(): void {
    this.imageChangeInterval = interval(5000).subscribe(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.updateBackgroundColorAndImage();
    });
  }

  private updateBackgroundColorAndImage(): void {
    this.updateBackgroundColor();
    this.currentImageUrl = this.images[this.currentIndex];
  }

  private updateBackgroundColor(): void {
    const color = this.colors[this.currentIndex];
    const middleColor = this.fadeToWhite(color, this.fadePercentage);
    this.backgroundColor = `linear-gradient(${color}, ${middleColor}, ${color})`;
  }

  private fadeToWhite(color: string, percentage: number): string {
    const white = '#FFFFFF';
    // @ts-ignore
    const hexToRgb = (hex: string): number[] => hex.match(/\w\w/g).map(x => parseInt(x, 16));
    const rgbToHex = (r: number, g: number, b: number): string => ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

    const [r, g, b] = hexToRgb(color);
    const fadedR = Math.round(r + (255 - r) * (percentage / 100));
    const fadedG = Math.round(g + (255 - g) * (percentage / 100));
    const fadedB = Math.round(b + (255 - b) * (percentage / 100));

    return `#${rgbToHex(fadedR, fadedG, fadedB)}`;
  }
}
