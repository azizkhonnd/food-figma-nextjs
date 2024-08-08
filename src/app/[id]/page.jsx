"use client"
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Breadcrumb from '../../../components/Breadcrumb';
import './page.css';

const FoodDetail = () => {
    const pathname = usePathname();
    const id = pathname.split('/').pop();
    const [food, setFood] = useState(null);
    const defaultImage = 'https://cdn-icons-png.freepik.com/512/135/135161.png';
    const [isImageLoaded, setIsImageLoaded] = useState(false);

    useEffect(() => {
        if (id) {
            const loadFood = async () => {
                try {
                    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
                    if (!res.ok) {
                        throw new Error("Couldn't connect to dummy json");
                    }
                    const data = await res.json();
                    setFood(data);
                    setIsImageLoaded(true);
                } catch (error) {
                    console.error(error);
                }
            };
            loadFood();
        }
    }, [id]);

    if (!isImageLoaded) {
        return (
            <div>
                <Breadcrumb isDisabled={false} />
                <div className='single_card'>
                    <Image
                        className='food__img_single'
                        src={defaultImage}
                        alt='Loading...'
                        width={550}
                        height={450}
                        placeholder="blur"
                        blurDataURL={defaultImage}
                    />
                </div>
            </div>
        );
    }

    return (
        <div>
            <Breadcrumb isDisabled={false} />
            <div className='single_card'>
                <Image
                    className='food__img_single'
                    src={food.image ? food.image : defaultImage}
                    alt={food.name}
                    width={550}
                    height={450}
                    placeholder="blur"
                    blurDataURL={defaultImage}
                />
                <div className='single_item'>
                    <h1 className='single__title'>{food.name}</h1>
                    <p>{food.description}</p>
                    <p>Rating: ⭐⭐⭐⭐ {food.rating}</p>
                    <p>Price: $28.6</p>
                    <p className='food_instruct'>{food.instructions}</p>
                </div>
            </div>
        </div>
    );
};

export default FoodDetail;
