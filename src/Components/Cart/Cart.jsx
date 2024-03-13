import PropTypes from 'prop-types';

const Cart = ({carts}) => {
//    console.log(carts)
  return (
    <div className="w-1/5 h-96 bg-gray-50 p-3 rounded-lg shadow-2xl">
      <div className="border-b-2 border-gray-300">
        <h1 className=" text-blue-900 font-medium mb-3">
          Credit Hour Remaining <span>{carts.length}</span> hr
        </h1>
      </div>
      <div className="border-b-2 border-gray-300 py-2">
        <h1 className="text-xl font-bold pb-2 ">Course Name</h1>
        <ul className=" pl-4">
            {
                carts.map(cart=> <li className='text-sm  list-decimal mb-2' key={cart.id}>{cart.name}</li>)
            }
        </ul>
      </div>
      <div className="border-b-2 border-gray-300 py-2">
        <p>Total Credit Hour: {carts.reduce((p,c)=>p+c.credit,0)} hr</p>
      </div>
      <div className="py-2">
        <p>Total Price : {carts.reduce((p,c)=>p+c.price,0)} USD</p>
      </div>
    </div>
  );
};
Cart.propTypes={
    carts:PropTypes.array.isRequired
  }

export default Cart;
