import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondRowComponent } from './header-second-row.component';

describe('HeaderSecondRowComponent', () => {
  let component: HeaderSecondRowComponent;
  let fixture: ComponentFixture<HeaderSecondRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSecondRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSecondRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
