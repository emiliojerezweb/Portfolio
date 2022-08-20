import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoestudioComponent } from './nuevoestudio.component';

describe('NuevoestudioComponent', () => {
  let component: NuevoestudioComponent;
  let fixture: ComponentFixture<NuevoestudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoestudioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoestudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
