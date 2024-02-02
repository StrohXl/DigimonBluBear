import axios from 'axios'
async function GetListDigimonTypes() {
  try {
    const data = []
    const page1 = (await axios.get('https://digi-api.com/api/v1/attribute?page=0')).data.content.fields
    const page2 = (await axios.get('https://digi-api.com/api/v1/attribute?page=1')).data.content.fields
    for (let index = 0; index < page1.length; index++) {
      data.push(page1[index])
    }
    for (let index = 0; index < page2.length; index++) {
      data.push(page2[index])
    }
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
export default GetListDigimonTypes
