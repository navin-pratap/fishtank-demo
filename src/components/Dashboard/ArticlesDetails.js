import { Box, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import { Fragment } from 'react';

export const ArticlesDetails = (props) => {
	const { articlesData, classes } = props;

	return (
		<Fragment>
			{Boolean(articlesData) && articlesData.length ? (
				articlesData.map((item) => (
					<Grid key={item.id} item>
						<Paper className={classes.paper}>
							<Box className={classes.articlesImage}></Box>
							<Box className={classes.articlesContent}>
								<Typography className={classes.articlesContentText}>{item.content}</Typography>
								<Typography className={classes.articlesReadMore}>Read more</Typography>
							</Box>
						</Paper>
					</Grid>
				))
			) : (
				<></>
			)}
		</Fragment>
	);
};
