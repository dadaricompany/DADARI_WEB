import { Header } from "components/base";
import { useRouter } from "next/router";
import { MouseEvent, useCallback } from "react";

type Props = {
    children: JSX.Element | JSX.Element[]
};
const HeaderContainer: React.FC<Props> = ({ children }) => {

    const router = useRouter();

    const moveLogo = useCallback((e: MouseEvent<HTMLElement>) => {
        e.preventDefault();
        if (!router.pathname || !router.pathname.length) return;
        const _serviceName = router.pathname.split("/")[1];
        _serviceName === "" ? router.reload() :
            _serviceName === "list" ? router.replace("/") :
                router.back();
    }, [])


    return <Header moveLogo={moveLogo}>
        {children}
    </Header>;
};
export default HeaderContainer;
