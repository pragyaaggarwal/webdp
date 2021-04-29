import React from 'react'
import styled from 'styled-components'

const Books = () => {
    return (
        <ProductsContainer>
            <ProductHeading> </ProductHeading>
            <ProductWrapper></ProductWrapper>
        </ProductsContainer>
    )
}

export default Books
const ProductsContainer = styled.div `
min-height: 100vh;
padding: 5rem calc((100vw -1300px) /2);
background: transparent;
color: black;
`
const ProductHeading = styled.div ``

const ProductWrapper = styled.div ``

