/* @flow */
'use strict';

import React from 'react';
import {Picker, Modal} from 'react-native';
import NativeBaseComponent from './../native-base/Components/Base/NativeBaseComponent';
import computeProps from './../native-base/Utils/computeProps';
import { Header, Button, Title, View, Content, Container, Icon, List, ListItem, Text } from 'native-base';
import _ from 'lodash';

export default class PickerNB extends NativeBaseComponent {

    static propTypes = {
        openModal: React.PropTypes.bool,
        hideModal: React.PropTypes.func,
        items: React.PropTypes.array
      }

    constructor(props) {
        super(props);
        this.state = {
          modalVisible : this.props.openModal,
          currentLabel: this.getLabel(props)
        }
    }

    componentWillReceiveProps(nextProps) {
      const currentLabel = this.state.currentLabel;
      const nextLabel = this.getLabel(nextProps);

      if (currentLabel !== nextLabel) {
        this.setState({
          currentLabel: nextLabel
        });
      }
    }

    getInitialStyle() {
        return {
            picker: {
                // alignItems: 'flex-end'
            },
            pickerItem: {

            }
        }
    }
    _setModalVisible(visible) {
        return visible ? null : this.props.hideModal();
    }

    prepareRootProps() {
        var defaultProps = {
            style: this.getInitialStyle().picker,
            itemStyle: this.getInitialStyle().pickerItem
        };

        return computeProps(this.props, defaultProps);
    }

    getLabel(props) {
        const item = _.find(props.children, child => {
            return child.props.value == props.selectedValue;
        });

        return _.get(item, 'props.label');
    }

    modifyHeader() {
        let childrenArray = React.Children.toArray(this.props.headerComponent.props.children);
        let newChildren = [];
        childrenArray.forEach((child) => {
            if (child.type==Button) {
                newChildren.push(React.cloneElement(child, {onPress: () => {this._setModalVisible(false)}}))
            } else {
                newChildren.push(child)
            }
        });
        return <Header {...this.props.headerComponent.props} > {newChildren}</Header>
    }

    renderIcon() {
        return React.cloneElement(this.props.iosIcon, {style: {fontSize: 22, lineHeight: 26, color: '#7a7a7a' }})
    }

    renderHeader() {
        return (this.props.headerComponent) ? this.modifyHeader() : (<Header >
            <Button transparent onPress={() => {this.props.hideModal()}}>Back</Button>
            <Title>Select One</Title>
        </Header>)
    }

    render() {
        return (
        <View>

            <Modal animationType='slide'
                transparent={false}
                visible={this.state.modalVisible}
                onRequestClose={() => {this._setModalVisible(false)}}
                >
                <Container>
                    {this.renderHeader()}
                    <Content>
                        <List dataArray={this.props.items}
                            renderRow={(child) =>
                                <ListItem style={{paddingVertical: 5}} iconRight button onPress={() => {this._setModalVisible(false);this.props.onValueChange(child.props.value); this.setState({current: child.props.label})}} >
                                    <Text >{child.props.label}</Text>
                                    {(child.props.value===this.props.selectedValue) ?
                                        (<Icon name='ios-checkmark-outline' />)
                                        :
                                        (<Icon name='ios-checkmark-outline' style={{color: 'transparent'}} />)
                                    }
                                </ListItem>
                            }>
                        </List>
                    </Content>
                </Container>
            </Modal>
        </View>
        );
    }

}

PickerNB.Item = React.createClass({

    render: function() {
        return(
          <Picker.Item {...this.props()}/>
          );
    }
});
