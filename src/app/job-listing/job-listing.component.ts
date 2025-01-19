import { Component, OnInit } from '@angular/core';
import { JobService } from '../services/job.service';
import { NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { Router } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';


@Component({
  selector: 'app-job-listing',
  standalone: true,
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css'],
  imports: [
    NgForOf,
    NgIf,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatSelectModule,
    MatSliderModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
})
export class JobListingComponent implements OnInit {
  jobs: any[] = [];
  savedJobs: any[] = [];  // Array to store saved jobs
  searchKeyword: string = '';
  isLoading: boolean = false;  // To show/hide loading spinner

  constructor(private jobService: JobService, private router: Router) {}

  ngOnInit(): void {
    this.getJobs();
  }

  getJobs(): void {
    this.isLoading = true;
    this.jobService.getJobs().subscribe((data: any) => {
      this.jobs = data;
      this.isLoading = false;
    });
  }

  searchJobs(): void {
    this.isLoading = true;
    this.jobService.searchJobs(this.searchKeyword).subscribe((data: any) => {
      this.jobs = data;
      this.isLoading = false;
    });
  }

  applyJob(job: any): void {
    // Handle the job application logic (for now, log to the console)
    console.log(`Applying for job: ${job.title} at ${job.company}`);
    // You can replace this with the actual logic to apply for a job, such as calling an API
  }

  saveJob(job: any): void {
    // Check if the job is already saved
    const jobExists = this.savedJobs.some(
      (savedJob) => savedJob.title === job.title && savedJob.company === job.company
    );

    if (jobExists) {
      alert('You have already saved this job.');
      return;
    }

    // Save the job to the savedJobs array
    this.savedJobs.push(job);
    alert(`Job "${job.title}" saved successfully!`);

    // Optionally, save to localStorage for persistence
    localStorage.setItem('savedJobs', JSON.stringify(this.savedJobs));
  }

  logout() {
    this.router.navigate(['/']); // Navigate back to the login page
  }
}
