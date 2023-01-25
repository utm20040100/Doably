import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SeleccionPage } from './seleccion.page';

describe('SeleccionPage', () => {
  let component: SeleccionPage;
  let fixture: ComponentFixture<SeleccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleccionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SeleccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
