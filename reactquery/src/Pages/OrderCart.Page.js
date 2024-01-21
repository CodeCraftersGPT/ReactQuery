import { useQueries } from 'react-query';

const fetchUserOrders = async (username) => {
    const response = await fetch(`http://localhost:4002/api/orders/${username}`);
    if (!response.ok) {
        throw new Error('Failed to fetch orders');
    }
    return response.json();
};

const fetchUserCart = async (username) => {
    const response = await fetch(`http://localhost:4002/api/cart/${username}`);
    if (!response.ok) {
        throw new Error('Failed to fetch cart');
    }
    return response.json();
};

const OrderCart = () => {

    const userName = 'John';
    const results = useQueries([
        { queryKey: ['orders', userName], queryFn: () => fetchUserOrders(userName) },
        { queryKey: ['cart', userName], queryFn: () => fetchUserCart(userName) },
    ]);

    const isLoading = results.some(query => query.isLoading);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    const isError = results.some(query => query.error);
    if (isError) {
        return <div>Error loading data. Please try again later.</div>;
    }

    const [ordersData, cartData] = results.map(result => result.data);

    return (
        <div>
            <h2>{userName}'s Orders</h2>
            <ul>
                {ordersData.map(order => (
                    <li key={order.id}>{order.item} - Quantity: {order.quantity}</li>
                ))}
            </ul>
            <h2>{userName}'s Cart</h2>
            <ul>
                {cartData.map(cartItem => (
                    <li key={cartItem.id}>{cartItem.item} - Quantity: {cartItem.quantity}</li>
                ))}
            </ul>
        </div>
    );
};

export default OrderCart;
