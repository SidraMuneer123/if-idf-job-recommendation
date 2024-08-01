// src/recommendation/recommendation.controller.ts

import { Controller, Get, Query } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';

interface UserPreferencesQuery {
  industry?: string;
  type?: 'full-time' | 'part-time';
  role?: 'senior' | 'junior';
}

@Controller('recommendation')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Get()
  getRecommendations(@Query() query: UserPreferencesQuery) {
    return this.recommendationService.recommendJobs(query);
  }
}
