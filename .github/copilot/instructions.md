# Copilot Instructions for TFG Refactor to DDD and Clean Architecture

## Project Context

This repository contains the refactoring of a Higher Education Final Project (TFG) from a traditional MVC architecture to Domain-Driven Design (DDD) with Clean Architecture patterns. The original project is a sports federation management system that handles clubs, teams, players, referees, facilities, matches, and more.

## Original Structure vs New Structure

### Original Structure (MVC)
- Located in `/apps/old` directory
- Backend: Express.js with MongoDB
- Frontend: Svelte with TailwindCSS
- Organized by technical concerns (controllers, models, routes)

### New Structure (DDD & Clean Architecture)
- Located in `/src` directory
- Organized by business domains (Contexts)
- Each context follows Clean Architecture principles

## Migration Guidelines

When assisting with this project, follow these principles:

### General

1. **Domain-First Thinking**: All code changes should prioritize expressing the domain model clearly.
2. **Bounded Contexts**: Each subdomain should be treated as a separate bounded context with clear boundaries.
3. **Ubiquitous Language**: Use consistent terminology within each bounded context that matches the domain experts' language.

### Code Structure

1. Each context should be structured following Clean Architecture layers:
   - **Domain Layer**: Contains entities, value objects, domain services, and repository interfaces
   - **Application Layer**: Contains use cases/application services
   - **Infrastructure Layer**: Contains implementations of repository interfaces and external services

2. Domain objects should be:
   - **Entity**: Objects with identity (e.g., `Club`, `Player`)
   - **Value Object**: Immutable objects without identity (e.g., `Address`, `PlayerStats`)
   - **Aggregate**: Cluster of domain objects treated as a unit (e.g., `Club` with its `Teams`)
   - **Repository**: Interface for persistence operations on aggregates

### Migration Process

For each context being migrated, follow these steps:

1. Identify the domain models in the original implementation (analyze models, controllers, routes)
2. Define the domain layer with proper entities, value objects, and aggregates
3. Extract domain logic from controllers into application services
4. Create repository interfaces in the domain layer
5. Implement repositories in the infrastructure layer
6. Update API controllers to use application services

### Specific Domain Contexts

When working with specific domains, consider these guidelines:

#### Arbitro (Referee)
- Handle referee registration, availability, and match assignments
- Consider referee qualifications and categories

#### Club & Equipo (Club & Team)
- Club is an aggregate root containing teams
- Teams have players and staff members

#### Jugador (Player)
- Handle player registration, transfers between teams
- Store player statistics and history

#### Partido (Match)
- Handle match scheduling, results, and referee assignments
- Consider pre-match, in-match, and post-match states

#### User
- Handle authentication, authorization
- Consider different user roles (admin, club manager, referee, etc.)

## Testing Guidelines

1. Domain logic should be tested in isolation
2. Use mocks for repository interfaces when testing application services
3. Integration tests should verify repository implementations

## Naming Conventions

1. Use Spanish names for domain concepts (as per the original project)
2. Use English for technical concepts
3. Class and interface names should be PascalCase
4. Method and variable names should be camelCase

## Tech Stack Guidance

### Backend
- TypeScript for strong typing
- Express.js for API endpoints
- MongoDB for persistence
- Jest for testing

### Frontend
- Continue using Svelte
- Adapt frontend to new API structure as backend changes

## Helpful Resources

- DDD Reference: https://www.domainlanguage.com/ddd/reference/
- Clean Architecture: https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html
- CQRS Pattern: https://martinfowler.com/bliki/CQRS.html

## Migration Status

The following domains need to be migrated:
- [ ] User
- [ ] Club
- [ ] Team (Equipo)
- [ ] Player (Jugador)
- [ ] Referee (Arbitro)
- [ ] Sports Facility (Pabellon)
- [ ] Match (Partido)
- [ ] Sanctions (Sancion)
- [ ] Staff
- [ ] Category (Categoria)
