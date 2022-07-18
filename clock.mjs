"use strict"

import got from "got"
import * as cheerio from "cheerio"
import fs from "fs";

const getDoomsDay = async () => {
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

fs.writeFile('doomsday.json', await getDoomsDay().then((data) => JSON.stringify(data)), (err) => {console.log(err)});