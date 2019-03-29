import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPopupListComponent } from './modal-popup-list.component';

describe('ModalPopupListComponent', () => {
  let component: ModalPopupListComponent;
  let fixture: ComponentFixture<ModalPopupListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPopupListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPopupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
