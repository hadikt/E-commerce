import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatnewComponent } from './whatnew.component';

describe('WhatnewComponent', () => {
  let component: WhatnewComponent;
  let fixture: ComponentFixture<WhatnewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatnewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
