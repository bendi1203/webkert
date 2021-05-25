import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RekordAddComponent } from './rekord-add.component';

describe('RekordAddComponent', () => {
  let component: RekordAddComponent;
  let fixture: ComponentFixture<RekordAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RekordAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RekordAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
