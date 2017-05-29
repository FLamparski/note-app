import {Component, h} from 'preact';

export default class SvgIcon extends Component {
  render() {
    const { icon } = this.props;
    return <svg viewBox={icon.viewBox} dangerouslySetInnerHTML={{__html: `<use xlink:href="#${icon.id}" />`}}></svg>
  }
}
