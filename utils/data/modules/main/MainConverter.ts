import { MainReqInterface, MainResInterface } from "./MainInterface";

const MainConverter = (data: Array<MainReqInterface>): MainResInterface => {
    const [top, ...list] = data.map((v: MainReqInterface, i: number) => {
        return {
            id: v.id, nameKr: v.nameKr, nameEng: v.nameEng,
            description: v.description, bigLogoPath: v.bigLogoPath,
            smallLogoPath: v.smallLogoPath, subscriptionServices: v.subscriptionServices
        }
    });

    return { top: top, list: list };
}

export default MainConverter;