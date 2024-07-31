import { Injectable } from '@nestjs/common';
import { TfIdf } from 'natural';
import { Job, jobs } from './data/jobs.data';

@Injectable()
export class RecommendationService {
  private jobs: Job[] = jobs;

  recommendJobs(userProfile: string): Job[] {
    const tfidf = new TfIdf();

    this.jobs.forEach((job, index) => {
      tfidf.addDocument(`${job.title} ${job.description} ${job.category} ${job.type}`, index.toString());
    });

    const similarities = this.jobs.map((_, index) => ({
      index,
      similarity: tfidf.tfidf(userProfile, index),
    }));

    similarities.sort((a, b) => b.similarity - a.similarity);


    const topN = 3; 
    return similarities.slice(0, topN).map(sim => this.jobs[sim.index]);
  }
}
