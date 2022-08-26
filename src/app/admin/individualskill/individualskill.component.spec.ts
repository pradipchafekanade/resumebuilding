import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualskillComponent } from './individualskill.component';

describe('IndividualskillComponent', () => {
  let component: IndividualskillComponent;
  let fixture: ComponentFixture<IndividualskillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualskillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualskillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
