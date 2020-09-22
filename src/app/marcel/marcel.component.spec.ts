import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcelComponent } from './marcel.component';

describe('MarcelComponent', () => {
  let component: MarcelComponent;
  let fixture: ComponentFixture<MarcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
