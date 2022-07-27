import React from "react";
import "./Home.css";
import Product from "./Product";


function Home(){
    return(
<div className="home">
    <div className="home_container">
        <img className="home_image"
        src="https://store-images.s-microsoft.com/image/apps.24594.13510798887500496.393115ce-aadd-41b0-a06b-6de8b907aa10.b4898b91-921e-43ef-aedc-8a0e423c95d5?mode=scale&q=90&h=1080&w=1920" alt="" />
        </div>
    <div className="home_row">
    <Product 
    id = "1234434555"
    title="Slothcloud Smart Watches for Men Women,Fitness Activity Tracker Watch for iOS Android"
    image = "https://5.imimg.com/data5/JY/EH/RH/ANDROID-17547272/product-jpeg-500x500.jpg"
    price ={99.99}
    rating={4}
    />
    <Product 
    id = "12343423555"
    title="Slothcloud Smart BV Bicycle Pump Ergonomic Bike Floor Pump with Gauge, Bike Pump with Air Ball Pump Inflator, for Men Women,Fitness Activity Tracker Watch for iOS Android"
    image = "https://www.shutterstock.com/image-photo/black-electric-bike-side-view-isolated-1180883086"
     price ={9.99}
    rating={3}
    />
    </div>

    <div className="home_row">
    <Product id = "1234334555"
     title="Slothcloud Smart Watches for Men Women,Fitness Activity Tracker Watch for iOS Android"
    image = "https://5.imimg.com/data5/JY/EH/RH/ANDROID-17547272/product-jpeg-500x500.jpg"
    price ={19}
    rating={5}
    />
     <Product 
      id = "1234344555"
       title="2022 Apple iPad Air (10.9-inch, Wi-Fi, 64GB) - Blue (5th Generation) Smart Watches for Men Women,Fitness Activity Tracker Watch for iOS Android"
    image = "https://www.shutterstock.com/image-photo/ipad-pro-11inch-2021-model-apple-1977692381"
    price ={249}
    rating={5}
    />
     <Product   id = "1234344555"
     title="OnePlus 8 Glacial Green,​ 5G Unlocked Android Smartphone U.S Version"
    image = "https://www.shutterstock.com/image-photo/bangkok-thailand-oneplus-launch-new-smartphone-1731300991"
    price ={550}
    rating={4}
    />
    </div>

    <div className="home_row">
    <Product  id = "12334355"
     title="Intex Challenger Kayak Inflatable Set with Aluminum OarsSlothcloud Smart Watches for Men Women,Fitness Activity Tracker Watch for iOS Android"
    image = "https://www.shutterstock.com/image-photo/full-set-scuba-diving-equipment-fins-1643900578"
    price ={89}
    rating={2}
    />
    </div>

</div>
)}


export default Home;