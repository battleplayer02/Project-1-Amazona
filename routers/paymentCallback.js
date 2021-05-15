import express from "express";
import PaytmChecksum from "../PaytmChecksum.js";
import formidable from "formidable";
let callBackRouter = express.Router();

callBackRouter.post("/callback", (req, res) => {
    if (req.body.STATUS === "TXN_SUCCESS") {
        res.redirect(`https://amazona-himanshu.herokuapp.com/ordersucess/${req.body.ORDERID}/${req.body.TXNID}/${req.body.TXNDATE}/${req.body.RESPMSG}`)
    } else {
        res.send(req.body)
    }
})
export default callBackRouter