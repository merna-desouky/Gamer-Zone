import { useParams } from 'react-router-dom';
import SingleProduct from '../../components/SingleProduct/SingleProduct';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useFavorites } from '../../context/FavoritesContext';
import { BallTriangle } from 'react-loader-spinner';
import './ProductDetails.css';
import ProductCard from './../../components/Card/Card';
function ProductDetails() {
    let { id } = useParams();
    const [item, setItem] = useState();
    const [fav, setFav] = useState();
    const [catg, setCatg] = useState();
    const { isFavorite } = useFavorites();
    const [products, setProducts] = useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    'https://gamerzoneserver1.onrender.com/products'
                );
                const foundItem = await response.data.find(
                    (el) => el.id === +id
                );
                setProducts(response.data);
                setItem(foundItem);
                setFav(isFavorite(foundItem?.id));
                setCatg(foundItem?.category);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchData();
    }, [id, isFavorite, catg]);

    window.scrollTo(0, 0);
    if (!item)
        return (
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#fa5950"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass="BallTriangle"
                visible={true}
            />
        );

    return (
        <>
            {item && (
                <SingleProduct
                    item={item}
                    catg={catg}
                    fav={fav}
                ></SingleProduct>
            )}
            <div className="container-fluid">
                <div className="titleProduct">Discover</div>
                <iframe
                    width="560"
                    height="315"
                    className="video"
                    src={`https://www.youtube.com/embed/${item.video}`}
                    title="YouTube Video Player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>

                <div className="titleProduct">You may also like </div>
                <div className="row gy-5 mb-5">
                    {products
                        .filter((game) => game.category !== item.category)
                        .map((game) => (
                            <div key={game.id} className="col-lg-3 col-md-4">
                                <div
                                    style={{ textDecoration: 'none' }}
                                    className="recommendationsProducts"
                                >
                                    <ProductCard product={game}></ProductCard>
                                </div>
                            </div>
                        ))
                        .slice(0, 4)}
                </div>
            </div>
        </>
    );
}

export default ProductDetails;
