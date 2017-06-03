import {h} from 'preact'; // eslint-disable-line no-unused-vars

import {Button} from 'react-toolbox/lib/button';
import {Card, CardTitle, CardText, CardActions} from 'react-toolbox/lib/card';
import MaterialRemove from 'material-design-icons/content/svg/production/ic_clear_24px.svg';
import MaterialPencil from 'material-design-icons/editor/svg/design/ic_mode_edit_24px.svg';

import style from './style';

import SvgIcon from 'components/svg-icon';

export default function Note({note, onDelete, onEdit}) {
	return (
		<Card className={style.note}>
			<CardTitle
				avatar="https://placehold.it/64x64"
				title="User"
				subtitle={note.fromNow} />

			<CardText className={style.noteInner}>{note.text}</CardText>

			<CardActions>
				<Button onClick={onDelete} className={style.noteButton} mini><SvgIcon icon={MaterialRemove} /> Delete</Button>
				<Button onClick={onEdit} className={style.noteButton} mini><SvgIcon icon={MaterialPencil} /> Edit</Button>
			</CardActions>
		</Card>
	);
}
