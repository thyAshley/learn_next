import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

import { breakpoint, theme } from '../../apptheme';

interface CardProps {
	title: string;
	imgUrl: string;
	url: string;
}

const Card = ({ title, imgUrl, url }: CardProps): JSX.Element => {
	return (
		<Link href={url}>
			<CardStyle>
				<ContainerStyle>
					<CardTitleWrapper>
						<CardTitleStyle>{title}</CardTitleStyle>
					</CardTitleWrapper>
					<CardImageWrapper>
						<CardImage width={260} height={160} src={imgUrl} />
					</CardImageWrapper>
				</ContainerStyle>
			</CardStyle>
		</Link>
	);
};

export default Card;

const CardStyle = styled.a`
	margin: auto;
	--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
		0 10px 10px -5px rgba(0, 0, 0, 0.04);
	box-shadow: 0 0 transparent, 0 0 #0000, 0 0 transparent, 0 0 #0000,
		0 0 transparent;
	border-color: ${theme.color.white};
	border-radius: 0.75rem /* 12px */;
`;

const ContainerStyle = styled.div`
	border-radius: 0.75rem /* 12px */;
	padding-top: 0.25rem /* 4px */;
	padding-bottom: 0.25rem /* 4px */;
	padding-bottom: 1.25rem /* 20px */;
	padding-left: 1rem /* 16px */;
	padding-right: 1rem /* 16px */;
	backdrop-filter: blur(10px);

	background: hsla(0, 0%, 100%, 0.4);
	--webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	border: 1px solid hsla(0, 0%, 100%, 0.2);
`;

const CardTitleStyle = styled.h2`
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size: 1.25rem /* 20px */;
	line-height: 1.75rem /* 28px */;
	font-weight: 800;
	overflow: hidden;
	width: 16rem /* 256px */;
`;

const CardTitleWrapper = styled.div`
	margin-top: 0.75rem /* 12px */;
	margin-bottom: 0.75rem /* 12px */;
`;

const CardImageWrapper = styled.div`
	color: ${theme.color.white};
`;

const CardImage = styled(Image)`
	border-radius: 0.75rem /* 12px */;
`;
