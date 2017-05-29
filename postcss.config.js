module.exports = ctx => ({
	map: ctx.env === 'development' ? ctx.map : false,
	plugins: {
		autoprefixer: {browsers: 'last 2 versions'}
	}
});
