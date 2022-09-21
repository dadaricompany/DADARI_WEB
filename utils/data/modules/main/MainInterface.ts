export interface MainReqInterface {
    id: number
    nameKr: string,
    nameEng: string,
    description: string,
    bigLogoPath: string,
    smallLogoPath: string,
    sort: number,
    template: string,
    createdAt: string,
    updatedAt: string,
    subscriptionServices: any[]
}
export interface MainConvertInterface {
    id: number,
    nameKr: string,
    nameEng: string,
    description: string,
    bigLogoPath: string,
    smallLogoPath: string,
    subscriptionServices: any[]
}
export interface MainResInterface {
    top: MainConvertInterface,
    list: MainConvertInterface[]
    baseURL?: string
}
export interface ServiceInterface {

}