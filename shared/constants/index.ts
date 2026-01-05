// Shared constants for SIYB Platform

// API Configuration
export const API_BASE_URL = 'http://localhost:8000/api';

// Environment-specific configuration should be handled by the consuming app
export const getApiBaseUrl = (envUrl?: string): string => {
  return envUrl || API_BASE_URL;
};

// SIYB Modules
export const SIYB_MODULES = {
  GYB: {
    name: 'Generate Your Business Idea',
    slug: 'gyb',
    description: 'Discover and develop your business ideas',
    order: 1,
  },
  SYB: {
    name: 'Start Your Business',
    slug: 'syb', 
    description: 'Turn your business idea into reality',
    order: 2,
  },
  IYB: {
    name: 'Improve Your Business',
    slug: 'iyb',
    description: 'Optimize and grow your existing business',
    order: 3,
  },
  EYB: {
    name: 'Expand Your Business',
    slug: 'eyb',
    description: 'Scale your business to new markets',
    order: 4,
  },
} as const;

// User Roles
export const USER_ROLES = {
  STUDENT: 'student',
  INSTRUCTOR: 'instructor',
  ADMIN: 'admin',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  HEALTH: '/health/',
  AUTH: {
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    LOGOUT: '/auth/logout/',
    PROFILE: '/auth/profile/',
  },
  MODULES: {
    LIST: '/modules/',
    DETAIL: (slug: string) => `/modules/${slug}/`,
  },
  PROGRESS: {
    USER: (userId: number) => `/progress/user/${userId}/`,
    MODULE: (moduleSlug: string, userId: number) => `/progress/module/${moduleSlug}/user/${userId}/`,
  },
} as const;

// Validation Rules
export const VALIDATION = {
  PASSWORD_MIN_LENGTH: 8,
  USERNAME_MIN_LENGTH: 3,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
} as const;

// UI Constants
export const COLORS = {
  PRIMARY: '#007bff',
  SECONDARY: '#6c757d', 
  SUCCESS: '#28a745',
  WARNING: '#ffc107',
  DANGER: '#dc3545',
  INFO: '#17a2b8',
} as const;