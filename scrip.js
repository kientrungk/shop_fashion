const categories = document.querySelectorAll('.categories li');
const menucategories = document.getElementsByClassName('categories');

const clothesMen = document.querySelector('.men')
const brands = document.querySelectorAll('.brand li')
const menubrand = document.getElementsByClassName('brand');

const prices = document.querySelectorAll('.price li')
const menuprices = document.getElementsByClassName('price');


const tag = document.querySelectorAll('.tag li')
const menutag = document.getElementsByClassName('tag');

const sortProduct = document.getElementById('sortProduct')
const menu = document.querySelectorAll('.menuList')
// const clothesMen
let Data = [
    
        {
            categories: 'Men',
            image: 'uploads/ao3.jpg',
            name: 'Men\'s T-shirt',
            brand: 'Louis Vuitton',
            price: 50.55,
            href:'produc1.html'
        },
        {
            categories: 'women',
            image: 'uploads/gucci1.jpeg',
            name: 'Gucci Vest',
            brand: 'Gucci',
            price: 121.212,
            href:'produc2.html'
        },
        {
            categories: 'Men',
            image: 'uploads/lv1.jpeg',
            name: ' Polo Lv',
            brand: 'Louis Vuitton',
            price: 152.555,
            href:'produc3.html'
        },
        {
            categories: 'Women',
            image: 'uploads/gucci.jpeg',
            name: 'Gucci Cardigan',
            brand: 'Gucci',
            price: 202.555,
            href:'produc4.html'
        },
        {
    
            categories: 'Men',
            image: 'uploads/lv3.jpeg',
            name: 'Men\'s T-shirt',
            brand: 'Louis Vuitton',
            price: 654.000,
            href:'produc.html'
        },
    


    {
        categories: 'Women',
        image: 'uploads/lv4.jpeg',
        name: 'Skirt LV',
        brand: 'Louis Vuitton',
        price: 123.456,
        href:'produc5.html'
    },
    {
        categories: 'Men',
        image: 'uploads/lv5.jpeg',
        name: 'Nigo Denim Jacket',
        brand: 'Louis Vuitton',
        price: 122.555,
        href:'produc6.html'
    },
    {
        categories: 'Men',
        image: 'uploads/hermes5.jpeg',
        name: 'Hermes-Tshirt',
        brand: 'Hermes',
        price: 52.345,
        href:'produc7.html'
    },
    {
        categories: 'Men',
        image: 'uploads/lv6.jpeg',
        name: 'Men\'s T-shirt',
        brand: 'Louis Vuitton',
        price: 172.555,
        href:''
    },
    {
        categories: 'Women',
        image: 'uploads/chanel.jpeg',
        name: 'Tunics Chanel',
        brand: 'chanel',
        price: 31.555,
        href:''
    },
    {
        categories: 'Men',
        image: 'uploads/lv7.jpeg',
        name: 'Men\'s T-shirt',
        brand: 'Louis Vuitton',
        price: 1542.555,
        href:''
    },
    {
        categories: 'Bag',
        image: 'uploads/lv8.jpeg',
        name: 'Leather bag LV',
        brand: 'Louis Vuitton',
        price: 92.555,
        href:''
    },
    {
        categories: 'Men',
        image: 'uploads/lv9.jpeg',
        name: 'Men\'s T-shirt',
        brand: 'Louis Vuitton',
        price: 102.555,
    },


    {
        categories: 'Men',
        image: 'uploads/hermes1.jpeg',
        name: 'T-shirt POLO',
        price: 134.555,
        brand: 'Hermes',
    },
    {
        categories: 'Women',
        image: 'uploads/chanel1.jpeg',
        name: 'Tunics blue',
        price: 111.555,
        brand: 'Chanel',
    },

    {
        categories: 'Bag',
        image: 'uploads/chanel4.jpeg',
        name: 'Leather Bag Chanel',
        price: 108.555,
        brand: 'Chanel',
    },
    {
        categories: 'Women',
        image: 'uploads/chanel2.jpeg',
        name: ' T-shirt',
        price: 235.555,
        brand: 'chanel',
    },
    {
        categories: 'Women',
        image: 'uploads/chanel3.jpeg',
        name: ' T-shirt',
        price: 268.555,
        brand: 'chanel',
    },

    {
        categories: 'Women',
        image: 'uploads/gucci2.jpeg',
        name: ' T-shirt',
        price: 274.555,
        brand: 'gucii',
    },

    {
        categories: 'Women',
        image: 'uploads/gucci3.jpeg',
        name: ' T-shirt',
        price: 235.555,
        brand: 'gucci',
    },

    {
        categories: 'Women',
        image: 'uploads/gucci4.jpeg',
        name: ' T-shirt',
        price: 268.555,
        brand: 'gucci',
    },

    {
        categories: 'Women',
        image: 'uploads/gucci5.jpeg',
        name: ' T-shirt',
        price: 295.555,
        brand: 'gucci',
    },

    {
        categories: 'Women',
        image: 'uploads/gucci6.jpeg',
        name: ' T-shirt',
        price: 285.555,
        brand: 'gucci',
    },
    {
        categories: 'Women',
        image: 'uploads/gucci7.jpeg',
        name: ' T-shirt',
        price: 275.555,
        brand: 'gucci',
    },

    {
        categories: 'Bag',
        image: 'uploads/gucci8.jpeg',
        name: 'BAG GUCCI ',
        price: 265.555,
        brand: 'gucci',
    },
    {
        categories: 'Women',
        image: 'uploads/gucci9.jpeg',
        name: ' T-shirt',
        price: 240.000,
        brand: 'gucci',
    },

    {
        categories: 'Men',
        image: 'uploads/hermes2.jpeg',
        name: 'Men\'s T-shirt',
        brand: 'Hermes',
        price: 52.555,
    },

    {
        categories: 'Men',
        image: 'uploads/hermes3.jpeg',
        name: 'Men\'s T-shirt',
        brand: 'Hermes',
        price: 50.555,
    },

    {
        categories: 'Bag',
        image: 'uploads/hermes4.jpeg',
        name: 'BAG HERMES',
        brand: 'Hermes',
        price: 59.555,
    },


    {
        categories: 'Clothing',
        image: 'uploads/sp9.jpg',
        name: 'Men\'s T-shirt',
        price: 65.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp10.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Hermes',
        price: 25.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp11.jpg',
        name: 'Men\'s T-shirt',
        price: 151.555,
        brand: 'hermes',
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp12.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Louis Vuitton',
        price: 105.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp13.jpg',
        name: 'Men\'s T-shirt',
        brand: 'hermes',
        price: 115.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp14.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Chanel',
        price: 95.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp15.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Louis Vuitton',
        price: 85.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/q1.jpg',
        name: 'Men\'s T-shirt',
        brand: 'chanel',
        price: 75.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/q2.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Chanel',
        price: 65.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/q3.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Hermes',
        price: 425.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/q4.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Gucci',
        price: 225.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp2.jfif',
        name: 'Men\'s T-shirt',
        brand: 'Chanel',
        price: 325.000,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp3.jpg',
        name: 'Men\'s T-shirt',
        brand: 'chanel',
        price: 145.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp4.jpg',
        name: 'Men\'s T-shirt',
        brand: 'Louis Vuitton',
        price: 325.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp7.jpg',
        name: 'Men\'s T-shirt',
        brand: 'chanel',
        price: 165.555,
    },
    {
        categories: 'Clothing',
        image: 'uploads/sp5.jpg',
        name: 'Men\'s T-shirt',
        brand: 'chanel',
        price: 125.555,
    },
]
document.addEventListener('DOMContentLoaded', () => {
    let result = '';
    Data.map((item, index) => {
        result += `<div class="cartegory-right-content-item">
        <img src=${item.image}  alt = "" />
        <h1><a href="${item.href}">${item.name}</a></h1>
        <p>$${item.price}</p>
      </div > `
    })
    clothesMen.innerHTML = result;
})
categories.forEach(category => {
    category.addEventListener('click', (e) => {
        console.log(typeof category.outerText)
        let result = ''
        Data?.map((item, index) => {
            console.log(category.outerText)
            if (item.categories === category.outerText) {
                console.log(item)
                result += `<div class="cartegory-right-content-item">
                <img src=${item.image}  alt = "" />
                  <h1><a href="${item.href}">${item.name}</a></h1>
                <p>$${item.price}</p>
              </div > `
            }
        })
        clothesMen.innerHTML = result;
        console.log(brand.outerText)

    })
})
brands.forEach(brand => {
    brand.addEventListener('click', (e) => {
        let result = ''
        Data?.map((item, index) => {
            console.log(brand.outerText)
            if (item.brand === brand.outerText) {
                console.log(item)
                result += `<div class="cartegory-right-content-item">
            <img src=${item.image}  alt = "" />
              <h1><a href="${item.href}">${item.name}</a></h1>
            <p>$${item.price}</p>
          </div > `
            }
            clothesMen.innerHTML = result;
        })
    })
})
prices.forEach(price => {
    // console.log(price.outerText.splice('-'))
    price.addEventListener('click', (e) => {
        let valuePrice = price.outerText;
        let valueMin = valuePrice.split('-')[0]
        let valueMax = valuePrice.split('-')[1]
        let result = ''
        Data?.map((item, index) => {
            if (item.price >= parseInt(valueMin) && item.price <= parseInt(valueMax)) {
                result += `<div class="cartegory-right-content-item">
                <img src=${item.image}  alt = "" />
                  <h1><a href="${item.href}">${item.name}</a></h1>
                <p>$${item.price}</p>
              </div > `
            }
            clothesMen.innerHTML = result;
        })
    })
})
sortProduct.addEventListener('click', (e) => {
    let value = e.target.value;
    let result = ''
    if (value === 'high') {
        console.log(value)
        Data?.sort((a, b) => {
            return a.price - b.price
        })
        console.log(Data?.sort((a, b) => {
            return a.price - b.price
        }))
        Data.map((item, index) => {
            result += `<div class="cartegory-right-content-item">
            <img src=${item.image}  alt = "" />
             <h1><a href="${item.href}">${item.name}</a></h1>
            <p>${item.price}</p>
            </div > `
        })
        clothesMen.innerHTML = result;
    }
    if (value === 'low') {
        console.log(value)
        console.log(value)
        Data?.sort((a, b) => {
            return a.price - b.price
        })
        console.log(Data?.sort((a, b) => {
            return b.price - a.price
        }))
        Data.map((item, index) => {
            result += `<div class="cartegory-right-content-item">
            <img src=${item.image}  alt = "" />
              <h1><a href="${item.href}">${item.name}</a></h1>
            <p>${item.price}</p>
            </div > `
        })
        clothesMen.innerHTML = result;
    }
})
menu.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        console.log(item.outerText)
        if (item.outerText === 'CATEGORIES') {
            menucategories[0].classList.add('d-block')
        } else {
            menucategories[0].classList.remove('d-block')
        }
        if (item.outerText === 'BRANDING') {
            menubrand[0].classList.add('d-block')
        } else {
            menubrand[0].classList.remove('d-block')
        }
        if (item.outerText === 'BFILTER PRICE') {
            menuprices[0].classList.add('d-block')
        } else {
            menuprices[0].classList.remove('d-block')
        }
        if (item.outerText === 'TAGS') {
            menutag[0].classList.add('d-block')
        } else {
            menutag[0].classList.remove('d-block')
        }
    })
})












  




  