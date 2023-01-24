import greekSalad from '../icons_assets/greek salad.jpg'
import restaurantFood from  '../icons_assets/restauranfood.jpg'
import bruchetta from '../icons_assets/bruchetta.svg'
import LemonDessert from '../icons_assets/lemon dessert.jpg'
import RobertImage from '../icons_assets/Robert.webp'
import JohnImage from "../icons_assets/John.webp"
import LoreImage from "../icons_assets/Lore.jpeg"


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
                <h1> Little Lemon</h1>
                <img src={restaurantFood} alt="restaurant food"/>
                <h2>Chicago</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <button>Reserve a Table</button>
            </div>
            <div className='pre-Article'>
            <h1>This weeks specials!</h1>
            <button>Online Menu</button>
            </div>
            <article>
                <div className='Article1'>
                    <img src={greekSalad} alt="greek salad"/>
                    <h2>Greek salad</h2>
                    <h3>$12.99</h3>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
                    <a href='/#'>Order a delivery</a>
                </div>
                <div className="Article2">
                    <img src={bruchetta} alt="bruchetta"/>
                    <h2>Bruchetta</h2>
                    <h3>$5.99</h3>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
                    <a href='/#'>Order a delivery</a>
                </div>
                <div className='Article3'>
                    <img src={LemonDessert} alt='Lemmon dessert '/>
                    <h2>Lemmon Dessert</h2>
                    <h3>$5.00</h3>
                    <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                    <a href='/#'>Order a delivery</a>
                </div>
            </article>

            <article>
                <h1>Testimonials</h1>
                <div className='test_items'>
                    <ul>
                        {Testimonials.map((item, index) => {
                            return (
                                <li key={index}>
                                    <h1>{item.Rating}</h1>
                                    <img src={item.Picture} alt={item.Name}/>
                                    <h2>{item.Name}</h2>
                                    <p>{item.Review}</p>
                                </li>
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