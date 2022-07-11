import axios from "axios";
import { REACT_APP_THEMES_PREFIX, REACT_APP_DASHBOARD_PREFIX, REACT_APP_NODE_ENV, REACT_APP_PROJECT, REACT_APP_BASE_URL, REACT_APP_DASHBOARD_API_PATH } from "@env"


const getAuthConfig = (Token) => ({
    headers: { authorization: `Bearer ${Token}` },
});

const createError = error => error.response?.data || { error: error.message };

const baseOrdersUrl = `https://${REACT_APP_DASHBOARD_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}${REACT_APP_DASHBOARD_API_PATH}/orders`;
const deploymentStaticEndpoint = `https://${REACT_APP_DEPLOYMENT_PREFIX}${REACT_APP_NODE_ENV}.${REACT_APP_PROJECT}.${REACT_APP_BASE_URL}`;

/**
 * Gets pending deliveries.
 * @param {Number} limit Max number of orders to retrieve
 * @param {Number} skip Number of orders to skip (for pagination)
 * @returns Array of orders
 */
export const getPendingDeliveries = async (limit, skip ,Token) =>
    await getDeliveries("pending", limit, skip ,Token);

/**
 * Gets completed deliveries.
 * @param {Number} limit Max number of orders to retrieve
 * @param {Number} skip Number of orders to skip (for pagination)
 * @returns Array of orders
 */
export const getCompletedDeliveries = async (limit, skip ,Token) =>
    await getDeliveries("confirmed", limit, skip ,Token);

/**
 * Gets deliveries
 * @param {String} status The status of the orders to retrieve
 * @param {Number} limit Max number of orders to retrieve
 * @param {Number} skip Number of orders to skip (for pagination)
 * @returns Array of orders
 */
const getDeliveries = async (status, limit, skip ,Token) => {
    try {
        let url = `${baseOrdersUrl}/deliveries?status=${status}`;
        if (limit) url += `&limit=${limit}`;
        if (skip) url += `&skip=${skip}`;

        const result = await axios.get(url, getAuthConfig(Token));

        if (!result.data || result.data?.Error || result.data?.error)
            throw new Error(result.data?.Error || result.data?.error);

        return result.data;
    } catch (error) {
        return createError(error);
    }
};

/**
 * Sets order status to confirmed and products.
 * @param {Object} order The order object
 * @returns Success message
 */
export const confirmOrder = async (order , Token) => {
    try {
        const data = {
            products: order.products.map(po => ({
                _id: po._id._id,
                quantity: po.quantity,
            })),
        };
        const url = `${baseOrdersUrl}/${order._id}/confirm`;
        const result = await axios.patch(url, data, getAuthConfig(Token));

        if (!result.data || result.data?.Error || result.data?.error)
            throw new Error(result.data?.Error || result.data?.error);

        return result.data;
    } catch (error) {
        return createError(error);
    }
};

/**
 * Sets order status to reimbursed.
 * @param {Object} order The order object
 * @returns Success message
 */
export const reimburseOrder = async (order,Token) => {
    try {
        const url = `${baseOrdersUrl}/${order._id}/reimburse`;
        const result = await axios.patch(url, {}, getAuthConfig(Token));

        if (!result.data || result.data?.Error || result.data?.error)
            throw new Error(result.data?.Error || result.data?.error);

        return result.data;
    } catch (error) {
        return createError(error);
    }
}

/**
 * Update order.
 * @param {String} orderId The id of the order
 * @param {String} productId The id of the product
 * @returns Success message
 */
export const removeProduct = async (orderId, productId ,Token) => {
    try {
        const url = `${baseOrdersUrl}/${orderId}/products/${productId}`;
        const result = await axios.delete(url, getAuthConfig(Token));

        if (!result.data || result.data?.Error || result.data?.error)
            throw new Error(result.data?.Error || result.data?.error);

        return result.data;
    } catch (error) {
        return createError(error);
    }
};

export const getOrderPrice = order => {
    try {
        if (!order.products) return 0;

        const totalPrice = order.products.reduce(
            (total, current) => total + current.quantity * current._id.price,
            0
        );
        return Math.round(totalPrice * 100) / 100;
    } catch (error) {
        return null;
    }
};

export const getDeliveryTime = order => {
    try {
        return Math.round(
            (new Date(order.deliveryTime).getTime() - new Date(Date.now())) /
            1000 /
            60 /
            60
        );
    } catch (error) {
        return null;
    }
};

export const getImageUrl = image =>
    image?.includes("http") ? image : `${deploymentStaticEndpoint}/${image}`;