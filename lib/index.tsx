import * as React from 'react';
import * as ReactDom from 'react-dom';

// import Button from './button';
import Icon from './icon/icon';

const fn: React.MouseEventHandler = (e) => {
    console.log(e);
    console.log((e.target as SVGUseElement).href);   //断言
};
ReactDom.render(
    <div>
        <Icon name='qq' onClick={fn} onMouseEnter={()=>console.log("enter")}/>
    </div>, document.getElementById('root'));