
## PWA application for Homenet.Online

# first start
## Prepare laravel

    composer install
    php artisan telescope:install
    php artisan migrate
    php artisan key:generate

## .env

    APP_URL=http://localhost

    DB_CONNECTION=pgsql
    DB_HOST=127.0.0.1
    DB_PORT=5432
    DB_DATABASE=nyana_dev
    DB_USERNAME=nyana_dev
    DB_PASSWORD=nyana_dev

    SANCTUM_STATEFUL_DOMAINS=127.0.0.1:8000,127.0.0.1:3000,localhost:3000,localhost:8000

## npm

    npm install


# dev

    php artisan config:cache; php artisan route:cache; php artisan view:cache; php artisan optimize; php artisan serve
    npm run watch



## Картинки для иконок, тарифов....

- https://www.pngegg.com/en/search?q=fiber+optic
- https://www.vecteezy.com/vector-art/7606314-set-of-vector-icons-related-to-internet-of-things-contains-such-icons-as-internet-of-things-smart-home-smart-light-smartphone-smart-car-smartwatch-and-more
- https://www.vecteezy.com/vector-art/830172-technology-background-with-glowing-planet
- https://www.vecteezy.com/vector-art/698209-data-technology-room-landing-page
- https://www.vecteezy.com/vector-art/680335-fiber-optic-connection-cable
- https://www.vecteezy.com/vector-art/681860-high-speed-fiber-optic-technology
- https://www.vecteezy.com/vector-art/830921-high-speed-1gbps-internet-concept
- https://www.vecteezy.com/vector-art/1879438-young-people-move-between-the-words-internet-can-use-for-landing-page-template-web-mobile-app-poster-banner-flyer-vector-illustration-online-promotion-internet-marketing-finance-trading
- https://www.vecteezy.com/free-vector/internet
- https://www.freepngimg.com/png/75322-things-of-euclidean-vector-internet-technology-icon
- может это будет лого: https://www.vecteezy.com/vector-art/6605015-set-of-hexagon-logo-collection-with-modern-concept-technology-computer-data-internet-premium-vector
