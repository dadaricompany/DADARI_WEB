import service from "api";

export async function selectCompare(id1: any, id2: any) {
  return await service.get(
    `subscriptionService/compare?subscriptionServiceId01=${id1}&subscriptionServiceId02=${id2}`
  );
}
