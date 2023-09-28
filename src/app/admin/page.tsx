import { getOrders } from "@/services/orders"
import { OrderTypePost } from "../../../types";



const Admin = async() => {
    const orders: OrderTypePost[] = await getOrders();
  return (
    <div className="container">
        
      <h2 className="title text-center">Admin Page</h2>
      <div className="d-flex flex-wrap gap-5">
        <div className="">
          Email
          {orders.map((order) => (
            <div key={order.id} className="">
              <div>
                <p className="">{order.email}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="">
          Car Type
          {orders.map((order) => (
            <div key={order.id} className="">
              <div>
                <p className="">{order.car}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin