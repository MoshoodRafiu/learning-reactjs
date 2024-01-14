import { useState } from "react";
import styles from './ListGroup.module.css';

interface Props {
	items: string[];
	heading: string;
  onSelectItem: (item: string) => void;
}

export default function ListGroup({ items, heading, onSelectItem }: Props) {
	const [selectedIndex] = useState(-1);

	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No Item Found</p>}
			<ul className={[styles.listGroup, styles.container].join(' ')}>
				{items.map((item, index) => (
					<li
						key={item}
						onClick={() => onSelectItem(item)}
						className={selectedIndex === index ? "list-group-item active" : "list-group-item"}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}
