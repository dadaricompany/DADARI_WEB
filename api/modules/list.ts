import service from "api";

export async function selectListList(id: any) {
  return await service.get(`subscriptionService/list?categoryId=${id}`);
}
