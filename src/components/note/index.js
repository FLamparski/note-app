import {h} from 'preact'; // eslint-disable-line no-unused-vars

import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import SvgIcon from 'components/svg-icon';
import MaterialRemove from 'material-design-icons/content/svg/production/ic_clear_24px.svg';

import style from './style';

export default function Note({note, onDelete}) {
	return (
		<Card className={style.note}>
			<CardTitle
				avatar='https://placehold.it/64x64'
				title='User'
				subtitle={note.fromNow} />

			<CardText>{note.text}</CardText>

			<CardActions>
				<Button onClick={onDelete} className={style.noteButton} mini><SvgIcon icon={MaterialRemove} /> Delete</Button>
			</CardActions>
		</Card>
	);
}
