import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElsoCardComponent } from './elso-card.component';

describe('ElsoCardComponent', () => {
  let component: ElsoCardComponent;
  let fixture: ComponentFixture<ElsoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElsoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElsoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
