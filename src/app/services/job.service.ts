import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private jobs = [
    { id: 1, title: 'Software Engineer', company: 'XYZ Corp', location: 'Dubai, UAE' },
    { id: 2, title: 'Project Manager', company: 'ABC Ltd', location: 'Riyadh, Saudi Arabia' },
    { id: 3, title: 'Graphic Designer', company: 'Creative Co.', location: 'Doha, Qatar' },
    { id: 4, title: 'Data Scientist', company: 'Techno Solutions', location: 'Manama, Bahrain' },
    { id: 5, title: 'Marketing Manager', company: 'Biz Group', location: 'Abu Dhabi, UAE' },
  ];

  constructor() {}

  getJobs(): Observable<any> {
    return of(this.jobs);
  }

  searchJobs(keyword: string): Observable<any> {
    const filteredJobs = this.jobs.filter(job =>
      job.title.toLowerCase().includes(keyword.toLowerCase()) ||
      job.company.toLowerCase().includes(keyword.toLowerCase()) ||
      job.location.toLowerCase().includes(keyword.toLowerCase())
    );
    return of(filteredJobs);
  }

  applyJob(job: any): void {
    // For now, simply log the job application
    console.log(`Applying for ${job.title} at ${job.company}`);
  }
}
