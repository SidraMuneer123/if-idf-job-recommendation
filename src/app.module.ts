// src/app.module.ts

import { Module } from '@nestjs/common';
import { RecommendationModule } from 'recommendation/recommendation.module';

@Module({
  imports: [RecommendationModule],
})
export class AppModule {}
