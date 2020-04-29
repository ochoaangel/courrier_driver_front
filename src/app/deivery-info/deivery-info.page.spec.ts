import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeiveryInfoPage } from './deivery-info.page';

describe('DeiveryInfoPage', () => {
  let component: DeiveryInfoPage;
  let fixture: ComponentFixture<DeiveryInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeiveryInfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeiveryInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
