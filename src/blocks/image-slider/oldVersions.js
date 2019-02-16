const version_1_1_4 = props => {
	const {
		images,
		isDraggable,
		wrapsAround,
		autoplays,
		autoplayDuration,
		sliderHeight,
		showPageDots
	} = props.attributes;
	const imageArray = JSON.parse(images);

	return (
		<div
			className="ub_image_slider"
			style={{
				minHeight: `${25 + (imageArray.length ? sliderHeight : 200)}px`,
				display: 'block'
			}}
		>
			<div
				data-flickity={JSON.stringify({
					draggable: isDraggable,
					pageDots: showPageDots,
					wrapAround: wrapsAround,
					autoPlay: autoplays ? autoplayDuration * 1000 : autoplays,
					adaptiveHeight: true
				})}
			>
				{imageArray.map((c, i) => (
					<div style={{ width: '100%' }}>
						<img
							key={i}
							src={c.url}
							style={{
								display: 'block',
								height: `${sliderHeight}px`,
								objectFit: 'contain',
								margin: '0 auto'
							}}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export { version_1_1_4 };