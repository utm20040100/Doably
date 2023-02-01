import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdminMaestroPage } from './admin-maestro.page';

describe('AdminMaestroPage', () => {
  let component: AdminMaestroPage;
  let fixture: ComponentFixture<AdminMaestroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMaestroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminMaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
