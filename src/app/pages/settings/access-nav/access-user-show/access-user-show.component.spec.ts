import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessUserShowComponent } from './access-user-show.component';

describe('AccessUserShowComponent', () => {
  let component: AccessUserShowComponent;
  let fixture: ComponentFixture<AccessUserShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessUserShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessUserShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
