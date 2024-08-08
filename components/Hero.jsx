"use client"
import { useState, useEffect } from 'react';
import './Hero.css';
import Image from 'next/image';
import mainImg from './img/main-img.png';
import bowl from './img/bowl.svg';
import hamburger from './img/hamburger.svg';
import tropic from './img/tropic.svg';
import cake from './img/cake.svg';
import Link from "next/link";
import Breadcrumb from './Breadcrumb';

const Hero = ({ searchQuery }) => {
    const [activeButton, setActiveButton] = useState('Noodles');
    const [foods, setFoods] = useState([]);
    const defaultImage = '/img/default-food.png';

    const buttons = [
        { name: 'Noodles', image: bowl },
        { name: 'Burger', image: hamburger },
        { name: 'Drink', image: tropic },
        { name: 'Desert', image: cake },
    ];

    useEffect(() => {
        const loadFoods = async () => {
            try {
                const res = await fetch("https://dummyjson.com/recipes");
                if (!res.ok) {
                    throw new Error("Couldn't connect to dummy json");
                }
                const data = await res.json();
                setFoods(data.recipes);
            } catch (error) {
                console.error(error);
            }
        };
        loadFoods();
    }, []);

    const filteredFoods = foods.filter(food =>
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className='container hero__container'>
            <Breadcrumb isDisabled={true} />
            <div className='hero__item'>
                <div>
                    <h1 className='heroTitle'>It’s not just Food, it’s an Experience</h1>
                    <p className='heroText'>Order Your Favourite food & enjoy your day</p>
                </div>
                <div className='mainImg'>
                    <Image src={mainImg} alt='img' width={371} height={316} />
                </div>
            </div>
            <section className='buttons_section'>
                <div className='buttons'>
                    {buttons.map((button) => (
                        <button
                            key={button.name}
                            className={`btn ${activeButton === button.name ? 'active' : ''}`}
                            onClick={() => setActiveButton(button.name)}
                        >
                            <Image className='btn_img' src={button.image} alt='img' width={77} height={62} />
                            {button.name}
                        </button>
                    ))}
                </div>
            </section>
            <section className='food_cards_section'>
                <div className='food_cards'>
                    {filteredFoods.map((food) => (
                        <div key={food.id} className='food_card'>
                            <Link href={`/${food.id}`}>
                                <Image
                                    src={food.image ? food.image : defaultImage}
                                    alt={food.name}
                                    width={200}
                                    height={150}
                                />
                                <h3>{food.name}</h3>
                                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                                <p className="rating">Rating: ⭐⭐⭐⭐⭐{food.rating} </p>
                                <h5 className="price"> $28.6</h5>
                            </Link>
                            <button className='cards_btn'>+</button>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Hero;
