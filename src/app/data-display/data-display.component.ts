import { Component, OnInit } from '@angular/core';
import { DataService, Item } from '../data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.css'],
})
export class DataDisplayComponent implements OnInit {
  items: Item[] = []; // Store fetched items
  error: string = ''; // Handle any error messages
  sortOrder: 'asc' | 'desc' = 'asc'; // Track current sort order

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Fetch data as soon as the component is initialized
    this.fetchData();
  }

  fetchData(): void {
    this.dataService.getData().subscribe({
      next: (data) => {
        this.items = data; // Assign fetched data
        this.sortItems(); // Sort based on current order
      },
      error: (err) => {
        this.error = 'Failed to fetch data. Please try again later.'; // Set error message
        console.error('Error:', err); // Log the error for debugging
      },
    });
  }

  sortItems(): void {
    // Sort items by title based on current sort order
    this.items.sort((a, b) => {
      return this.sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title);
    });
  }

  toggleSort(): void {
    // Switch between ascending and descending order
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortItems(); // Apply the new sort order
  }
}
