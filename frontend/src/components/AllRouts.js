import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import OrderHistoryScreen from '../screens/OrderHistoryScreen';
import OrderScreen from '../screens/OrderScreen';
import PaymentMethodScreen from '../screens/PaymentMethodScreen';
import PlaceOrderScreen from '../screens/PlaceOrderScreen';
import ProductListScreen from '../screens/ProductListScreen';
import ProductScreen from '../screens/ProductScreen';
import ProfileScreen from '../screens/ProfileScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ShippingAddressScreen from '../screens/ShippingAddressScreen';
import SigninScreen from '../screens/SigninScreen';
import ProductEditScreen from '../screens/ProductEditScreen';
import OrderListScreen from '../screens/OrderListScreen';
import UserListScreen from '../screens/UserListScreen';
import UserEditScreen from '../screens/UserEditScreen';
import SellerScreen from '../screens/SellerScreen';
import SearchScreen from '../screens/SearchScreen';
import { Route } from 'react-router';
import MapScreen from '../screens/MapScreen';
import DashboardScreen from '../screens/DashboardScreen';
import SupportScreen from '../screens/SupportScreen';
import PrivateRoute from './PrivateRoute';
import AdminRoute from './AdminRoute';
import SellerRoute from './SellerRoute';
import CartScreen from '../screens/CartScreen';
import OrderSucess from '../screens/OrderSucess';

export default function AllRouts() {
    return (
        <>
            <Route path="/seller/:id" component={SellerScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} exact />
            <Route path="/product/:id/edit" component={ProductEditScreen} exact />
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/shipping" component={ShippingAddressScreen} />
            <Route path="/payment" component={PaymentMethodScreen} />
            <Route path="/placeorder" component={PlaceOrderScreen} />
            <Route path="/order/:id" component={OrderScreen} />
            <Route path="/ordersucess/:id/:TXNID/:TXNDATE/:RESPMSG" component={OrderSucess} />
            <Route path="/orderhistory" component={OrderHistoryScreen} />
            {/* <Route path="/paymentcallback/callback" component={AfterPayment} /> */}

            <Route path="/search/name/:name?" component={SearchScreen} exact />
            <Route path="/search/category/:category" component={SearchScreen} exact />
            <Route path="/search/category/:category/name/:name" component={SearchScreen} exact />
            <Route path="/search/category/:category/name/:name/min/:min/max/:max/rating/:rating/order/:order/pageNumber/:pageNumber" component={SearchScreen} exact />

            <PrivateRoute path="/profile" component={ProfileScreen} />
            <PrivateRoute path="/map" component={MapScreen} />

            <AdminRoute path="/productlist" component={ProductListScreen} exact />
            <AdminRoute path="/productlist/pageNumber/:pageNumber" component={ProductListScreen} exact />
            <AdminRoute path="/orderlist" component={OrderListScreen} exact />
            <AdminRoute path="/userlist" component={UserListScreen} />
            <AdminRoute path="/user/:id/edit" component={UserEditScreen} />
            <AdminRoute path="/dashboard" component={DashboardScreen} />
            <AdminRoute path="/support" component={SupportScreen} />

            <SellerRoute path="/productlist/seller" component={ProductListScreen} />
            <SellerRoute path="/orderlist/seller" component={OrderListScreen} />

            <Route path="/" component={HomeScreen} exact />
        </>
    )
}
