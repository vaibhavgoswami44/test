// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const fs = require('fs')
// require('dotenv').config()

import { GoogleGenerativeAI } from "@google/generative-ai"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



let element = `<div class="_5Pmv5S"><div class="row"><div class="col col-11-12 rYpYQA">Product Details</div><div class="col col-1-12 cWwIYq"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNCIgaGVpZ2h0PSIxNCI+PHBhdGggZmlsbD0iIzg3ODc4NyIgZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNMTQgOEg4djZINlY4SDBWNmg2VjBoMnY2aDZ6Ii8+PC9zdmc+"></div></div><div class="row IbygeN"><div class="row _1IK+Dg"><div class="sBVJqn"><div class="row"><div class="col col-3-12 _9NUIO9" style="font-weight: bold; color: red; font-size: 20px;">Fabric</div><div class="col col-9-12 -gXFvC">Cotton Blend</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Type</div><div class="col col-9-12 -gXFvC">Kurta and Pyjama Set</div></div><div class="row"><div class="col col-3-12 _9NUIO9" style="font-weight: bold; color: red; font-size: 20px;">Sales Package </div><div class="col col-9-12 -gXFvC">1 Pathani suit</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Style Code </div><div class="col col-9-12 -gXFvC">PP4500H</div></div><div class="row"><div class="col col-3-12 _9NUIO9" style="font-weight: bold; color: red; font-size: 20px;">Top fabric</div><div class="col col-9-12 -gXFvC">Cotton Blend</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Top type</div><div class="col col-9-12 -gXFvC">Kurta</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Bottom type </div><div class="col col-9-12 -gXFvC">Salwar</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Pattern</div><div class="col col-9-12 -gXFvC">Solid</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Color </div><div class="col col-9-12 -gXFvC">White</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Occasion</div><div class="col col-9-12 -gXFvC">Festive &amp; Party</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Neck </div><div class="col col-9-12 -gXFvC">Collared Neck</div></div><div class="row"><div class="col col-3-12 _9NUIO9">Season</div><div class="col col-9-12 -gXFvC">EOSS-3-2022</div></div><div class="row"><div class="col col-3-12 _9NUIO9" style="font-weight: bold; color: red; font-size: 20px;">Fabric care</div><div class="col col-9-12 -gXFvC">Dry in shade., Do not bleach., Wash saparate colors in cold water., Regular machine wash.</div></div><div class="_4aGEkW">GREAT AS A GIFT FOR MEN: Everyone uses partywear on numerous occasions, give this kurta Pant set as a thoughtful gift for your loved one's next birthday, anniversary, wedding or any occasion. This is why it makes the perfect present for your dad, husband, son, or friend.
BEAUTIFUL HANDLOOM Kurta Pant SET : This is 2-pieces set that includes long button down shirt or kurta and a drawstring Pant. There is beautiful weaving design and button designs on placket and collar that adds beauty to this set. Traditional design on this kurta captures all of the details of the classic Indian men's garment with long sleeves, a long hemline with side vents and a mandarin collar.
NOTE-If there is any size issue you can choose an option for exchanging the product instead of returning the product.
Product description
*The Pathani dress has full sleeves with cuffs, a short button placket on the chest area which further has two patch pockets on either side of it.* Pathani Suit Product Size Guidance (A) Sizes for this style are slightly on a LARGER side when compared to SHIRT sizes. So do check out the 'CHEST' size measurement in point B and order the size best suited to you. (B) Kurta's actual chest measurement is 4 inches more i.e. for 6 Sizes we offer: M (36), L (38), XL(40), XXL (42), XXXL (44) &amp; 4XL (46) actual product chest will be M - 42 ; L - 44 ; XL - 46 ; XXL - 48 ; XXXL - 50 &amp; 4XL - 52 inches respectively. Occasion : Festive &amp; Party, Casual, Formal, Wedding *Fabric: Cotton Ruby; Sleeves: Full; Neck: Collar; Fit: Regular/Comfort *Product colour may slightly vary due to photographic lighting sources or your monitor settings. *By: SLKS INDIA CRAFT  In, Manufacturer and Trader in Delhi (Since 2007)
Fit Type: Regular
STYLE : Pathani Suit || COLLAR TYPE - Classic || SLEEVE - Long sleeve with cuff buttons || KURTA LENGTH - Mid thigh || FABRIC -Cotton Rubby || FIT - Regular || BOTTOM TYPE - Pant with drawstring closure. Care Instructions: Hand Wash Only
SOFT AND DURABLE : Exhibiting a smooth texture and finesse, this traditional men's wear is made to withstand years of use.</div><div class="t7DWYS">Manufacturing, Packaging and Import Info</div></div></div></div></div>`


const flipkartPromt = `${element} get product details`;

const flipkartProductDetails = async (prompt) => {
    let a = await model.generateContent([prompt]);
    let result = a.response.text()

    // console.log(`flipkart : \n\n  ${result}`);

    return result

};

