import React from 'react';
import PropTypes from 'prop-types';

import './page.module.css';

import { Header } from './Header';
import { Card } from './Card';
import { SectionHero } from './Hero';

import ic1 from './public/pane-1-icon.png';
import ic2 from './public/pane-2-icon.png';
import ic3 from './public/pane-3-icon.png';

export function Page() {
	return (

		<article>

			<Header />

			<SectionHero title="Hi User!" text={<p>Color really isnt that difficult to get right, if you know where to start. <br /> Learn by doing and you´ll be a master in no time</p>} />

			<section className={"features"}>
				<div className="container">
					<div className={"__featuresList"}>

						<Card icon={ic1} title="Blue" text="Blue is the color of the sky and sea. It is often associated with depth and stability. It symbolizes trust, loyalty, wisdom, confidence, intelligence, faith, truth, and heaven." />
						<Card icon={ic2} title="Green" text="Green is the color of nature. It symbolizes growth, harmony, freshness, and fertility. Green has strong emotional correspondence with safety." />
						<Card icon={ic3} title="Red" text="Red. Red is the color of fire and blood, so it is associated with energy, war, danger, strength, power, determination as well as passion, desire, and love." />

					</div>
				</div>
			</section>

		</article>
	)
}