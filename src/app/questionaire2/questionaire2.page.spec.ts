import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Questionaire2Page } from './questionaire2.page';

describe('Questionaire2Page', () => {
  let component: Questionaire2Page;
  let fixture: ComponentFixture<Questionaire2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Questionaire2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Questionaire2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
