import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatefirstComponent } from './templatefirst.component';

describe('TemplatefirstComponent', () => {
  let component: TemplatefirstComponent;
  let fixture: ComponentFixture<TemplatefirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatefirstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatefirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
