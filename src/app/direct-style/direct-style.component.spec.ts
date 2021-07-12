import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectStyleComponent } from './direct-style.component';

describe('DirectStyleComponent', () => {
  let component: DirectStyleComponent;
  let fixture: ComponentFixture<DirectStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
