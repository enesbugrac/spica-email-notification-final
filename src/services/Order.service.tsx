import * as Bucket from "@spica-devkit/bucket";
export interface Order {
  product_name: string;
  owner_mail: string;
  _id: string;
}
class OrderService {
  private API_KEY = "<YOUR_API_KEY>";
  private BUCKET_ID = "<YOUR_BUCKET_ID>";
  constructor() {
    Bucket.initialize({
      apikey: this.API_KEY,
      publicUrl: "<YOUR_PUBLIC_URL>",
    });
  }
  addOrder = (object: object) => {
    return Bucket.data.insert(this.BUCKET_ID, object);
  };
  deleteOrder = (_id: string) => {
    return Bucket.data.remove(this.BUCKET_ID, _id);
  };
  getAllOrdersRealtime = () => {
    return Bucket.data.realtime.getAll(this.BUCKET_ID);
  };
}

export default new OrderService();
