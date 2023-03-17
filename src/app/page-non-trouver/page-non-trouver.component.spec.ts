import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNonTrouverComponent } from './page-non-trouver.component';

describe('PageNonTrouverComponent', () => {
  let component: PageNonTrouverComponent;
  let fixture: ComponentFixture<PageNonTrouverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNonTrouverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNonTrouverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
