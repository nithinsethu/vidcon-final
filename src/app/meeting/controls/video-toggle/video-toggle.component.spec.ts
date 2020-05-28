import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoToggleComponent } from './video-toggle.component';

describe('VideoToggleComponent', () => {
  let component: VideoToggleComponent;
  let fixture: ComponentFixture<VideoToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
