import React, { Component } from 'react';
import MenuAppBar from '../components/MenuAppBar'
import Product from './Product'
import LogProduct from '../components/LogProduct'
import UserInformation from '../components/UserInformation'
import Footer from '../components/Footer'
import FeaturesPage from '../components/FeaturesPage'
import TopNavigation from '../components/TopNavigation';

class ProductDetail extends Component {
  render() {

    var user = {
        userName : 'Phan Lê Trung Hiếu (Stage name: Hiếu Đẹp Trai)',
        position : 'Providers of clean farm produce.',
        userImage : 'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/43951894_1884451351651332_8635442626654371840_n.jpg?_nc_cat=105&_nc_eui2=AeEbQLkuqRNg1J-fyhX3OXbTsMd1B3YVTkAwuBBQPfOhE41aG2gcEh47VRXkqI1zZHlYLIySVOFsL5GOg16Y8JJeQkoF7yZg_qU0fBVKJz8pkQ&_nc_ht=scontent.fsgn5-2.fna&oh=7633220fe81f20b7eb4ac55c5cb37e97&oe=5CA941E1',
    }

    var product = {
        productName : 'Clean Bananas Organic',
        productImage : 'https://tul.imgix.net/content/article/banana.jpg?auto=format,compress&w=1200&h=630&fit=crop&crop=edges',
        content : 'Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.',
        logs : [
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            },
            {
                time : '12:35:23 11/12/2018',
                content : 'Planting products and land according to WHO standards. Planting products and land according to WHO standards.'
            }
        ]
    }

    return (
        <div style={{backgroundColor: '#eeeeee'}}>
            <MenuAppBar 
             productName= {product.productName}
            ></MenuAppBar>
            <Product style= {{width: '85%'}}
             productName= {product.productName}
             productImage= {product.productImage}
             content= {product.content}
            ></Product>
            <UserInformation
             userImage= {user.userImage} 
             userName= {user.userName} 
             position= {user.position} 
            ></UserInformation>
            <LogProduct
            logs= {product.logs}
            ></LogProduct>
            <FeaturesPage></FeaturesPage>
            <Footer></Footer>
        </div>
    );
  } 
}

export default ProductDetail;