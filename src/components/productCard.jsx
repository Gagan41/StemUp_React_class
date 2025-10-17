import styled from "styled-components";
import React from "react";

function ProductCard() {
  const Card = styled.div`
    background-color: #f5f5f5;
    border-radius: 10px;
    padding: 20px;
    test-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  `;

  const Title = styled.h3`
    color: #333;
  `;

  return (
    <Card>
      <Title>Product Name</Title>
      <p style={{ color: "black" }}>$52.99</p>
    </Card>
  );
}

export default ProductCard;