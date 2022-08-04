const express = require("express");
const request = require("request-promise");
const { wakeDyno, wakeDynos } = require("heroku-keep-awake");
const DYNO_URL = "https://explore-amazon-api.herokuapp.com/";

const opts = {
    interval: 29,
    logging: false,
    stopTimes: { start: '00:00', end: '06:00' }
}

const app = express();
const PORT = process.env.PORT || 5000;

const generateScraperUrl = (apiKey) =>
	`http://api.scraperapi.com?api_key=${apiKey}&autoparse=true`;

app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to Explore Amazon API.");
});

//Get product details
app.get("/products/:productId", async (req, res) => {
	const { productId } = req.params;
	const { api_key } = req.query;
	try {
		const response = await request(
			`${generateScraperUrl(
				api_key
			)}&url=https://www.amazon.com/dp/${productId}`
		);

		res.json(JSON.parse(response));
	} catch (error) {
		res.json(error);
	}
});

//Get product reviews
app.get("/products/:productId/reviews", async (req, res) => {
	const { productId } = req.params;
	const { api_key } = req.query;

	try {
		const response = await request(
			`${generateScraperUrl(
				api_key
			)}&url=https://www.amazon.com/product-reviews/${productId}`
		);

		res.json(JSON.parse(response));
	} catch (error) {
		res.json(error);
	}
});

//Get product offers
app.get("/products/:productId/offers", async (req, res) => {
	const { productId } = req.params;
	const { api_key } = req.query;

	try {
		const response = await request(
			`${generateScraperUrl(
				api_key
			)}&url=https://www.amazon.com/gp/offer-listing/${productId}`
		);

		res.json(JSON.parse(response));
	} catch (error) {
		res.json(error);
	}
});

//Get Search Results
app.get("/search/:searchQuery", async (req, res) => {
	const { searchQuery } = req.params;
	const { api_key } = req.query;

	try {
		const response = await request(
			`${generateScraperUrl(
				api_key
			)}&url=https://www.amazon.com/s?k=${searchQuery}`
		);

		res.json(JSON.parse(response));
	} catch (error) {
		res.json(error);
	}
});

app.listen(PORT, () => {
	wakeDyno(DYNO_URL, opts); // Use this function when only needing to wake a single Heroku app.
	console.log(`Server running on port ${PORT}`);
});
