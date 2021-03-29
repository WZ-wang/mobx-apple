import React from 'react';
import ReactDOM from 'react-dom';
import appleStore from './stores/appleStore';
import AppleBasket from './components/AppleBasket';
import {Provider} from "mobx-react"
import { autorun} from 'mobx';

const store = new appleStore();

autorun(()=> {
    if (store.isPicking) {
        console.log('又在采摘新苹果了');
    }
});

ReactDOM.render(<Provider store={store} ><AppleBasket/></Provider>, document.getElementById('root'));
