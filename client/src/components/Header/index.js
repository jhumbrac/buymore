import React from "react";
import SearchBar from "../SearchBar";
import "./style.css";

export default function Header() {
    const downArrow = () => {
        return (
            <svg width="12" height="10" viewBox="0 0 32 32" fill="#fff"><path d="M16.046 21.647a.974.974 0 0 1-.588-.197L3.12 12.153a.98.98 0 0 1 1.177-1.562l11.75 8.854 11.748-8.854a.978.978 0 0 1 1.178 1.562L16.635 21.45a.974.974 0 0 1-.589.197"></path></svg>
        )
    }
    return (
        <header>
            <div className="topNav clearfix">
                <a href="/" className="logo"><img src="images/logo.png" alt="Company Logo"/></a>
                <div className="rightContainer">
                    <nav className="dealsGifts">
                        <a href="#">Credit Cards</a>
                        <a href="#">Top Deals</a>
                        <a href="#">Deal of the Day</a>
                        <a href="#">Gift Cards</a>
                        <a href="#">Gift Ideas</a>
                        <a href="#">For Your Business</a> 
                    </nav>
                    <SearchBar />
                    <div className="utility">
                        <button onClick={e=>{e.preventDefault()}}>
                            <svg width="30" height="31" viewBox="0 0 32 32" fill="#fff"><path d="M28.907 11.924h-3.785a.978.978 0 000 1.956h3.785c.139 0 .256.117.256.255v13.864a.26.26 0 01-.256.256h-5.025v-4.597c0-.837-.68-1.517-1.517-1.517h-9.727c-.822 0-1.442.652-1.442 1.517v4.597H6.237a.272.272 0 01-.269-.269V16.467l15.701-.001c.54 0 .978-.438.978-.978l-.001-12.645a.978.978 0 00-.978-.978H5.81a.98.98 0 00-.672.267L1.201 5.854a.979.979 0 00-.306.711l.002 5.103c0 .264.107.517.296.7L4.04 15.14c-.007.047-.027.09-.027.138v12.71c0 1.226.997 2.223 2.224 2.223h22.67c1.22 0 2.211-.991 2.211-2.21V14.134c0-1.22-.991-2.211-2.21-2.211zM2.851 6.986L6.2 3.82h14.492V14.51L6.2 14.511l-3.347-3.256v-4.27zm19.076 21.27h-3.48v-4.16h3.48v4.16zm-8.775-4.16h3.34v4.16h-3.34v-4.16zM6.382 9.057a.975.975 0 01-.978.978.98.98 0 01-.977-.978.98.98 0 01.977-.978c.543 0 .978.435.978.978z"></path></svg> Nashville West
                        </button>
                        <a href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" width="32" height="32"><path d="M9.829 19.824h17.575c.452 0 .845-.31.951-.75l2.9-12.137a.978.978 0 0 0-.952-1.205H9.876a.978.978 0 0 0 0 1.955h19.188L26.632 17.87H9.829c-.064 0-.124.015-.188.019L6.107 1.818a.978.978 0 0 0-.955-.769H1.697a.978.978 0 0 0 0 1.956h2.669l3.418 15.543a3.465 3.465 0 0 0-1.432 2.797c0 1.304.73 2.428 1.793 3.023a3.994 3.994 0 0 0-.932 2.548 4.04 4.04 0 0 0 4.034 4.035 4.04 4.04 0 0 0 4.035-4.035c0-.77-.228-1.482-.603-2.094h7.59a3.999 3.999 0 0 0-.597 2.094c0 2.225 1.809 4.035 4.034 4.035s4.034-1.81 4.034-4.035c0-1.926-.914-2.916-1.682-3.407-.936-.6-1.956-.647-2.247-.647-.024 0-.042.004-.065.005H9.83a1.523 1.523 0 0 1-1.521-1.522c0-.838.682-1.521 1.521-1.521zm1.418 9.172a2.082 2.082 0 0 1-2.079-2.08c0-1.146.933-2.08 2.08-2.08a2.081 2.081 0 0 1-.001 4.16zm16.539-2.08c0 1.147-.934 2.08-2.08 2.08a2.082 2.082 0 0 1-2.08-2.08c0-1.146.934-2.08 2.08-2.08h.013c.06 0 .119-.006.175-.017.29.013.91.113 1.34.515.366.341.552.874.552 1.582z"/></svg> Cart
                        </a>
                    </div>
                </div>
            </div>
            <div className="navWrapper clearfix">
                <nav className="mainNav">
                    <button onClick={e=>{e.preventDefault()}}>Products {downArrow()}</button>
                    <button onClick={e=>{e.preventDefault()}}>Brands {downArrow()}</button>
                    <button onClick={e=>{e.preventDefault()}}>Deals {downArrow()}</button>
                    <button onClick={e=>{e.preventDefault()}}>Services {downArrow()}</button>
                </nav>
                <nav className="clientPortal">
                    <button onClick={e=>{e.preventDefault()}}>
                        <svg width="20" height="20" viewBox="0 0 32 32" fill="#fff"><path d="M16 .76C7.596.76.76 7.595.76 16S7.595 31.24 16 31.24 31.24 24.404 31.24 16 24.404.76 16 .76zm10.23 23.706V23.19c0-2.6-1.136-5.06-3.118-6.747a.978.978 0 1 0-1.267 1.49 6.895 6.895 0 0 1 2.43 5.257v3.185A13.212 13.212 0 0 1 16 29.286a13.212 13.212 0 0 1-8.275-2.91V23.19c0-2.966 1.948-5.626 4.752-6.548A5.856 5.856 0 0 0 16 17.823c3.242 0 5.88-2.629 5.88-5.86s-2.638-5.86-5.88-5.86-5.88 2.63-5.88 5.86c0 1.154.34 2.227.92 3.135-3.149 1.404-5.27 4.584-5.27 8.093v1.273A13.224 13.224 0 0 1 2.714 16C2.715 8.674 8.675 2.715 16 2.715S29.286 8.675 29.286 16c0 3.214-1.149 6.165-3.056 8.466zM12.076 11.963c0-2.152 1.76-3.904 3.924-3.904s3.924 1.752 3.924 3.904-1.76 3.904-3.924 3.904-3.924-1.752-3.924-3.904z"></path></svg> Account{downArrow()}
                    </button>
                    <button onClick={e=>{e.preventDefault()}}>Recently Viewed{downArrow()}</button>
                    <button onClick={e=>{e.preventDefault()}}>Order Status{downArrow()}</button>
                    <button onClick={e=>{e.preventDefault()}}>Saved Items</button>
                </nav>
            </div>
        </header>
    )
}