"use strict"

import got from "got"
import * as cheerio from "cheerio"
import fs from "fs";

const getDoomsDay = async () => {
    const { body } = await got("https://thebulletin.org/doomsday-clock/current-time/")

    const $ = cheerio.load(body);
    const timeSentence = await $(".fl-rich-text h2").first();
    const textTime = await timeSentence.text().replace("\xa0", " ");
    let sentenceResult = '';

    const { groups: parsed } = textTime.match(/(?<sentence>.*: )?IT IS(?: STILL| NOW)? (?<time>\d+)(?: AND A (?<half>HALF))? (?<type>MINUTES|MINUTE|SECONDS|SECOND) TO MIDNIGHT/i)

    if (parsed.sentence) {
        sentenceResult = parsed.sentence;
    } else {
        const sentence = await $("h2.fl-heading .fl-heading-text").last();
        sentenceResult = await sentence.text().replace("\xa0", " ");
    }
    const seconds = parsed.type === "seconds" ? Number(parsed.time) : (Number(parsed.time) * 60) + (parsed.half ? 30 : 0)

    return {
        type: 'seconds',
        time: seconds,
        sentence: sentenceResult.replace(': ', '').replace(':', '') ?? ''
    };
};

const parsedData = await getDoomsDay().then((data) => JSON.stringify(data));

if (parsedData) {
    fs.writeFile('doomsday.json', parsedData, (err) => console.log(err));
}
