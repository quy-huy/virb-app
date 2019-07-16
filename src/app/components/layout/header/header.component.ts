import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('headerEl', null) headerElement: ElementRef;
  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.headerElement.nativeElement.classList.add('scroll-header');
  }
}
