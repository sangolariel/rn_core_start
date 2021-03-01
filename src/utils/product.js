export const getProductWithRealPrice = _product => {
    let realPrice = '';
    if (
        typeof _product.discount_price !== 'undefined' &&
        _product.discount_price !== null &&

        _product.discount_price !== _product.online_price
    ) {
        // console.log ('Gỉam giá');
        realPrice = _product.discount_price;
    } else {
        // show online price
        realPrice = _product.online_price;
    }
    return realPrice
}

export const addProductByKey = (_cart, _item) => {
    let key = ''
    // HAVE color
    if (typeof _item.color.id !== 'undefined') { key = `${_item.id}${_item.size.id}${_item.color.id}` } else { key = `${_item.id}${_item.size.id}` }
    // HAVE array before

    if (!Object.prototype.hasOwnProperty.call(_cart, key)) {
        _cart[key] = []
    }
    _cart[key].push(_item)
}

export const removeProductHasKey = (_cart, _key) => {
    if (Object.prototype.hasOwnProperty.call(_cart, _key)) {
        if (_cart[_key].length > 1) {
            _cart[_key].pop()
        }
    }
}

export const removeProductsWithCountHasKey = (_cart, _key, _count) => {
    if (Object.prototype.hasOwnProperty.call(_cart, _key)) {
        _cart[_key].length = _count
    }
}

export const countTotalPriceInCart = _cart => {
    const total = Object.keys(_cart).reduce((prev, i) => {
        if (Array.isArray(_cart[i]) && _cart[i].length) {
            return prev + (_cart[i].length * _cart[i][0].real_price)
        }
        return prev
    }, 0)
    return total
}

export const countTotalPriceForDiscount = _cart => {
    const total = Object.keys(_cart).reduce((prev, i) => {
        if (Array.isArray(_cart[i]) && _cart[i].length) {
            if (_cart[i][0].is_promotion !== 2) {
                return prev + (_cart[i].length * _cart[i][0].real_price)
            }
        }
        return prev
    }, 0)
    return total
}

export const getProductIdsJSON = (cart) => {
    const res = Object.keys(cart).map(k => {
        if (cart[k].idProduct !== undefined ) return cart[k].idProduct
        return null
    }).filter(e => e !== null)
    return JSON.stringify(res)
}

export const getListPricesJSON = (cart) => {
    const res = Object.keys(cart).map((k) => {
        return `{"${cart[k].idProduct}":${cart[k].real_price}}`
        return null
    }).filter(e => e !== null)
    return `[${res.join(',')}]`
}

export const getAmountsJSON = (cart) => {
    const res = Object.keys(cart).map((k) => {
        return `{"${cart[k].idProduct}":${cart[k].length}}`
        return null
    }).filter(e => e !== null)
    return `[${res.join(',')}]`
}

export const getOptionListJSON = (cart) => {

    const res = Object.keys(cart).map((k) => {
        const optionSelect = cart[k].optionSelect;
        const info = cart[k].info_product;
        const size = cart[k].size;
        return `{"${info.id}":{"0":${size.id},"1":${optionSelect.id}}}`;
    }).filter(e => e !== null)
    return `[${res.join(',')}]`
}
