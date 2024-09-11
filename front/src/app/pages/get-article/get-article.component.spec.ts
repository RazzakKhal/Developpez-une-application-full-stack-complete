import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetArticleComponent } from './get-article.component';

describe('GetArticleComponent', () => {
  let component: GetArticleComponent;
  let fixture: ComponentFixture<GetArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetArticleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
