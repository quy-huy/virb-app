import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OffsetWrapperComponent } from './offset-wrapper.component';

describe('OffsetWrapperComponent', () => {
  let component: OffsetWrapperComponent;
  let fixture: ComponentFixture<OffsetWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffsetWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OffsetWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