let meeshoElement = `<div class="sc-ftTHYK jfdUoi ProductDescription__DetailsCardStyled-sc-1l1jg0i-0 eFKyvM ProductDescription__DetailsCardStyled-sc-1l1jg0i-0 eFKyvM" color="white"><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Name<!-- -->&nbsp;:&nbsp;<!-- -->PATHANI SUIT COTTON FOR MENS (KURTA + PYJAMA )</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre" style="font-weight: bold; color: red; font-size: 20px;">Top Fabric<!-- -->&nbsp;:&nbsp;<!-- -->Cotton Blend</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre" style="font-weight: bold; color: red; font-size: 20px;">Bottom Fabric<!-- -->&nbsp;:&nbsp;<!-- -->Cotton Blend</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre" style="font-weight: bold; color: red; font-size: 20px;">Scarf Fabric<!-- -->&nbsp;:&nbsp;<!-- -->No Scarf</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Sleeve Length<!-- -->&nbsp;:&nbsp;<!-- -->Long Sleeves</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Bottom Type<!-- -->&nbsp;:&nbsp;<!-- -->Patiala</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Stitch Type<!-- -->&nbsp;:&nbsp;<!-- -->Stitched</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Pattern<!-- -->&nbsp;:&nbsp;<!-- -->Solid</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Sizes<!-- -->&nbsp;:&nbsp;<!-- -->&nbsp;</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">S (Top Length Size<!-- -->&nbsp;:&nbsp;<!-- -->34 in, Bottom Waist Size: 27 in, Bottom Length Size: 38 in)</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">M (Top Length Size<!-- -->&nbsp;:&nbsp;<!-- -->36 in, Bottom Waist Size: 30 in, Bottom Length Size: 39 in)</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">L (Top Length Size<!-- -->&nbsp;:&nbsp;<!-- -->38 in, Bottom Waist Size: 32 in, Bottom Length Size: 40 in)</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">XL (Top Length Size<!-- -->&nbsp;:&nbsp;<!-- -->40 in, Bottom Waist Size: 35 in, Bottom Length Size: 41 in)</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">XXL (Top Length Size<!-- -->&nbsp;:&nbsp;<!-- -->41 in, Bottom Waist Size: 37 in, Bottom Length Size: 42 in)</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">&nbsp;</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Care Instructions<!-- -->&nbsp;:&nbsp;<!-- -->It is First Wash recommended to Dry clean and next to machine wash Separately, Do not use brush, Medium iron required.</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Fit Type<!-- -->&nbsp;:&nbsp;<!-- -->Regular</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre" style="font-weight: bold; color: red; font-size: 20px;">Made of Best quality cotten blend Linen Look wrinkle free fabric, With finished Standard Quality stitched.</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Regular/ Comfort /dashing Knee length Kurta (kameez) and wide shalwar with Size<!-- -->&nbsp;:&nbsp;<!-- -->S/36 M/38- L/40- XL/42- XXL/44 -XXX/46 in multi color</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">OCCASIONS<!-- -->&nbsp;:&nbsp;<!-- -->Party, eid, diwali, Festivals Celebration, and great for Gifting, Weddings anniversary, birthday.</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">It keeps you comfortable all day long and that gives you a unique look. The pathani suit has full sleeves with cuffs, a short button placket on the chest area which further has two patch pockets on either side of it.</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">MULTICOLOR AVAILABLE<!-- -->&nbsp;:&nbsp;<!-- -->White, Green, Navy Blue, Black,</p><p font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa pre pre">Country of Origin<!-- -->&nbsp;:&nbsp;<!-- -->India</p><span font-size="16px" font-weight="book" color="greyT1" class="sc-eDvSVe guezwa ProductDescription__MoreInfoCaption-sc-1l1jg0i-1 dEqish ProductDescription__MoreInfoCaption-sc-1l1jg0i-1 dEqish">More Information</span></div>`;
const meeshoPrompt = `${element} get product details`;

const meeshoProductDetails = async (prompt) => {
    let a = await model.generateContent([prompt]);
    let result = a.response.text()

    // console.log(`flipkart : \n\n  ${result}`);

    return result

};


let f = await flipkartProductDetails(flipkartPromt)
let m = await meeshoProductDetails(meeshoElement)


let matchPrompt = ` flipkart product Details is   ${f}    meesho product details is ${m} and product images are both product are same ?`

const image = {
    inlineData: {
        data: Buffer.from(fs.readFileSync("flipkart.webp")).toString("base64"),
        mimeType: "image/png",
    },
    inlineData: {
        data: Buffer.from(fs.readFileSync("meesho.webp")).toString("base64"),
        mimeType: "image/png",
    },
};



const matchProduct = async (prompt, image) => {
    let a = await model.generateContent([prompt, image]);
    let result = a.response.text()

    console.log(`flipkart : \n\n  ${result}`);

    return result

};
console.log(matchProduct(matchPrompt, image));
