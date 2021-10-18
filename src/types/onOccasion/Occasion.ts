import { Occasion } from "src/types/model/Occasion";

export interface GetOccasionsResponse {
  statusCode: number;
  body: {
    occasions: Occasion[];
  };
}

export interface GetOccasionResponse {
	statusCode: number;
	body: {
		occasion: Occasion;
	}
}
