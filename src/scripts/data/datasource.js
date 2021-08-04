import API_ENPOINT from '../globals/api-endpoint';

class DataSourceRestaurant {
  static async Info() {
    const response = await fetch(API_ENPOINT.INFO);
    const responseJson = await response.json();
    return responseJson.data.posts;
  }
}

export default DataSourceRestaurant;
