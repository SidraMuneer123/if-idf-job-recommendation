

import { Controller, Get, Query } from '@nestjs/common';
import { RecommendationService } from './recommendation.service';

@Controller('recommendations')
export class RecommendationController {
  constructor(private readonly recommendationService: RecommendationService) {}

  @Get()
  recommend(@Query('profile') profile: string): any {
    return this.recommendationService.recommendJobs(profile);
  }
}
