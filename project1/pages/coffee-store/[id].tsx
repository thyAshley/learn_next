import { NextPage } from 'next';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'
import React from 'react'

const CoffeeShopDetailPage: NextPage = () => {
	const router = useRouter();
	const {id} = router.query

	return (
		<div>
			coffee store page {id}
			<Link href="/" prefetch>
				<a>2 home</a>
			</Link>
			<Link href="/coffee-store/dynamic2" prefetch>
				<a>next</a>
			</Link>
		</div>
	)
}

export default CoffeeShopDetailPage
