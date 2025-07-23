# Fullstack Hono + Next.js Project

Цей проєкт складається з двох частин:

- **Frontend** – побудований з використанням Next.js, Tailwind CSS та React Query.
- **Backend** – Node.js сервер з Hono framework, Knex.js для роботи з базою даних PostgreSQL.

---

## 🧰 Передумови

Перед тим як запустити проєкт, переконайтеся, що у вас встановлено:

- [Node.js (v18+)](https://nodejs.org/)
- [Docker](https://www.docker.com/)
- [pnpm](https://pnpm.io) або [npm](https://www.npmjs.com/)

---

## ⚙️ Налаштування Backend

1.  **Перейдіть до папки backend/:**

    ```bash
    cd backend
    ```

2.  **Створіть `.env` файл:**
    Скопіюйте `.env.example`:

    ```bash
    cp .env.example .env
    ```

    Переконайтесь, що у `.env` вказані правильні значення:

    ```ini
    DATABASE_URL=postgres://postgres:password@localhost:5432/mydb
    PORT=8000
    ```

3.  **Запустіть PostgreSQL через Docker:**

    ```bash
    docker run --name hono-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=mydb -p 5432:5432 -d postgres
    ```

4.  **Встановіть залежності:**

    ```bash
    pnpm install
    ```

    або

    ```bash
    npm install
    ```

5.  **Запустіть міграції бази даних:**

    ```bash
    npx knex migrate:latest
    ```

6.  **Запустіть сервер:**

    ```bash
    pnpm dev
    ```

    або

    ```bash
    npm run dev
    ```

    Сервер буде доступний на `http://localhost:8000`.

---

## 💻 Налаштування Frontend

1.  **Перейдіть до папки frontend/:**

    ```bash
    cd ../frontend
    ```

2.  **Встановіть залежності:**

    ```bash
    pnpm install
    ```

    або

    ```bash
    npm install
    ```

3.  **Запустіть фронтенд-сервер:**

    ```bash
    pnpm dev
    ```

    або

    ```bash
    npm run dev
    ```

    Фронтенд буде доступний на `http://localhost:3000`.

---

## ✅ Перевірка

1.  **Переконайтесь, що бекенд працює:**
    Відкрийте `http://localhost:8000` або спробуйте API-ендпоінт (наприклад `/api/chirps`).

2.  **Перевірте роботу фронтенду:**
    Відкрийте `http://localhost:3000` і переконайтесь, що дані з бекенду завантажуються через React Query.

---

## 📦 Додаткові скрипти

У бекенді можна використовувати:

```bash
npx knex migrate:make migration_name    # Створення нової міграції
npx knex migrate:latest                 # Застосування всіх міграцій
npx knex migrate:rollback               # Відкат останньої міграції
```
