import React from 'react'
import './cards.css'
import react from '../../Assets/cardImages/react.png'
function Cards() {
    return (
        <div>
           <div class="wrapper">

{/* <h2><strong>All Games<span>( 4 )</span></strong></h2> */}

<div class="cards">

    <figure class="card">

        <img src={react} />

        <figcaption>React Js</figcaption>

    </figure>

    <figure class="card">

        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/2.jpg" />

        <figcaption>Stick Fight</figcaption>

    </figure>

    <figure class="card">

        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/3.jpg" />

        <figcaption>Minion Masters</figcaption>

    </figure>

    <figure class="card">

        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/4.jpg" />

        <figcaption>KoseBoz!</figcaption>

    </figure>

</div>

<h2><strong>What's new?</strong></h2>

<div class="news">

    <figure class="article">

        <img src={react} />

        <figcaption>

            <h3>New Item</h3>

            <p>

               React Js
            </p>

        </figcaption>

    </figure>

    <figure class="article">

        <img src="https://mrreiha.keybase.pub/codepen/hover-fx/news2.png" />

        <figcaption>

            <h3>Update</h3>

            <p>

                Just in time for Lunar New Year and the Rat’s time in the cyclical place of honor, the Treasure of Unbound Majesty is now available.

            </p>

        </figcaption>

    </figure>

</div>

</div>
        </div>
    )
}

export default Cards
