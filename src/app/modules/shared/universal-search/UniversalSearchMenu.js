import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Popper } from 'react-popper';

import { UniversalSearchContext } from './UniversalSearchContext';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
    tag: tagPropType,
    children: PropTypes.node.isRequired,
    right: PropTypes.bool,
    flip: PropTypes.bool,
    modifiers: PropTypes.object,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    persist: PropTypes.bool,
};

const defaultProps = {
    tag: 'div',
    flip: true,
};

const noFlipModifier = { flip: { enabled: false } };

const directionPositionMap = {
    up: 'top',
    left: 'left',
    right: 'right',
    down: 'bottom',
};

export class UniversalSearchMenu extends React.Component {

    render() {
        const { className, cssModule, right, tag, flip, modifiers, persist, ...attrs } = this.props;
        const classes = mapToCssModules(classNames(
            className,
            'dropdown-menu',
            {
                'dropdown-menu-right': right,
                show: this.context.isOpen,
            }
        ), cssModule);

        const Tag = tag;

        if (persist || (this.context.isOpen && !this.context.inNavbar)) {

            const position1 = directionPositionMap[this.context.direction] || 'bottom';
            const position2 = right ? 'end' : 'start';
            const poperPlacement = `${position1}-${position2}`;
            const poperModifiers = !flip ? {
                ...modifiers,
                ...noFlipModifier,
            } : modifiers;

            return (
                <Popper
                    placement={poperPlacement}
                    modifiers={poperModifiers}
                >
                    {({ ref, style, placement }) => (
                        <Tag
                            tabIndex="-1"
                            role="menu"
                            ref={ref}
                            style={style}
                            {...attrs}
                            aria-hidden={!this.context.isOpen}
                            className={classes}
                            x-placement={placement}
                        />
                    )}
                </Popper>
            );
        }

        return (
            <Tag
                tabIndex="-1"
                role="menu"
                {...attrs}
                aria-hidden={!this.context.isOpen}
                className={classes}
                x-placement={attrs.placement}
            />
        );
    }
};

UniversalSearchMenu.propTypes = propTypes;
UniversalSearchMenu.defaultProps = defaultProps;
UniversalSearchMenu.contextType = UniversalSearchContext;
