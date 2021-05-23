import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekordCardComponent } from './rekord-card.component';

describe('RekordCardComponent', () => {
  let component: RekordCardComponent;
  let fixture: ComponentFixture<RekordCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekordCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekordCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
