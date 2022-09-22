export interface ListReqInterface {
    categories: unknown[],
    hashtags: unknown[],
    subscriptionServices: unknown[]
}
export interface CategoryConvertInterface {
    id: number,
    nameKr: string,
    bigLogoPath: string,
}
export interface HashtagConvertInterface {
    id: number,
    name: string,
    checked: boolean,
}
export interface ServiceConvertInterface {
    id: number,
    categoryId: number,
    listLogoPath: string,
    defaultLogoPath: string,
    nameKr: string,
    description: string
}
export interface ListResInterface {
    category: CategoryConvertInterface[],
    hashtag: HashtagConvertInterface[],
    service: ServiceConvertInterface[],
}