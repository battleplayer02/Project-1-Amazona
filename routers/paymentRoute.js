import express from "express";
import PaytmChecksum from "../PaytmChecksum.js";

let paymentRouter = express.Router();


paymentRouter.post('/api/config/paytm', (req, res) => {
    let { amount, orderid, email } = req.body;
    const totalAmount = amount
    let params = {}
    params['MID'] = "pmAxeE74338028590323"
    params['WEBSITE'] = "WEBSTAGING"
    params['CHANNEL_ID'] = "WEB"
    params['INDUSTRY_TYPE_ID'] = "Retail"
    params['ORDER_ID'] = orderid
    params['CUST_ID'] = "123"
    params['TXN_AMOUNT'] = "1.00"
    params['CALLBACK_URL'] = 'https://amazona-himanshu.herokuapp.com/callback'
    params['EMAIL'] = email
    params['MOBILE_NO'] = '9690299790'

    var paytmChecksum = PaytmChecksum.generateSignature(params, "lVSz1L7YYOvoSCXC");
    paytmChecksum.then(function (checksum) {
        let paytmParams = {
            ...params,
            "CHECKSUMHASH": checksum
        }
        res.send(paytmParams)
    }).catch(function (error) {
        console.log(error);
    });
})
export default paymentRouter
