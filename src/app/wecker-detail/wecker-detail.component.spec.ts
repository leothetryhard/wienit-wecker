import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeckerDetailComponent } from './wecker-detail.component';

describe('WeckerDetailComponent', () => {
  let component: WeckerDetailComponent;
  let fixture: ComponentFixture<WeckerDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeckerDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeckerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
