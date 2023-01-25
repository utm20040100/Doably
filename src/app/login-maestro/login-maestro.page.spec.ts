import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginMaestroPage } from './login-maestro.page';

describe('LoginMaestroPage', () => {
  let component: LoginMaestroPage;
  let fixture: ComponentFixture<LoginMaestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginMaestroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
