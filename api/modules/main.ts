import service from "api";

export async function selectMainList() {
  return await service.get(`subscriptionService/main`);
}
