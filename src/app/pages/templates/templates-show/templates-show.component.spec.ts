import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatesShowComponent } from './templates-show.component';

describe('TemplatesShowComponent', () => {
  let component: TemplatesShowComponent;
  let fixture: ComponentFixture<TemplatesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplatesShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
