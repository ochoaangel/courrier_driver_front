import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeiveryInfoWarehousePage } from './deivery-info-warehouse.page';

describe('DeiveryInfoWarehousePage', () => {
  let component: DeiveryInfoWarehousePage;
  let fixture: ComponentFixture<DeiveryInfoWarehousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeiveryInfoWarehousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeiveryInfoWarehousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
