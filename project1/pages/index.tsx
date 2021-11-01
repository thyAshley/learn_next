import { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { breakpoint } from '../apptheme';
import Banner from '../components/home/Banner';
import Card from '../components/home/Card';

const Home: NextPage = () => {
	const [text, setText] = useState('View stores nearby');
	const onClickHandler = () => {
		setText((prevText) => {
			if (prevText === 'View stores nearby') {
				return 'Loading...';
			}
			return 'View stores nearby';
		});
	};
	return (
		<ContainerStyle>
			<Head>
				<title>Coffee Connoisseur</title>
			</Head>
			<BodyStyle>
				<Banner buttonText={text} handleOnClick={onClickHandler} />
				<GridContentStyle>
					<Card
						title="Test Coffee"
						url="/coffee-store/test"
						imgUrl="/Coffe.jpeg"
					/>
					<Card
						title="Test Coffee"
						url="/coffee-store/test"
						imgUrl="/Coffe.jpeg"
					/>
				</GridContentStyle>
			</BodyStyle>
		</ContainerStyle>
	);
};

export default Home;

const ContainerStyle = styled.div`
	margin-bottom: 14rem;

	@media (min-width: ${breakpoint.small}) {
		padding: 0 1rem;
	}
`;

const BodyStyle = styled.main`
	margin: 2.5rem auto 0 auto;
	max-width: 72rem;
	padding-left: 1rem;
	padding-right: 1rem;

	@media (min-width: ${breakpoint.small}) {
		margin-top: 3rem;
		padding: 0 1.5rem;
	}
`;

const GridContentStyle = styled.div`
	display: grid;
	grid-template-columns: repeat(1, minmax(0, 1fr));
	column-gap: 1.5rem;
	row-gap: 1.5rem;

	@media (min-width: ${breakpoint.medium}) {
		grid-template-columns: repeat(2, minmax(0, 1fr));
	}
	@media (min-width: ${breakpoint.large}) {
		grid-template-columns: repeat(3, minmax(0, 1fr));
	}
`;

const CardStyle = styled.div`
	justify-content: center;
`;
