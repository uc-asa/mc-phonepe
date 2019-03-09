import React from 'react';

export default class Header extends React.Component {
    static navigationOptions = {
        header : () => {
			false;
		}
    };
}