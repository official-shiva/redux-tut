import React from 'react';

function Home() {
    return (
        <>
        <div className="add-to-cart">
            <img src="https://www.shutterstock.com/image-vector/shopping-cart-icon-vector-illustration-260nw-1726574749.jpg" alt="" />
        </div>
            <h1>Home Conponent</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKHY69NQI7mLGd3cevEUL1Hp2yMaz490sOzQ&usqp=CAU" alt="" />
                </div>

                <div className="text-wrapper item">
                    <span>IPhone</span>
                    <span>Price: $13500.00</span>
                </div>

                <div className="btn-wrapper">
                    <button>Add To Cart</button>
                </div>
            </div>
        </>
    )
}

export default Home;