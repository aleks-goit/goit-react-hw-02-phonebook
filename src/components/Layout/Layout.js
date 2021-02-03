import React from 'react';
import PropTypes, { object } from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
    width: 350px;
    margin: 0 auto;
    padding-top: 40px;
`;

function Layout({children}) {
    return (
        <Section>
            {children}
        </Section>
    )
}

Layout.propTypes = {
    children: PropTypes.arrayOf(object),
}

export default Layout;