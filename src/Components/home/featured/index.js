import React from 'react';
import Stripes from './Stripes';
import Text from './Text';
import Zoom from '../../../Resources/images/jersey.jpg';

const Featured = () => {
    return (
        <div>
            <div className="featured_wrapper">
                <Stripes />
                <Text />
            </div>
            <div className="featured_wrapperMobile">

                League Championships
            </div>
        </div>
    );
};

export default Featured;