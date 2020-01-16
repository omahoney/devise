# README

Omahoney/Devise steps necessary to get the application up and running.

Relevant items:

* Ruby version: 2.6.5
* Rails version: 6.0.2
* Database: postgres:10.3
  - exposed port: [ may need to change if you have multiple DBs ]
* Webserver: nginx

* System dependencies
  - Webpacker
  - Bootstrap
    - Bootswatch
    - Simple_form
    - Fontawesome
  - Datatables
  - Chartkick
  - Flatpickr
  - Devise
  - ActiveAdmin

* Configuration
  -  COMPOSE_PROJECT_NAME=devise
  -  SECRET_KEY_BASE={Secret}
  -  RAILS_ENV=production
  -  RACK_ENV=production
  -  RAILS_SERVE_STATIC_FILES=false
  -  DATABASE_HOST=devise_db
  -  POSTGRES_USER=postgres
  -  POSTGRES_PASSWORD={Secret}
  -  POSTGRES_DB=devise_production
  -  SERVER_NAME={Domain name}
  -  VIRTUAL_HOST={Domain name}
  -  LETSENCRYPT_HOST={Domain name}
  -  LETSENCRYPT_EMAIL={Email}
