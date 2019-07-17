import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('headerEl', null) headerElement: ElementRef;
  constructor() { }

  ngOnInit(): void {
    $('.mobile-menu nav').meanmenu({
      meanMenuContainer: '.mobile-menu-area',
      meanScreenWidth: "991",
      meanRevealPosition: "right",
  });
  $('.toggle__menu').on('click', function(e) {
    e.preventDefault();
    $('.offsetmenu').addClass('offsetmenu__on');
    $('.body__overlay').addClass('is-visible');

});

$('.offsetmenu__close__btn').on('click', function(e) {
    e.preventDefault();
    $('.offsetmenu').removeClass('offsetmenu__on');
    $('.body__overlay').removeClass('is-visible');
});

$('.user__menu').on('click', function(e) {
  e.preventDefault();
  $('.user__meta').addClass('user__meta__on');
  $('.body__overlay').addClass('is-visible');

});

$('.offsetmenu__close__btn').on('click', function(e) {
  e.preventDefault();
  $('.user__meta').removeClass('user__meta__on');
  $('.body__overlay').removeClass('is-visible');
});


$('.menu__click').on('click', function(e) {
  e.preventDefault();
  $('.off__canvars__wrap').addClass('off__canvars__wrap__on');
  $('.body__overlay').addClass('is-visible');
  $('body').addClass('off__canvars__open');
  $(this).hide();
});

$('.menu__close__btn').on('click', function() {
  $('.off__canvars__wrap').removeClass('off__canvars__wrap__on');
  $('.body__overlay').removeClass('is-visible');
  $('body').removeClass('off__canvars__open');
  $('.menu__click').show();
});
function offCanvasMenuDropdown() {

  $('.off__canvars__dropdown-menu').hide();

  $('.off__canvars__dropdown > a').on('click', function(e) {
      e.preventDefault();

      $(this).find('i.zmdi').toggleClass('zmdi-chevron-up');
      $(this).siblings('.off__canvars__dropdown-menu').slideToggle();
      return false;
  });
}
offCanvasMenuDropdown();

$('.ht__testimonial__activation').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  swipeToSlide: true,
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  centerPadding: '10px',
  responsive: [{
          breakpoint: 600,
          settings: {
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerPadding: '10px',
          }
      },
      {
          breakpoint: 320,
          settings: {
              autoplay: true,
              dots: false,
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: false,
              focusOnSelect: false,
          }
      }
  ]
});
var win = $(window);
var sticky_id = $("#sticky-header-with-topbar");
win.on('scroll', function() {
    var scroll = win.scrollTop();
    if (scroll < 245) {
        sticky_id.removeClass("scroll-header");
    } else {
        sticky_id.addClass("scroll-header");
    }
});
$.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
});
$('.search__open').on('click', function() {
    $('body').toggleClass('search__box__show__hide');
    return false;
});

$('.search__close__btn .search__close__btn_icon').on('click', function() {
    $('body').toggleClass('search__box__show__hide');
    return false;
});
$('.cart__menu').on('click', function(e) {
    e.preventDefault();
    $('.shopping__cart').addClass('shopping__cart__on');
    $('.body__overlay').addClass('is-visible');

});

$('.offsetmenu__close__btn').on('click', function(e) {
    e.preventDefault();
    $('.shopping__cart').removeClass('shopping__cart__on');
    $('.body__overlay').removeClass('is-visible');
});

  }

  ngAfterViewInit() {
    this.headerElement.nativeElement.classList.add('scroll-header');
  }
}
