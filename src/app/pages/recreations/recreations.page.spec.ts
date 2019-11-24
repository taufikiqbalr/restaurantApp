import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecreationsPage } from './recreations.page';

describe('RecreationsPage', () => {
  let component: RecreationsPage;
  let fixture: ComponentFixture<RecreationsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecreationsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecreationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
