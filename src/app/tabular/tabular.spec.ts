import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablubarData } from './tabular';

describe('Tabular', () => {
  let component: TablubarData;
  let fixture: ComponentFixture<TablubarData>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablubarData]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablubarData);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
