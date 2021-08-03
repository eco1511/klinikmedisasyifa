import API_ENPOINT from '../globals/api-endpoint';

class DataSourceRestaurant {
  static async Info() {
    const response = await fetch(API_ENPOINT.INFO);
    const responseJson = await response.json();
    console.log(responseJson.articles);
    return responseJson.articles;
  }
}

export default DataSourceRestaurant;
