import axios from 'axios'
async function GetDigimons(params?: string) {
  try {
    const data = (await axios.get('https://digi-api.com/api/v1/digimon?'+params))
    return data
  } catch (error) {
    console.log(error)
    return error
  }
}
export default GetDigimons
