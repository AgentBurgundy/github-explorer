import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomRepoComponent } from './random-repo.component';

describe('RandomRepoComponent', () => {
  let component: RandomRepoComponent;
  let fixture: ComponentFixture<RandomRepoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomRepoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
