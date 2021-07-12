import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectStructSwitchComponent } from './direct-struct-switch.component';

describe('DirectStructSwitchComponent', () => {
  let component: DirectStructSwitchComponent;
  let fixture: ComponentFixture<DirectStructSwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectStructSwitchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectStructSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
