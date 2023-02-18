import greekSalad from '../icons_assets/greek salad.svg'
import restaurantFood from  '../icons_assets/restauranfood.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import LemonDessert from '../icons_assets/lemon dessert.svg'
import RobertImage from '../icons_assets/Robert.webp'
import JohnImage from "../icons_assets/John.webp"
import LoreImage from "../icons_assets/Lore.jpeg"
import Image1 from "../icons_assets/Mario and Adrian A.jpg"
import Image2 from "../icons_assets/Mario and Adrian b.jpg"
import { Routes } from 'react-router-dom'
import BookingForm from './BookingForm'

export const Testimonials=[
    {
        Rating: "5 stars",
        Name: "Robert",
        Review:"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        Picture: RobertImage,
    },
    {
        Rating: "4 stars",
        Name: "Lore",
        Review: "Sed eget tortor eros. Maecenas magna diam, lobortis id nulla id.",
        Picture: LoreImage,
    },
    {
        Rating: "5 stars",
        Name: "John",
        Review: "Duis eget maximus eros. In sed quam magna.",
        Picture: JohnImage,
    },
]



function Main2(){
    <Routes>
            <Route path="/" element={Main2}></Route>
            <Route path="/Greeting" element={section}></Route>
            <Route path="./BookingPage" element={BookingForm}></Route>
        </Routes>
    return(
        <main>
            <section className="firstSection">
                <div>
                    <article className='firstSection'>
                        <div className='firstDescription'>
                            <h1>Little Lemon</h1>
                            <h2>Chicago</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            <button>Reserve a Table</button>
                        </div>
                        <div className='imageFirst'>
                            <img src={restaurantFood} alt="restaurant food"/>
                        </div>
                    </article>
                </div>
            </section>
            <section>
                <div className='pre-Article'>
                    <h1>This week specials!</h1>
                    <button id='buttonTitle'> Online Menu</button>
                </div>
            </section>
            <section className='secondSection'>
                <article>
                    <div className="Special">
                        <img src={greekSalad} alt="greek salad"/>
                        <div className='Title_Price'>
                            <h2>Greek Salad</h2>
                            <h3>$12.99</h3>
                        </div>
                        <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                        <div className='delivery'>
                            <a href='/#'>Order a delivery  <span class="material-symbols-outlined">pedal_bike</span></a>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="Special bruchetta">
                        <img src={bruchetta} alt="bruchetta"/>
                        <div className='Title_Price'>
                            <h2>Bruchetta</h2>
                            <h3>$5.99</h3>
                        </div>
                        <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                        <div className='delivery'>
                            <a href='/#'>Order a delivery  <span class="material-symbols-outlined">pedal_bike</span></a>
                        </div>
                    </div>
                </article>
                <article>
                    <div className="Special Lemon">
                        <img src={LemonDessert} alt="Lemon Dessert"/>
                        <div className='Title_Price'>
                            <h2>Lemon Dessert</h2>
                            <h3>$5.00</h3>
                        </div>
                        <p id='third'>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                        <div className='delivery'>
                            <a href='/#'>Order a delivery  <span class="material-symbols-outlined">pedal_bike</span></a>
                        </div>
                    </div>
                </article>
            </section>
            <section className='thirdSection'>
                    <ul>
                        <h1>Testimonials</h1>
                        {Testimonials.map((item, index) => {
                            return (
                                <article className='ArticleTest'>
                                    <li key={index}>
                                            <h1>{item.Rating}</h1>
                                                <span id='SpanTest'>
                                                        <img src={item.Picture} alt={item.Name}/>
                                                        <h2>{item.Name}</h2>
                                                </span>
                                            <p>{item.Review}</p>
                                    </li>
                                </article>
                            );
                        })}
                    </ul>
            </section>
            <section>
                <article className='forthSection'>
                    <div className='Title'>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
                    </div>
                    <div className='images'>
                        <img src ={Image1} alt="Mario and Adrian A"/>
                        <img src ={Image2} alt="Mario and Adrian B"/>
                    </div>
                </article>
            </section>

        </main>
    )
}

export default Main2;





