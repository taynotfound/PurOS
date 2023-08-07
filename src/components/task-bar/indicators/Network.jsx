import { faWifi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Network() {
	return (
		<button title="Wifi" tabIndex={0}>
			<FontAwesomeIcon icon={faWifi}/>
		</button>
	);
}