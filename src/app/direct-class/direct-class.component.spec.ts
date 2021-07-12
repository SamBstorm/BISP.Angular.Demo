import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectClassComponent } from './direct-class.component';

describe('DirectClassComponent', () => {
  let component: DirectClassComponent;
  let fixture: ComponentFixture<DirectClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
