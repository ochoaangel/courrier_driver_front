import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeiveryInfoStoragePage } from './deivery-info-storage.page';

describe('DeiveryInfoStoragePage', () => {
  let component: DeiveryInfoStoragePage;
  let fixture: ComponentFixture<DeiveryInfoStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeiveryInfoStoragePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeiveryInfoStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
