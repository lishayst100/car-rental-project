import { baseUrl } from "./cars"

export const getOrders = async() => {
    const response = await fetch(baseUrl + '/order',{
        next:{revalidate:3}
    })
    const data = await response.json()
    return data.orders
}