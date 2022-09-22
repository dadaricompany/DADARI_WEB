import { CategoryConvertInterface, HashtagConvertInterface, ListReqInterface, ListResInterface, ServiceConvertInterface } from "./ListInterface";

export const ListConverter = (data: ListReqInterface): ListResInterface => {
    const category = data.categories.map((v: any): CategoryConvertInterface => {
        return {
            id: v.id,
            nameKr: v.nameKr,
            bigLogoPath: v.bigLogoPath,
        }
    }) ?? [];

    const hashtag = data.hashtags.map((v: any): HashtagConvertInterface => {
        return {
            id: v.id,
            name: v.name,
            checked: false,
        }
    }) ?? [];

    const service = data.subscriptionServices.map((v: any): ServiceConvertInterface => {
        return {
            id: v.id,
            categoryId: v.categoryId,
            listLogoPath: v.listLogoPath,
            defaultLogoPath: v.defaultLogoPath,
            nameKr: v.nameKr,
            description: v.description
        }
    }) ?? [];

    return { category: category, hashtag: hashtag, service: service }
}

export const ListConverterWithHash = (data: ListReqInterface): ListResInterface => {
    const category = data.categories.map((v: any): CategoryConvertInterface => {
        return {
            id: v.id,
            nameKr: v.nameKr,
            bigLogoPath: v.bigLogoPath,
        }
    }) ?? [];

    const hashtag = data.hashtags.map((v: any): HashtagConvertInterface => {
        return {
            id: v.id,
            name: v.name,
            checked: v.checked,
        }
    }) ?? [];

    const service = data.subscriptionServices.map((v: any): ServiceConvertInterface => {
        return {
            id: v.id,
            categoryId: v.categoryId,
            listLogoPath: v.listLogoPath,
            defaultLogoPath: v.defaultLogoPath,
            nameKr: v.nameKr,
            description: v.description
        }
    }) ?? [];

    return { category: category, hashtag: hashtag, service: service }
}
