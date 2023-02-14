import greekSalad from '../icons_assets/greek salad.jpg'
import restaurantFood from  '../icons_assets/restauranfood.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import LemonDessert from '../icons_assets/lemon dessert.jpg'
import RobertImage from '../icons_assets/Robert.webp'
import JohnImage from "../icons_assets/John.webp"
import LoreImage from "../icons_assets/Lore.jpeg"
import deliveryIcon from "../icons_assets/motorcycle.svg"


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

function Main(){
    return(
        <main>
            <div className="introduction">
                <div className="itemsIntro">
                    <h1> Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button>Reserve a Table</button>
                </div>
                <div className='imageIntro'>
                    <img src={restaurantFood} alt="restaurant food"/>
                </div>
            </div>
            <div className='pre-Article'>
                <div className="articleTitle">
                    <h1>This weeks specials!</h1>
                </div>
                <div className="articleButton">
                    <button id='buttonTitle'>Online Menu</button>
                </div>
            </div>
            <article>
                <div className="flex_Article">
                    <div className='Article1'>
                        <div className='imageArticle'>
                            <img src={greekSalad} alt="greek salad"/>
                        </div>
                        <div className='Articles_text'>
                            <div className='Title_and_Price'>
                                <h2>Greek salad</h2>
                                <span>$12.99</span>
                            </div>
                            <div className='descriptionArticle'>
                                <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                            </div>
                            <div className='OrderArticle'>
                                <div className='Order'>
                                    <a href='/#'>Order a delivery</a>
                                </div>
                                <div className='OrderIcon'>
                                    <img src={deliveryIcon} alt='delivery'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="Article1">
                        <div className='imageArticle'>
                            <img src={bruchetta} alt="bruchetta"/>
                        </div>
                        <div className='Articles_text'>
                            <div className='Title_and_Price'>
                                <h2>Bruchetta</h2>
                                <span>$5.99</span>
                            </div>
                            <div className='descriptionArticle'>
                                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                            </div>
                            <div className='OrderArticle'>
                                <div className='Order'>
                                    <a href='/#'>Order a delivery</a>
                                </div>
                                <div className='OrderIcon'>
                                    <img src={deliveryIcon} alt='deliver'/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Article1'>
                        <div className='imageArticle'>
                            <img src={LemonDessert} alt='Lemmon dessert '/>
                        </div>
                        <div className='Articles_text'>
                            <div className='Title_and_Price'>
                                <h2>Lemmon Dessert</h2>
                                <span>$5.00</span>
                            </div>
                            <div className='descriptionArticle'>
                                <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                            </div>
                            <div className='OrderArticle'>
                                <div className='Order'>
                                    <a href='/#'>Order a delivery</a>
                                </div>
                                <div className='OrderIcon'>
                                    <img src={deliveryIcon} alt='deliver'/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <article>
                <h1>Testimonials</h1>
                <div className='test_items'>
                    <ul>
                        {Testimonials.map((item, index) => {
                            return (
                                <div className='test_flex'>
                                    <li key={index}>
                                        <div className='user_test'>
                                            <h1>{item.Rating}</h1>
                                            <div className='user_info'>
                                                    <div className='user_picture'>
                                                        <img id='image_test' src={item.Picture} alt={item.Name}/>
                                                    </div>
                                                    <div className='user_name'>
                                                        <h2>{item.Name}</h2>
                                                    </div>
                                                </div>
                                            <p>{item.Review}</p>
                                        </div>
                                    </li>
                                </div>
                            );
                        })}
                    </ul>
                </div>
            </article>
            <article>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
            </article>
        </main>
    );
};

export default Main;