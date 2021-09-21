import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderThirdRowComponent } from './header-third-row.component';

describe('HeaderThirdRowComponent', () => {
  let component: HeaderThirdRowComponent;
  let fixture: ComponentFixture<HeaderThirdRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderThirdRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderThirdRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
