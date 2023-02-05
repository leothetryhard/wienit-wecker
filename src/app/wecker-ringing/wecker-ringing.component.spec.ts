import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeckerRingingComponent } from './wecker-ringing.component';

describe('WeckerRingingComponent', () => {
  let component: WeckerRingingComponent;
  let fixture: ComponentFixture<WeckerRingingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeckerRingingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeckerRingingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
