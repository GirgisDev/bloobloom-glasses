import axios from 'axios';

export default {
  async fetchSpectaclesWomen(page: number, limit: number) {
    try {
      const response = await axios.get(`https://api-staging.bloobloom.com/user/v1/sales_channels/website/collections/spectacles-women/glasses?width=1920&sort[type]=collection_relations_position&sort[order]=asc&filters[lens_variant_prescriptions][]=fashion&filters[lens_variant_types][]=classic&page[limit]=${limit}&page[number]=${page}&filters[frame_variant_home_trial_available]=false`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  },
};
