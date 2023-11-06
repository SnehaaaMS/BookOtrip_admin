import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUserRoleComponent } from './access-user-role.component';

describe('AccessUserRoleComponent', () => {
  let component: AccessUserRoleComponent;
  let fixture: ComponentFixture<AccessUserRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessUserRoleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
