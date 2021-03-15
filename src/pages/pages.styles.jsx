import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: '36ch',
		backgroundColor: theme.palette.background.paper
	},
	paper: {
		padding: theme.spacing(2),
		color: theme.palette.text.secondary,
		minHeight: '80vh'
	},
	inline: {
		display: 'inline'
	},
	message: {
		textAlign: 'center',
		padding: '15px 20px'
	},
	table: {
		minWidth: 650
	},
	form: {
		width: '100%', //Fix IE 11 issue.
		marginTop: theme.spacing(1)
	},
	submit: {
		margin: theme.spacing(3, 0, 2)
	},
	homeRoot: {
		width: 345,
		maxWidth: 345
	},
	media: {
		height: 140
	},
	container: {
		gap: '20px'
	},
	title: {
		textTransform: 'capitalize'
	},
	previewRoot: {
		width: '100%',
		maxWidth: '80vw',
		padding: '20px',
		margin: '0 auto'
	},
	likeBtn: {
		textAlign: 'right',
		gap: '5px'
	}
}));

export default useStyles;
