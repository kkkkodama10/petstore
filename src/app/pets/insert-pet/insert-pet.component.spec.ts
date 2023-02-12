import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertPetComponent } from './insert-pet.component';

describe('InsertPetComponent', () => {
  let component: InsertPetComponent;
  let fixture: ComponentFixture<InsertPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
