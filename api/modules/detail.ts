import service from "api";

export async function selectDetail(id: any) {
  return await service.get(`subscriptionService/${id}`);
}
