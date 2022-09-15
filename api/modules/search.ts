import service from "api";

export async function selectSearchList(query: string) {
    return await service.get(`subscriptionService/search?query=${query}`);
}
