import { useDispatch } from "react-redux";
import { useState } from "react";
import { heroesDeleted } from "../../slice/sliceHeroes";
import { CSSTransition } from 'react-transition-group';
import './heroesListItem.css';

const HeroesListItem = ({ name, description, element, id }) => {
	const dispatch = useDispatch();
	const [show, setShow] = useState(false)
	let elementClassName;
	switch (element) {
		case "fire":
			elementClassName = "bg-danger bg-gradient";
			break;
		case "water":
			elementClassName = "bg-primary bg-gradient";
			break;
		case "wind":
			elementClassName = "bg-success bg-gradient";
			break;
		case "earth":
			elementClassName = "bg-secondary bg-gradient";
			break;
		default:
			elementClassName = "bg-warning bg-gradient";
	}

	return (
		<li
			className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
		>
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
				className="img-fluid w-25 d-inline"
				alt="unknown hero"
				style={{ objectFit: "cover" }}
			/>
			<div className="card-body">
				<h3 className="card-title">{name}</h3>
				<p className="card-text">{description}</p>
			</div>
			<span className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light">
				<button
					type="button"
					className="btn-close btn-close"
					aria-label="Close"
					onClick={() => {
						dispatch(heroesDeleted(id));
						setShow(show => !show)
					}}
				></button>
			</span>
		</li>
	);
};

export default HeroesListItem;
