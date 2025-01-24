import React from "react";
import { FaPlane } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { TfiTime } from "react-icons/tfi";
import { SiDevexpress } from "react-icons/si";
import "./Blog.css";
import { Link } from "react-router-dom";
import Repair from "../../image/REPAIRS-Scott-Watchmaking-1.png";

function BlogItem() {
  return (
    <div className="mainblog">
      <div className="containerblog ">
        <h1>THE ALBERTO LIFESTYLE</h1>
        <p>
          INSPIRED BY THE GO-GETTERS & THE RADICAL PURSUIT OF AUTHENTICITY, OUR
          ALBERTO COMMUNITY IS UNITED BY THOSE WHO DARE TO LIVE LIFE ON THEIR
          OWN TERMS.
        </p>
      </div>

      <div className="blogsection">
        <p>
          <FaPlane className="icon" /> Free Shipping Worldwide
        </p>
        <p>
          <FaBook className="icon" />
          10 Year Warranty
        </p>
        <p>
          <TfiTime className="icon" />
          60 Days Free Returns
        </p>
        <p>
          <SiDevexpress className="icon" /> Express Delivery
        </p>
      </div>

      <div className="researchblog">
        <div className="research_container">
          <div>
            <h1>WATCMAKING IS OUR FAMILY TRADITION</h1>
          </div>
          <div className="researchtitle">
            <p>
              Alberto Watch Company is a family-owned & operated watch retail
              and watch repair store located in the heart of Central Florida:
              Winter Park. Started by Scott Heisler, a 2nd generation watchmaker
              and Owner & Head Watchmaker, as a Rolex trained watchmaker and
              watchmaker to the trade almost 40 years ago. Today, Alberto Watch
              Company is a family team with a passion for horology. We share our
              love of watches & horology with collectors, watch aficionados and
              young generations. Our store is centered around the craft of watch
              repair, offering a full range of watch services by our team of
              certified, factory trained watchmakers. We service all brands we
              carry.
            </p>
          </div>

          <Link path="/contact"> Contact us</Link>
        </div>
        <div className="researchImg">
          <img src={Repair} alt="" />
        </div>
      </div>

      <div className="research__policy">
        <h1>REFUND POLICY</h1>
        <br />
        <div className="research__page">
          <p>
            We have a 14-day return policy, which means you have 14 days after
            receiving your item to request a return.
          </p>
          <br />
          <br />
          <p>
            To be eligible for a return, your item must be in the same condition
            that you received it, unworn or unused, with tags, and in its
            original packaging. You’ll also need the receipt or proof of
            purchase. You will be eligible for an exchange of the product or a
            store credit.
          </p>
          <br />
          <p>Return by mail</p>
          <p>
            To start a return, you can contact us at sales@shopalbertopr.com and
            indicate the reason(s) for the return and whether you wish to
            exchange the item or to receive a store credit in the amount you
            paid for the item. If your return is accepted, we’ll send you a
            return authorization #, as well as instructions on how and where to
            send your package. Items sent back to us without first requesting a
            return will not be accepted. Customers will be responsible for all
            the shipping of the returned merchandise.
          </p>
          <br />
          <p>Return in Store</p>
          <p>
            Alternatively, you may return your purchased item in the store.
            Please make sure to bring receipt or proof of purchase.
            <br />
            <br />
            You can always contact us for any return question at
            sales@shopalbertopr.com.
          </p>
          <br />
          <p>Damages and issues</p>
          <p>
            Please inspect your order upon receiving and contact us immediately
            if the item is defective, damaged or if you receive the wrong item,
            so that we can evaluate the issue and make it right.
          </p>
          <br />
          <p>Exceptions / non-returnable items</p>
          <p>
            Personalized special orders may not be returned nor exchanged.
            Unfortunately, we cannot accept returns on final sale items or gift
            cards.
          </p>
          <br />
          <p>
            Shipping Charges are non-refundable for all returned or exchanged
            items.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
