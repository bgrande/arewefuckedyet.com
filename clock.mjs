"use strict"

import got from "got"
import * as cheerio from "cheerio"
import fetch from "node-fetch"
import fs from "fs";
// import nodemailer from "nodemailer"

// @todo send a mail if sth. went wrong (i.e. parsing/getting data from websites) -> nodejs_email?

const getDoomsDayClockData = async () => {
    const { body } = await got("https://thebulletin.org/doomsday-clock/")

    const $ = cheerio.load(body);
    const element = await $(".fl-heading-text").first();
    const text = await element.text();

    const { groups: parsed } = text.match(/(?<sentence>.*: )?IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: parsed.sentence.replace(': ', '')
    };
};

const getWarsData = async () => {
    // https://en.wikipedia.org/wiki/List_of_ongoing_armed_conflicts
    const { body } = await got("https://thebulletin.org/doomsday-clock/")

    const $ = cheerio.load(body);
    const element = await $(".fl-heading-text").first();
    const text = await element.text();

    const { groups: parsed } = text.match(/(?<sentence>.*: )?IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: parsed.sentence.replace(': ', '')
    };
};

const getClimateChangeData = async () => {
    // https://github.com/KKulma/climate-change-data
    // https://data.planetos.com/?_ga=2.11167284.1285555397.1580183579-715137525.1580183579
    // https://datahelpdesk.worldbank.org/knowledgebase/articles/902061-climate-data-api#:~:text=The%20Climate%20Data%20API%20provides,World%20Bank's%20Terms%20of%20Use.
    const { body } = await got("https://thebulletin.org/doomsday-clock/")

    const $ = cheerio.load(body);
    const element = await $(".fl-heading-text").first();
    const text = await element.text();

    const { groups: parsed } = text.match(/(?<sentence>.*: )?IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: parsed.sentence.replace(': ', '')
    };
};

const getWaterPolutionData = async () => {
    // https://waterservices.usgs.gov/rest/
    // https://waterservices.usgs.gov/rest/Site-Test-Tool.html
    // https://waterservices.usgs.gov/nwis/site/?format=rdb&sites=01646500&outputDataTypeCd=dv,qw&siteStatus=all
    // https://www.api.gov.uk/ea/water-quality/#water-quality
    const { body } = await got("https://thebulletin.org/doomsday-clock/")

    const $ = cheerio.load(body);
    const element = await $(".fl-heading-text").first();
    const text = await element.text();

    const { groups: parsed } = text.match(/(?<sentence>.*: )?IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: parsed.sentence.replace(': ', '')
    };
};

const getNewsSentiment = async () => {
    // https://newsapi.org/
    // https://gnews.io/
    // https://newscatcherapi.com/google-news-api
    // https://developers.google.com/apps-script/samples/automations/news-sentiment
    // https://news.google.com/rss/search?q=apple&hl=de&gl=DE&ceid=DE:de
    const { body } = await got("https://thebulletin.org/doomsday-clock/")

    const $ = cheerio.load(body);
    const element = await $(".fl-heading-text").first();
    const text = await element.text();

    const { groups: parsed } = text.match(/(?<sentence>.*: )?IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: parsed.sentence.replace(': ', '')
    };
};

const getOrbitPolutionData = async () => {
    const { body } = await got("https://thebulletin.org/doomsday-clock/")

    const $ = cheerio.load(body);
    const element = await $(".fl-heading-text").first();
    const text = await element.text();

    const { groups: parsed } = text.match(/(?<sentence>.*: )?IT IS(?: STILL)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: parsed.sentence.replace(': ', '')
    };
};

const getCovidData = async () => {
    const request = await fetch("https://api.covid19api.com/summary")
    const asJson = await request.json();

    return asJson.Global;
};

//fs.writeFile('doomsday.json', await getDoomsDayClockData().then((data) => JSON.stringify(data)), (err) => {console.log(err)});