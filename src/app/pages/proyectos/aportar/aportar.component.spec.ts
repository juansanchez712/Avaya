import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AportarComponent } from './aportar.component';

describe('AportarComponent', () => {
  let component: AportarComponent;
  let fixture: ComponentFixture<AportarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AportarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AportarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
