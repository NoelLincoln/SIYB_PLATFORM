// Shared utility functions for both frontend and backend

// Validation utilities
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  return password.length >= 8;
};

export const isValidUsername = (username: string): boolean => {
  return username.length >= 3 && /^[a-zA-Z0-9_]+$/.test(username);
};

// Format utilities
export const formatDate = (date: string | Date): string => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

export const formatDateTime = (date: string | Date): string => {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

export const formatPercentage = (value: number): string => {
  return `${Math.round(value)}%`;
};

// String utilities
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const capitalize = (text: string): string => {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

export const truncate = (text: string, length: number): string => {
  return text.length > length ? `${text.substring(0, length)}...` : text;
};

// Progress calculation
export const calculateProgress = (completed: number, total: number): number => {
  return total === 0 ? 0 : Math.round((completed / total) * 100);
};

// API utilities
export const buildApiUrl = (endpoint: string, baseUrl?: string): string => {
  const base = baseUrl || 'http://localhost:8000/api';
  return `${base}${endpoint}`;
};

// Error handling
export class APIError extends Error {
  constructor(
    message: string,
    public status: number,
    public data?: any
  ) {
    super(message);
    this.name = 'APIError';
  }
}