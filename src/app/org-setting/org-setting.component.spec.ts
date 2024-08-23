import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSettingComponent } from './org-setting.component';

describe('OrgSettingComponent', () => {
  let component: OrgSettingComponent;
  let fixture: ComponentFixture<OrgSettingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrgSettingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrgSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
