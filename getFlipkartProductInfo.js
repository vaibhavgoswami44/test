import puppeteer from 'puppeteer';
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const getFlipkartProductInfo = async (url) => {
    console.log(url);

    try {
        const browser = await puppeteer.launch({
            headless: true, // Enable headless mode for performance
            args: ['--no-sandbox', '--disable-setuid-sandbox'], // Performance flags
        });
        const page = await browser.newPage();

        // Set a reasonable timeout and handle errors with navigation
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

        // Add CSS and click buttons in a single evaluation
        await page.evaluate(() => {
            const style = document.createElement('style');
            style.innerHTML = `.Cnl9Jt .IbygeN { display: unset !important; }`;
            document.head.appendChild(style);

            const buttons = document.querySelectorAll('.QqFHMw');
            const readMoreButtons = Array.from(buttons).filter(button => button.textContent.trim() === 'Read More');
            readMoreButtons.forEach(button => button.click());
        });

        // Extract the image source
        const imageSrc = await page.evaluate(() => {
            const div = document.querySelector('div.vU5WPQ');
            const img = div?.querySelector('img');
            return img ? img.src : 'Image not found';
        });

        // Extract the page content for AI processing
        const pageText = await page.evaluate(() => document.body.innerText);

        // Use Google Generative AI to process the page text
        let aiResponse;
        try {
            const a = await model.generateContent([`${pageText} give product info and product image in object format`]);
            aiResponse = a.response.text();
        } catch (aiError) {
            console.error('AI processing error:', aiError);
            throw new Error('Failed to process content with Google Generative AI');
        }
        console.log("aiResponse=>", aiResponse);

        // Parse the AI response
        const sliceBetweenBraces = (text) => {
            const startIndex = text.indexOf('{');
            const endIndex = text.lastIndexOf('}');
            return startIndex !== -1 && endIndex !== -1 ? text.slice(startIndex, endIndex + 1) : '{}';
        };

        const slicedText = sliceBetweenBraces(aiResponse);
        let data;
        try {
            data = JSON.parse(slicedText);
        } catch (jsonError) {
            console.error('JSON parsing error:', jsonError);
            throw new Error('Failed to parse AI response into JSON');
        }

        // Add product image to the data
        data.product_image = imageSrc;

        await browser.close();
        return data; // Resolving with data
    } catch (error) {
        console.error('Error occurred:', error);
        throw error; // Rejecting with the error for further handling
    }
};


// console.log(await getFlipkartProductInfo(`https://www.flipkart.com/%20/p/%20?pid=SHIG94U7YMJDKWST`));


export default getFlipkartProductInfo;
