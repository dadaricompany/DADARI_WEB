import service from "api";

export async function selectListList(id: any, hashtags = '') {
  return await service.get(`subscriptionService/list?categoryId=${id}&hashtags=${hashtags}`);
}
