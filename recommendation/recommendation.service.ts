
import { Injectable } from '@nestjs/common';
import { TfIdf } from 'natural';
import { Job, jobs } from './data/jobs.data';

interface UserPreferences {
  industry?: string;
  type?: 'full-time' | 'part-time';
  role?: 'senior' | 'junior';
}

@Injectable()
export class RecommendationService {
  private jobs: Job[] = jobs;

  recommendJobs(userPreferences: UserPreferences): Job[] {
    const tfidf = new TfIdf();

    // Create documents for each job based on its attributes
    this.jobs.forEach((job, index) => {
      const document = this.createDocumentFromJob(job);
      tfidf.addDocument(document, index.toString());
    });

    // Create a document from user preferences
    const userDocument = this.createDocumentFromPreferences(userPreferences);

    // Calculate similarity for each job
    const similarities = this.jobs.map((_, index) => ({
      index,
      similarity: tfidf.tfidf(userDocument, index),
    }));

    // Sort by similarity score in descending order
    similarities.sort((a, b) => b.similarity - a.similarity);

    // Return the top N similar jobs
    const topN = 3; // Number of recommendations to return
    return similarities.slice(0, topN).map(sim => this.jobs[sim.index]);
  }

  private createDocumentFromJob(job: Job): string {
    return `${job.title} ${job.industry} ${job.type} ${job.role}`;
  }

  private createDocumentFromPreferences(preferences: UserPreferences): string {
    return `${preferences.industry || ''} ${preferences.type || ''} ${preferences.role || ''}`;
  }
}
