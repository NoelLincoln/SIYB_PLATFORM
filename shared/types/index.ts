// Shared TypeScript types for SIYB Platform
// These types should match your Django models

export interface User {
  id: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  date_joined: string;
}

export interface SIYBModule {
  id: number;
  name: string;
  description: string;
  slug: string;
  order: number;
}

// SIYB Business Modules
export interface GYBModule extends SIYBModule {
  type: 'gyb';
}

export interface SYBModule extends SIYBModule {
  type: 'syb';
}

export interface IYBModule extends SIYBModule {
  type: 'iyb';
}

export interface EYBModule extends SIYBModule {
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