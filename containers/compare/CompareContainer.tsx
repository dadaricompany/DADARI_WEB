import { Footer } from "components/base";
import ServiceInfo from "components/compare/ServiceInfo";
import ServiceInfoBump from "components/compare/ServiceInfoBump";
import ServiceInfoSectionBar from "components/compare/ServiceInfoSectionBar";
import ServiceInfoSectionDoughnut from "components/compare/ServiceInfoSectionDoughnut";
import ServiceInfoSectionText from "components/compare/ServiceInfoSectionText";

const CompareConatiner = () => {
    return <>
        <ServiceInfo />
        <ServiceInfoSectionBar title={"월 구독료"}/>
        <ServiceInfoSectionText title={"제공 서비스"}/>
        <ServiceInfoSectionText title={"동시 접속 가능 인원"}/>
        <ServiceInfoSectionText title={"결제단위"}/>
        <ServiceInfoSectionText title={"이용범위"}/>
        <ServiceInfoSectionText title={"무료기간"}/>
        <ServiceInfoSectionText title={"부가기능 및 기타 강점"}/>
        <ServiceInfoSectionDoughnut title={"컨텐츠 수"}/>
        <ServiceInfoBump/>
        <Footer />
    </>
}
export default CompareConatiner;