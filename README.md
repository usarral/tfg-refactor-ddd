# TFG Refactor to DDD and Clean Architecture

[![Domain-Driven Design](https://img.shields.io/badge/Architecture-Domain%20Driven%20Design-brightgreen)](https://en.wikipedia.org/wiki/Domain-driven_design)
[![Clean Architecture](https://img.shields.io/badge/Pattern-Clean%20Architecture-blue)](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)

This repository contains the refactoring of my Higher Education Final Project (TFG) to follow Domain-Driven Design (DDD) principles and Clean Architecture patterns.

## Project Overview

The original project was a sports federation management system built with a traditional monolithic architecture. This refactoring migrates the existing code to a more organized, maintainable, and scalable architecture following DDD principles.

### Key Features

- User authentication and authorization
- Club management
- Team management
- Player registration
- Referee management
- Sports facility management
- Match scheduling and results
- Sanctions management
- Staff management
- Category management

## Architecture

The project is being refactored from a traditional MVC architecture to a Domain-Driven Design with Clean Architecture approach.

### Original Structure (MVC)

```
/apps
├── TFG_Backend/ (Express.js)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── ...
└── TFG_Frontend/ (Svelte)
    └── ...
```

### New Structure (DDD & Clean Architecture)

```
/src
└── backend/
    └── Contexts/
        ├── Arbitro/ (Referee)
        ├── Categoria/ (Category)
        ├── Club/
        │   ├── club/
        │   └── equipo/ (Team)
        ├── Jugador/ (Player)
        ├── Pabellon/ (Sports Facility)
        ├── Partido/ (Match)
        ├── Staff/
        └── User/
```

Each context is organized following the Clean Architecture pattern:

```
/Context/
├── Application/ (Use cases)
├── Domain/
│   ├── Entities/
│   ├── Repositories/ (Interfaces)
│   ├── Services/ (Domain Services)
│   └── ValueObjects/
└── Infrastructure/
    ├── Persistence/
    └── Services/
```

## Benefits of the Refactoring

- **Better Organization**: Clear boundaries between domains
- **Maintainability**: Easier to understand and modify code
- **Testability**: Domain logic can be tested in isolation
- **Flexibility**: Easily adapt to changing requirements
- **Scalability**: Contexts can be extracted into microservices if needed

## Technologies

### Backend
- Node.js
- Express.js
- MongoDB

### Frontend
- Svelte
- TailwindCSS

## Comparison with Original Architecture

| Aspect | Original Architecture | DDD Architecture |
|--------|----------------------|-----------------|
| Code Organization | Based on technical layers | Based on business domains |
| Business Rules | Mixed with framework code | Isolated in domain layer |
| Dependencies | Highly coupled | Follows dependency inversion |
| Testing | Difficult to test in isolation | Easily testable domain logic |
| Flexibility | Difficult to change | Adaptable to changes |

## Project Status

This refactoring is currently in progress. The following domains have been migrated:

- [ ] User
- [ ] Club
- [ ] Team
- [ ] Player
- [ ] Referee
- [ ] Sports Facility
- [ ] Match
- [ ] Sanctions
- [ ] Staff
- [ ] Category

## How to Run

1. Clone the repository
```bash
git clone https://github.com/yourusername/tfg-refactor-ddd.git
cd tfg-refactor-ddd
```

2. Install dependencies for both backend and frontend
```bash
cd apps/TFG_Backend
npm install

cd ../TFG_Frontend
npm install
```

3. Start the backend server
```bash
cd apps/TFG_Backend
npm start
```

4. Start the frontend development server
```bash
cd apps/TFG_Frontend
npm run dev
```
