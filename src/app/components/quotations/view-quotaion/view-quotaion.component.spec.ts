import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuotaionComponent } from './view-quotaion.component';

describe('ViewQuotaionComponent', () => {
  let component: ViewQuotaionComponent;
  let fixture: ComponentFixture<ViewQuotaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewQuotaionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewQuotaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
