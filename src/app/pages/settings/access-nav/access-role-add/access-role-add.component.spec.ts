import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessRoleAddComponent } from './access-role-add.component';

describe('AccessRoleAddComponent', () => {
  let component: AccessRoleAddComponent;
  let fixture: ComponentFixture<AccessRoleAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessRoleAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessRoleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
