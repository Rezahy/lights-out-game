import type { LightsOutAction } from "./lights-out-reducer";

export const chooseCell = (
	payload: `${number}-${number}`
): LightsOutAction => ({
	type: "lights-out/chooseCell",
	payload,
});
