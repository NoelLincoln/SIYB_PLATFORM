# Shared Code for Mustard Steps Consulting Platform

This directory contains code shared between the Django backend and React frontend.

## 📁 Structure

```
shared/
├── types/          # TypeScript type definitions
├── constants/      # Shared constants and configurations  
├── utils/          # Common utility functions
└── README.md       # This file
```

## 🎯 Purpose

- **Types**: TypeScript interfaces that match Django models
- **Constants**: API endpoints, validation rules, UI constants
- **Utils**: Common functions for validation, formatting, etc.

## 🔧 Usage

### In React Frontend:
```typescript
import { User, MUSTARD_STEPS_MODULES, isValidEmail } from '../shared';
```

### In Django Backend:
```python
# Django models should match the TypeScript types
# Use constants for validation rules
```

## 🔄 Keeping in Sync

When you update Django models:
1. Update corresponding TypeScript types in `/types/`
2. Update API endpoints in `/constants/`  
3. Test both frontend and backend

## 📝 Best Practices

- Keep types in sync with Django models
- Use constants instead of hardcoded values
- Share validation logic between frontend and backend
- Document any breaking changes