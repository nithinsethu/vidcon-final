import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatToggleComponent } from './chat-toggle.component';

describe('ChatToggleComponent', () => {
  let component: ChatToggleComponent;
  let fixture: ComponentFixture<ChatToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
