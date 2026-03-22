// Shared TypeScript types for Mustard Steps Consulting Platform
// These types should match your Django models

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
}

export interface MustardStepsModule {
  id: number;
  name: string;
  description: string;
  slug: string;
  order: number;
}

// Mustard Steps Consulting Business Modules
export interface GYBModule extends MustardStepsModule {
  type: 'gyb';
}

export interface SYBModule extends MustardStepsModule {
  type: 'syb';
}

export interface IYBModule extends MustardStepsModule {
  type: 'iyb';
}

export interface EYBModule extends MustardStepsModule {
  type: 'eyb';
}

// Progress tracking
export interface UserProgress {
  id: number;
  user: number;
  module: string;
  completion_percentage: number;
  current_step: number;
  total_steps: number;
  completed_at?: string;
}

// API Response types
export interface APIResponse<T> {
  status: string;
  message: string;
  data?: T;
}

export interface HealthResponse {
  status: string;
  message: string;
  version: string;
}