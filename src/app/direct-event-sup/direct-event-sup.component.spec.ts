import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectEventSupComponent } from './direct-event-sup.component';

describe('DirectEventSupComponent', () => {
  let component: DirectEventSupComponent;
  let fixture: ComponentFixture<DirectEventSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectEventSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectEventSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
