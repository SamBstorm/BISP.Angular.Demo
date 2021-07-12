import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectHiddenComponent } from './direct-hidden.component';

describe('DirectHiddenComponent', () => {
  let component: DirectHiddenComponent;
  let fixture: ComponentFixture<DirectHiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectHiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectHiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
