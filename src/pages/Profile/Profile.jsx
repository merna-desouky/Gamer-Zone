import { useSelector } from 'react-redux';
import './Profile.css';
import { useFavorites } from './../../context/FavoritesContext';
import ProductCard from './../../components/Card/Card';
export default function Profile() {
    const isLogged = useSelector((state) => state.isLogged);
    const { favorites } = useFavorites();

    return (
        <div className="profile">
            <div className="cover">
                {' '}
                <div className="profileImg">
                    <img
                        style={{ borderRadius: '50%', filter: 'invert(0)' }}
                        src={
                            isLogged?.picture
                                ? isLogged?.picture
                                : '/images/profile.png'
                        }
                    ></img>
                    <div className="name">{isLogged?.name}</div>
                </div>
            </div>

            <div className="container-fluid">
                {favorites.length === 0 ? (
                    <div className="heartGif">
                        {' '}
                        <img src="/images/heartrm.gif"></img>
                        <h3>You don&apos;t have favorites yet </h3>
                    </div>
                ) : (
                    <>
                        <div className="fav-title">Favorites</div>
                        <div className="fav">
                            <div className="row gy-5">
                                {favorites.map((el) => (
                                    <div
                                        className="col-lg-3 col-md-4"
                                        key={el.id}
                                    >
                                        <ProductCard product={el}></ProductCard>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
