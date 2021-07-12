import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectStructIfSupComponent } from './direct-struct-if-sup.component';

describe('DirectStructIfSupComponent', () => {
  let component: DirectStructIfSupComponent;
  let fixture: ComponentFixture<DirectStructIfSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectStructIfSupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectStructIfSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
