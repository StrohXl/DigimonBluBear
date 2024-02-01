import axios from 'axios'
import ListDigimonLevel from '../interface/listDigimonLevel'
async function GetListDigimonLevel() {
  try {
    const data = []
    const page1 = (await axios.get('https://digi-api.com/api/v1/level?page=0')).data.content.fields
    const page2 = (await axios.get('https://digi-api.com/api/v1/level?page=1')).data.content.fields
    const page3 = (await axios.get('https://digi-api.com/api/v1/level?page=2')).data.content.fields
    for (let index = 0; index < page1.length; index++) {
      data.push(page1[index])
    }
    if (page2) {
      for (let index = 0; index < page2.length; index++) {
        data.push(page2[index])
      }
    }
    if (page3) {
      for (let index = 0; index < page3.length; index++) {
        data.push(page3[index])
      }
    }
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
export default GetListDigimonLevel
