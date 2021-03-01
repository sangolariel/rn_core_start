import {Platform} from 'react-native'
import axios from 'axios'

export function sendLogSlack(text){
    axios.post("https://hooks.slack.com/services/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",{
        text
    })

}

export function formatCurrency(_number) {
    // return Number (parseFloat (_number).toFixed (1)).toLocaleString ();
    if (Platform.OS === 'ios') { return Number(_number.toFixed(1)).toLocaleString() }
    return _number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // return 1;
}

export function getOptionColorDefault(data) {
    try{
    let colorOption = data.info_product.find(i => i.option_id === 2)
    if (!colorOption) return
    colorOption = colorOption.product_option.find(i => i.id === 2)
    if (!colorOption.sub_option) return
    const subOpt = colorOption.sub_option.find(i => i.id === data.image_color_default)
    const option = {
        id: data.image_color_default,
        images: subOpt !== undefined && subOpt.images !== undefined ? subOpt.images : []
    }
    return { option,colorOption };
    }catch(error){
        return { option : null,colorOption : null};
    }
    
}
