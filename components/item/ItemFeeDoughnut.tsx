import styled from "styled-components";
const StyledItemFeeDoughnut = styled.div`
  height: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
`;

const ItemFeeDoughnut = () => {
  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem: { yLabel: any }) {
          return tooltipItem.yLabel;
        },
      },
    },
  };
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <StyledItemFeeDoughnut>
    </StyledItemFeeDoughnut>
  );
};
export default ItemFeeDoughnut;
