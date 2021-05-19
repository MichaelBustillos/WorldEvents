import React from "react";
// import { Consumer } from "../Context";
// import "../styles/Options.scss";

// This is used to give users the option of going to an external link or adding an event to their planner
export default function Options({ postid }) {

	// Selects the right bookmark button based on auth and isBookmarked
	function getBookmarkButton () {
			return (
				<button
					className="linkButton"
					// onClick={() => addToPlan(id)}
				>
					<svg
						width="30"
						height="30"
						viewBox="-4 0 23 37"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M0 17.3858C0 11.2406 4.98169 6.25891 11.1269 6.25891C17.2721 6.25891 22.2538 11.2406 22.2538 17.3858V19.4721C22.2538 25.6173 17.2721 30.599 11.1269 30.599C4.98169 30.599 0 25.6173 0 19.4721V17.3858Z"
							fill="#3284BF"
						/>
						<path
							d="M12.2056 17.0065H18.4404V19.6939H12.2056V26.7579H9.34932V19.6939H3.11456V17.0065H9.34932V10.48H12.2056V17.0065Z"
							fill="white"
						/>
					</svg>
				</button>
			);

	}

	return (
    <div className="optionsWrapper">
      <a className="linkButton" >
        <svg
          width="30"
          height="30"
					viewBox="-2 -5.8 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 16H2V2H9V0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V9H16V16ZM11 0V2H14.59L4.76 11.83L6.17 13.24L16 3.41V7H18V0H11Z"
            fill="#C4C4C4"
          />
        </svg>
      </a>
      {getBookmarkButton()}
    </div>
  );
}
