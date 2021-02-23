import React from 'react';
import { ButtonGroup } from '@material-ui/core';
import { CommonButton } from '../Common/CommonButton';
import { configs } from '../../config';

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
				text={configs.small}
			/>
			<CommonButton
				handleClick={(e) => filterTankList(e, 'medium')}
				style={{
					backgroundColor: splitButtonClickType === 'medium' ? '#007DB4' : '#F2F2F2',
					color: splitButtonClickType === 'medium' ? '#ffffff' : 'lightgray',
				}}
				text={configs.medium}
			/>
			<CommonButton
				handleClick={(e) => filterTankList(e, 'large')}
				style={{
					backgroundColor: splitButtonClickType === 'large' ? '#007DB4' : '#F2F2F2',
					color: splitButtonClickType === 'large' ? '#ffffff' : 'lightgray',
				}}
				text={configs.large}
			/>
			<CommonButton
				handleClick={(e) => filterTankList(e, 'custom')}
				style={{
					backgroundColor: splitButtonClickType === 'custom' ? '#007DB4' : '#F2F2F2',
					color: splitButtonClickType === 'custom' ? '#ffffff' : 'lightgray',
				}}
				text={'Custom'}
			/>
		</ButtonGroup>
	);
};
