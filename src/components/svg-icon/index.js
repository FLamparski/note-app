import {Component, h} from 'preact'; // eslint-disable-line no-unused-vars

export default function SvgIcon({icon}) {
	return <svg viewBox={icon.viewBox} dangerouslySetInnerHTML={{__html: `<use xlink:href="#${icon.id}" />`}}></svg>;
}
