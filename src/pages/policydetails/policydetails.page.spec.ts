import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PolicydetailsPage } from './policydetails.page';

describe('PolicydetailsPage', () => {
  let component: PolicydetailsPage;
  let fixture: ComponentFixture<PolicydetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicydetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicydetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
