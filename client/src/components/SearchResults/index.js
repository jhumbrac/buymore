import React, {useContext, useState, useEffect} from "react";
import "./style.css";
import ProductsContext from '../../utils/ProductsContext';

export default function SearchResults() {
    const products = useContext(ProductsContext);
    const [popPicks, setPopPicks] = useState([]);
    function trending(results) {
        console.log("results " + results)
        return(
            <div className="trending" key={results.sku}>
                <img src={results.images.standard} alt={results.names.title} />
                <h3>{results.names.title}</h3>
            </div>
        )
    }

    useEffect(() => {
        getDeal();
    }, []);

    function getDeal() {
        fetch("https://api.bestbuy.com/beta/products/trendingViewed?apiKey=sNjFsLUXQNzY0WtaPHDAMOWe")
        .then(res => res.json())
        .then(results => {
            setPopPicks(results.results);
        })
        .catch(err => console.log(err))
    }
    function renderPopPicks() {
        return(
            <div>
                <h2>Today's Popular Picks</h2>
                <p>See what's catching people's attention.</p>
                {popPicks.map(e=> (
                    // console.log(e)
                    <div className="trending" key={e.sku}>
                        <img src={e.images.standard} alt={e.names.title} />
                        <h3>{e.names.title}</h3>
                        <p>{e.customerReviews.averageScore} ({e.customerReviews.count})</p>
                        <h4>{e.prices.current}<span>{ (e.prices.current !== e.prices.regular) ? e.prices.regular : null}</span></h4>
                    </div>
                ))}
            </div>
        )
    }
    function renderRow(product) {
        return (
            <tr key={product.sku}>
                <td>{product.name}</td>
                <td>{product.salePrice}</td>
                <td><img src={product.mediumImage} /></td>
                <td>
                    <button onClick={ ()=> {} }>Add</button>
                </td>
            </tr>
        )
    }
    return (
        <div className="container">
            <section className="aboveFold clearfix">
                <div className="full">
                    <img src="images/nerdherd.webp" alt="Nerd Herd logo" type="image/webp"/>
                </div>
                <div className="half">
                    {renderPopPicks()}
                </div>
                <div className="half">
                    
                </div>
            </section>
            <section className="featured">

            </section>
            <section className="results">
                <h2>Search Results</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>&nbsp;</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(renderRow)}
                    </tbody>
                </table>
            </section>
        </div>
    )
}