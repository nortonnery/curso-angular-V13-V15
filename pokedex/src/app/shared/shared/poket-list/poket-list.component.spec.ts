import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoketListComponent } from './poket-list.component';

describe('PoketListComponent', () => {
  let component: PoketListComponent;
  let fixture: ComponentFixture<PoketListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoketListComponent]
    });
    fixture = TestBed.createComponent(PoketListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
