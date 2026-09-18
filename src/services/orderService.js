import axios from "axios";

const ORDER_API_URL = "http://localhost:8080/order-service";

export async function getOrderHistory(phone) {

    const response = await axios.get(
        `${ORDER_API_URL}/getOrderHistory`,
        {
            params: { phone }
        }
    );

    return response.data;
}

export async function placeOrder(request) {

    const response = await axios.post(
        `${ORDER_API_URL}/placeOrder`,
        request
    );

    return response.data;
}

export async function orderSearch(request) {

    const response = await axios.post(
        `${ORDER_API_URL}/orderSearch`,
        request
    );

    return response.data;
}