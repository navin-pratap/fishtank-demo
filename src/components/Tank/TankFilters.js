import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import { CommonButton } from '../Common/CommonButton';

export const TankFilter = (props) => {
	const { filterTankList, splitButtonClickType } = props;

	return (
		<ButtonGroup disableElevation variant='contained'>
			<CommonButton
				handleClick={(e) => filterTankList(e, 'small')}
				style={{
					backgroundColor: splitButtonClickType === 'small' ? '#007DB4' : '#F2F2F2',
					color: splitButtonClickType === 'small' ? '#ffffff' : 'lightgray',
				}}
				text={'Small'}
			/>
			<CommonButton
				handleClick={(e) => filterTankList(e, 'medium')}
				style={{
					backgroundColor: splitButtonClickType === 'medium' ? '#007DB4' : '#F2F2F2',
					color: splitButtonClickType === 'medium' ? '#ffffff' : 'lightgray',
				}}
				text={'Medium'}
			/>
			<CommonButton
				handleClick={(e) => filterTankList(e, 'large')}
				style={{
					backgroundColor: splitButtonClickType === 'large' ? '#007DB4' : '#F2F2F2',
					color: splitButtonClickType === 'large' ? '#ffffff' : 'lightgray',
				}}
				text={'Large'}
			/>
		</ButtonGroup>
	);
};
