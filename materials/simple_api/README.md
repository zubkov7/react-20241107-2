# API

## Ресторан

1. GET /api/restaurants/ - все рестораны;
2. GET /api/restaurant/:restaurantId - ресторан по айдишки (/api/restaurant/d32n32d8huasj );

## Блюда

1. GET /api/dishes?restaurantId=:restaurantId - получить блюда по айди ресторана (/api/dishes?restaurantId=d32n32d8huasj)
2. GET /api/dish/:dishId - блюдо по айдишки (/api/dish/djshfusdhfi29 )

## Отзывы

1. GET /api/reviews?restaurantId=:restaurantId - получить отзывы по айди ресторана (/api/reviews?restaurantId=d32n32d8huasj)
2. POST /api/review/:restaurantId - создать отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)
3. PATCH /api/review/:reviewId - изменить отзыв по айди ресторана (/api/review/d32n32d8huasj, а в бади сам отзыв без айдишки)

## Пользователи

1. GET /api/users/ - все пользователи;
