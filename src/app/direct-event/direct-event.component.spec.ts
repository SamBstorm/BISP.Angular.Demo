import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectEventComponent } from './direct-event.component';

describe('DirectEventComponent', () => {
  let component: DirectEventComponent;
  let fixture: ComponentFixture<DirectEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
