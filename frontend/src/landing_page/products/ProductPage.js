import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Univese";

function ProductPage() {
  return (
    <div>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        productName="Kite"
        productDesription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        TryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgURL="media/images/console.png"
        ProductName="Console"
        ProdictDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/coin.png"
        productName="Coin"
        productDesription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        TryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        imgURL="media/images/kiteconnect.png"
        ProductName="Kite Connect ApI"
        ProdictDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
      <LeftSection
        imageURL="media/images/varsity.png"
        productName="Varsity"
        productDesription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        TryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-10">Want to Know more about our technology stack? Check out the Zerodha. tech blog.</p>
      <Universe />
    </div>
  );
}

export default ProductPage;
