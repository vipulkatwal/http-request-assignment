import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataDisplayComponent } from './data-display.component';

describe('DataDisplayComponent', () => {
  let component: DataDisplayComponent;
  let fixture: ComponentFixture<DataDisplayComponent>;

  beforeEach(async () => {
    // Set up the testing module for the component
    await TestBed.configureTestingModule({
      imports: [DataDisplayComponent],
    }).compileComponents();

    // Create the component instance and trigger change detection
    fixture = TestBed.createComponent(DataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // Verify the component was created successfully
    expect(component).toBeTruthy();
  });
});
