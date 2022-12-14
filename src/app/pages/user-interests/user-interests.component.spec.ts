import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { UserInterestsComponent } from './user-interests.component';

describe('UserInterestsComponent', () => {
  let component: UserInterestsComponent;
  let fixture: ComponentFixture<UserInterestsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserInterestsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInterestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
