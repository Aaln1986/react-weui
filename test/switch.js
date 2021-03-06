/**
 * Created by n7best on 16/2/25.
 */

"use strict";

import React from 'react';
import { shallow } from 'enzyme';
import assert from 'assert';
import WeUI from '../src/index';

const {Switch} = WeUI;

describe('<Switch></Switch>', ()=> {
    [undefined, null, 'custom_class'].map(clazz => {
        describe(`<Switch className=${clazz}></Switch>`, ()=> {
            const wrapper = shallow(
                <Switch className={clazz}/>
            );

            it(`should render <Switch></Switch> component`, ()=> {
                assert(wrapper.instance() instanceof Switch);
                assert(wrapper.hasClass('weui_switch'));
            });

            it(`should have custom class name ${clazz} when className is not null or empty`, ()=>{
                if (clazz) {
                    assert(wrapper.hasClass(clazz));
                }
            });
        })
    });
});