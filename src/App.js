import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Shop from './Components/Shop/Shop';
import Main from './Components/Layout/Main';
import About from './Components/About/About';
import Orders from './Components/Orders/Orders'
import Inventory from './Components/Inventory/Inventory';
import { productsAndCartLoader } from './Components/loaders/ProductsandCartLoader';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: () => {
            return fetch('products.json')
          },
          element:<Shop></Shop>
        },
        {
          path: '/orders',
          loader: productsAndCartLoader,
          element: <Orders></Orders>
        },
        {
          path: '/inventory',
          element: <Inventory></Inventory>
        },
        {
          path:'about',
          element:<About></About>
        }
      ]
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
