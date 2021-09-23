import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescriptionFeaturesComponent } from './description-features.component';

describe('DescriptionFeaturesComponent', () => {
  let component: DescriptionFeaturesComponent;
  let fixture: ComponentFixture<DescriptionFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DescriptionFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DescriptionFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
