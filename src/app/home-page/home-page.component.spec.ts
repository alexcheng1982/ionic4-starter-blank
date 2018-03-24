import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePageComponent } from './home-page.component';
import {By} from '@angular/platform-browser';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have the correct title', () => {
    expect(component).toBeTruthy();
    const title = fixture.debugElement.query(By.css('ion-title')).nativeElement.textContent;
    expect(title).toEqual('Home');
  });
});
