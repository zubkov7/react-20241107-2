const router = require("express").Router();
const { nanoid } = require("nanoid");
const { restaurants, products, reviews, users } = require("./mock");
const { reply, getById, updateById } = require("./utils");

router.get("/restaurants", (req, res, next) => {
  console.log("request");
  reply(res, restaurants);
});

router.get("/restaurant/:restaurantId", (req, res, next) => {
  const restaurantId = req.params?.restaurantId;
  let restaurant;

  if (restaurantId) {
    restaurant = getById(restaurants)(restaurantId);
  }

  reply(res, restaurant);
});

router.get("/dishes", (req, res, next) => {
  const { restaurantId, dishId } = req.query;
  let result = products;

  if (restaurantId) {
    const restaurant = getById(restaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.menu.map(getById(result));
    }
  }

  if (!restaurantId && dishId) {
    result = getById(result)(dishId);
  }
  reply(res, result);
});

router.get("/dish/:dishId", (req, res, next) => {
  const dishId = req.params?.dishId;
  let product;

  if (dishId) {
    product = getById(products)(dishId);
  }
  reply(res, product);
});

router.get("/reviews", (req, res, next) => {
  const { restaurantId } = req.query;
  let result = reviews;
  if (restaurantId) {
    const restaurant = getById(restaurants)(restaurantId);
    if (restaurant) {
      result = restaurant.reviews.map(getById(result));
    }
  }
  reply(res, result);
});

router.post("/review/:restaurantId", (req, res, next) => {
  const body = req.body;
  const restaurantId = req.params?.restaurantId;
  const restaurant = restaurantId && getById(restaurants)(restaurantId);
  let newReview = {};

  if (restaurant && body) {
    const newReviewId = nanoid();

    newReview = {
      ...body,
      id: newReviewId,
    };
    restaurant.reviews.push(newReviewId);
    reviews.push(newReview);
  }

  reply(res, newReview);
});

router.patch("/review/:reviewId", (req, res, next) => {
  const body = req.body;
  const reviewId = req.params?.reviewId;
  let updatedReview;

  if (reviewId) {
    updatedReview = updateById(reviews)(reviewId, body);
  }

  reply(res, updatedReview);
});

router.get("/users", (req, res, next) => {
  reply(res, users);
});

module.exports = router;
