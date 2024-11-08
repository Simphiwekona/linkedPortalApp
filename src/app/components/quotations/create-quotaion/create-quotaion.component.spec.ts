import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateQuotaionComponent } from './create-quotaion.component';

describe('CreateQuotaionComponent', () => {
  let component: CreateQuotaionComponent;
  let fixture: ComponentFixture<CreateQuotaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateQuotaionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateQuotaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
