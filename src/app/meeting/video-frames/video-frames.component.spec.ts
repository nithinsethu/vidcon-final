import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoFramesComponent } from './video-frames.component';

describe('VideoFramesComponent', () => {
  let component: VideoFramesComponent;
  let fixture: ComponentFixture<VideoFramesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoFramesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoFramesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
