import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUserOperationComponent } from './access-user-operation.component';

describe('AccessUserOperationComponent', () => {
  let component: AccessUserOperationComponent;
  let fixture: ComponentFixture<AccessUserOperationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessUserOperationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessUserOperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
