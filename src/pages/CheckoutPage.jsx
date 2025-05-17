import { useCart } from '../components/CartContext';
import MotionComponent from '../components/MotionComponent';
import CostumeButton from '../components/CostumeButton';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Checkout = () => {
  const { cartProducts } = useCart();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
    phone: '',
  });

  const navigate = useNavigate();


  const total = cartProducts.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
  );
  const discount = total * 0.13;
  const finalTotal = total - discount;

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  console.log(' Order confirmed:', form);
  
  if (cartProducts.length === 0) {
    alert("Your cart is empty.");
    return;
  }
  
  alert('Order placed successfully!');
  
 
  navigate('/');
};



  return (
    <div className="pt-[100px] px-4 font-poppins bg-[#f3f4f6] min-h-screen">
      <MotionComponent amount={0.3}>
        <h1 className="text-5xl font-bold text-center mb-10">Checkout</h1>
      </MotionComponent>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* LEFT: Delivery Form */}
        <MotionComponent amount={0.4}>
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8 space-y-5"
          >
            <h2 className="text-2xl font-semibold mb-4">Delivery Information</h2>

            {['fullName', 'email', 'address', 'city', 'zip', 'phone'].map((field) => (
              <input
                key={field}
                name={field}
                value={form[field]}
                onChange={handleChange}
                type={field === 'email' ? 'email' : 'text'}
                placeholder={field.replace(/([A-Z])/g, ' $1')}
                required
                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black transition-all"
              />
            ))}

            <CostumeButton text="Confirm Order" w="100%" hg="50px" submit />

          </form>
        </MotionComponent>

        {/* RIGHT: Order Summary */}
        <MotionComponent amount={0.5}>
          <div className="bg-white rounded-2xl shadow-xl p-8 h-fit">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            <ul className="space-y-3 max-h-[300px] overflow-y-auto pr-2">
              {cartProducts.map((item) => (
                <li key={item._id} className="flex justify-between">
                  <span className="text-gray-700">
                    {item.name} x{item.quantity}
                  </span>
                  <span>{item.price * item.quantity} DA</span>
                </li>
              ))}
            </ul>

            <div className="border-t mt-4 pt-4 space-y-2 text-lg">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{total.toFixed(2)} DA</span>
              </div>
              <div className="flex justify-between">
                <span>Discount (13%)</span>
                <span className="text-green-600">-{discount.toFixed(2)} DA</span>
              </div>
              <div className="flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>{finalTotal.toFixed(2)} DA</span>
              </div>
            </div>
          </div>
        </MotionComponent>
      </div>
    </div>
  );
};

export default Checkout;
