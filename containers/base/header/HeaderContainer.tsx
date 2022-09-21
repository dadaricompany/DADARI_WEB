import { Header } from "components/base";
import { IconLogo, IconArrowL } from "components/icons";
import { useRouter } from "next/router";
import { Fragment, MouseEvent, useCallback } from "react";

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
    
    const logoIcon = router.pathname.split("/")[1] === "" ? <IconLogo iWidth={32} iHeight={32} /> : <IconArrowL iWidth={32} iHeight={32} />

    return <Header moveLogo={moveLogo} logoIcon={logoIcon} >
        {children}
    </Header>;
};
export default HeaderContainer;
