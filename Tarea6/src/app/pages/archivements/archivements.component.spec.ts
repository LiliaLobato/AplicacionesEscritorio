import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivementsComponent } from './archivements.component';

describe('ArchivementsComponent', () => {
  let component: ArchivementsComponent;
  let fixture: ComponentFixture<ArchivementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArchivementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
