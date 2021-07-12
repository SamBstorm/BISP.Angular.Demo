import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectStructIfComponent } from './direct-struct-if.component';

describe('DirectStructIfComponent', () => {
  let component: DirectStructIfComponent;
  let fixture: ComponentFixture<DirectStructIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectStructIfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectStructIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
