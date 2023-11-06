import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessNavComponent } from './access-nav.component';

describe('AccessNavComponent', () => {
  let component: AccessNavComponent;
  let fixture: ComponentFixture<AccessNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccessNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccessNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
