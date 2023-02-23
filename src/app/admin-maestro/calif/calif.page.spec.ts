import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalifPage } from './calif.page';

describe('CalifPage', () => {
  let component: CalifPage;
  let fixture: ComponentFixture<CalifPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalifPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalifPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
