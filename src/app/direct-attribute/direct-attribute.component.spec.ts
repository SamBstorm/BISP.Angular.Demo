import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectAttributeComponent } from './direct-attribute.component';

describe('DirectAttributeComponent', () => {
  let component: DirectAttributeComponent;
  let fixture: ComponentFixture<DirectAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
