# Laravel9 with Vue3 (Vite)

## Table of Contents

-   [About](#about)
-   [Getting Started](#getting_started)
-   [Usage](#usage)
-   [Contributing](../CONTRIBUTING.md)

## About <a name = "about"></a>

bootstrap for Laravel9 + Vue3 configured with Vite

## Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

1. Copy the .env file

```
cp .env.example .env
```

2. Change the `APP_URL` variable in `.env`

```
APP_URL=localhost:8000
```

### Installing

A step by step series of examples that tell you how to get a development env running.

1. Install php composer requirements

```
composer update
```

2. Install npm packages

```
npm install
```

## Usage <a name = "usage"></a>

1. development server for Vue3

```
npm run dev
```

2. development server for Laravel9

```
php artisan serve
```
