import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Reference } from 'react-popper';
import { Button } from "reactstrap";

import { UniversalSearchContext } from './UniversalSearchContext';
import { mapToCssModules, tagPropType } from './utils';

const propTypes = {
    caret: PropTypes.bool,
    color: PropTypes.string,
    children: PropTypes.node,
    className: PropTypes.string,
    cssModule: PropTypes.object,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    'aria-haspopup': PropTypes.bool,
    split: PropTypes.bool,
    tag: tagPropType,
    nav: PropTypes.bool,
};

const defaultProps = {
    'aria-haspopup': true,
    color: 'secondary',
};

export class UniversalSearchToggle extends React.Component {

    static propTypes = propTypes;
    static defaultProps = defaultProps;
    static contextType = UniversalSearchContext;

    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        if (this.props.disabled) {
            e.preventDefault();
            return;
        }

        if (this.props.nav && !this.props.tag) {
            e.preventDefault();
        }

        if (this.props.onClick) {
            this.props.onClick(e);
        }

        this.context.toggle(e);
    }

    render() {
        const { className, color, cssModule, caret, split, nav, tag, ...props } = this.props;
        // const ariaLabel = props['aria-label'] || 'Toggle Dropdown';
        const classes = mapToCssModules(classNames(
            className,
            {
                'dropdown-toggle': caret || split,
                'dropdown-toggle-split': split,
                'nav-link': nav
            }
        ), cssModule);

        let Tag;

        if (nav && !tag) {
            Tag = 'a';
            props.href = '#';
        } else if (!tag) {
            Tag = Button;
            props.color = color;
            props.cssModule = cssModule;
        } else {
            Tag = tag;
        }

        if (this.context.inNavbar) {
            return (
                <Tag
                    {...props}
                    className={classes}
                    onClick={this.onClick}
                    aria-expanded={this.context.isOpen}
                    // children={children}
                />
            );
        }

        return (
            <Reference>
                {({ ref }) => (
                    <Tag
                        {...props}
                        {...{ [typeof Tag === 'string' ? 'ref' : 'innerRef']: ref }}
                        className={classes}
                        onClick={this.onClick}
                        aria-expanded={this.context.isOpen}
                        // children={children}
                    />
                )}
            </Reference>
        );
    }
}
