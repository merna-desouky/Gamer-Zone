import { useEffect, useState } from 'react';
import ProductCard from '../../components/Card/Card';
import './Products.css';
import Loading from '../../components/Loading/Loading';
import PaginationControlled from '../../components/Pagination/PaginationControlled';
import Filter from '../../components/Filter/Filter';
import Search from '../../components/Search/Search';

function Products() {
    const [products, setProducts] = useState([]);
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrnetPage] = useState(1);

    const [postsPerPage] = useState(12);
    const [filter, setFilter] = useState({
        category: {
            consoles: false,
            games: false,
            accessories: false,
        },

        price: {
            min: 0,
            max: 100000,
        },
    });

    const [searchQuery, setSearchQuery] = useState('');

    // fetch all products
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(
                'https://gamerzoneserver1.onrender.com/products'
            );
            const data = await response.json();
            setProducts(data);
            setLoading(false);
        };
        fetchProducts();
    }, []);

    // filter products based on category and price
    useEffect(() => {
        const filtered = products.filter((product) => {
            if (
                product.price >= filter.price.min &&
                product.price <= filter.price.max
            ) {
                return product;
            }
        });

        if (
            filter.category.consoles === false &&
            filter.category.games === false &&
            filter.category.accessories === false
        ) {
            setCurrnetPage(1);

            const filteredSearch = filtered.filter((product) => {
                if (
                    product.name
                        .toLowerCase()
                        .startsWith(searchQuery.toLowerCase())
                ) {
                    return product;
                }
            });

            return setNewProducts(filteredSearch);
        }
        const filteredProducts = filtered.filter((product) => {
            if (
                (filter.category.consoles && product.category === 'consoles') ||
                (filter.category.games && product.category === 'games') ||
                (filter.category.accessories &&
                    product.category === 'accessories')
            ) {
                return product;
            }
        });
        setCurrnetPage(1);

        const filteredSearch = filteredProducts.filter((product) => {
            if (
                product.name.toLowerCase().startsWith(searchQuery.toLowerCase())
            ) {
                return product;
            }
        });

        setNewProducts(filteredSearch);
    }, [filter, products, searchQuery]);

    // reset scroll to top
    window.scrollTo(0, 0);

    // pagination
    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = newProducts.slice(firstPostIndex, lastPostIndex);

    return (
        <div className="mt-5">
            <div className="container-fluid">
                {/* search input */}
                <div className="d-flex justify-content-center my-4">
                    <Search
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                    />
                </div>
                <div className="row gy-5 ">
                    {/* side bar filter */}
                    <div className="col-lg-2 ">
                        <div className="sidebar">
                            <Filter setFilter={setFilter} />
                        </div>
                    </div>

                    {/* products */}

                    <div className="col-lg-10 products">
                        <div className="row gy-5 ">
                            {/* Loading spinner */}
                            {loading && (
                                <div className="d-flex justify-content-center align-items-center p-5 loading">
                                    <Loading />
                                </div>
                            )}

                            {/* No products found */}
                            {!loading && currentPosts.length === 0 && (
                                <div className="d-flex justify-content-center align-items-center p-5 no-products">
                                    <h1>No Products Found</h1>
                                </div>
                            )}

                            {/* Display products */}
                            {currentPosts &&
                                currentPosts.map((product) => {
                                    return (
                                        <div
                                            key={product.id}
                                            className="col-md-4 col-lg-4 col-xl-3 col-sm-6 product-card"
                                        >
                                            <ProductCard product={product} />
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                </div>
                {/* pagination */}
                <div className="pagination-container my-3 ">
                    <PaginationControlled
                        totalPosts={newProducts.length}
                        postsPerPage={postsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrnetPage}
                    />
                </div>
            </div>
        </div>
    );
}

export default Products;
