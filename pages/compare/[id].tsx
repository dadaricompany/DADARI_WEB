import Meta from "components/common/Meta";
import BaseTemplate from "components/template/ItemTemplate";
import CompareConatiner from "containers/compare/CompareContainer";
import type { GetServerSideProps, NextPage } from "next";

const Item: NextPage = ({ data }: any) => {
    return (
        <>
            <Meta title={"다다리 - 비교"} />
            <BaseTemplate>
                <CompareConatiner />
            </BaseTemplate>
        </>
    );
};

export default Item;

export const getServerSideProps: GetServerSideProps = async (props) => {
    const { id } = props.query;
    console.log(id)
    return {
        props: {
            data: null,
        },
    };
};
