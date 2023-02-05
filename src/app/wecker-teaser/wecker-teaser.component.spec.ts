import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeckerTeaserComponent } from './wecker-teaser.component';

describe('WeckerTeaserComponent', () => {
  let component: WeckerTeaserComponent;
  let fixture: ComponentFixture<WeckerTeaserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeckerTeaserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeckerTeaserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
