# SKB Gurgaon Cafe

A full-stack café site built with an Angular frontend, Laravel API, and MySQL.

## Start locally

1. Create the database: `mysql -u root -p -e "CREATE DATABASE solis_cafe;"`
2. In `backend`, run `php artisan migrate --seed` and then `php artisan serve`.
3. In `frontend`, run `npm start`.
4. Visit `http://localhost:4200`.

The API runs at `http://127.0.0.1:8000/api`, exposing menu items and reservation creation.
