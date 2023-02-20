import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { MaestrosPage } from './maestros.page';

describe('MaestrosPage', () => {
  let component: MaestrosPage;
  let fixture: ComponentFixture<MaestrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaestrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MaestrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
