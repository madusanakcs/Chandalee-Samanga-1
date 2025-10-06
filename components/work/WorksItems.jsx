/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// Popup Component
const Popup = ({ show, onClose, item }) => {
	if (!show) return null;

	return ReactDOM.createPortal(
		<div className="work__popup">
			<div className="work__popup-content">
				<button className="popup__close" onClick={onClose}>
					&times;
				</button>
				<h3 className="popup__title">{item.title}</h3>
				<img src={item.image} alt={item.title} className="popup__img" />
				<p className="popup__description">{item.description}</p>
				<p className="popup__tools">
					<strong>Tools:</strong> {item.tools.join(", ")}
				</p>
			</div>
		</div>,
		document.body
	);
};


// WorksItems Component
const WorksItems = ({ item }) => {
	const [showTooltip, setShowTooltip] = useState(false);
	const [showPopup, setShowPopup] = useState(false);

	const handleSourceClick = (e) => {
		e.preventDefault();
		if (item.sourceUrl && item.sourceUrl !== "#") {
			window.open(item.sourceUrl, "_blank");
		}
	};

	const handleViewMoreClick = () => setShowPopup(true);
	const closePopup = () => setShowPopup(false);

	return (
		<div className="work__card" key={item.id}>
			<img src={item.image} alt="" className="work__img" />
			<h3 className="work__title">{item.title}</h3>
			<div className="work__button-container">
				<a
					href="#"
					className="work__button"
					onClick={handleSourceClick}
					onMouseEnter={() =>
						item.status === "development" && setShowTooltip(true)
					}
					onMouseLeave={() => setShowTooltip(false)}
				>
					<i className="bx bxl-github work__button-icon" /> Source
				</a>
				{showTooltip && item.status === "development" && (
					<div className="work__tooltip">Under Development</div>
				)}
				<button
					className="work__button pop-view-more-button"
					onClick={handleViewMoreClick}
				>
					View More <i className="bx bx-right-arrow-alt"></i>
				</button>
			</div>
			<Popup show={showPopup} onClose={closePopup} item={item} />
		</div>
	);
};

export default WorksItems;
