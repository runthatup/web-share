import config from "../config";
import { BaseService } from "./base.service";

export class LeaderboardService extends BaseService {
	constructor() {
		super(config.apiUrl);
	}

	async leaderboard(eventId: string, challengeType: string, page: number = 1, limit: number = 10) {
		const resp = await this.client.get(
			`/general/leaderboard/public?eventId=${eventId}&challengeType=${challengeType}&limit=${limit}&page=${page}`
		)
		return resp.data
	}
}

export const leaderboardService = new LeaderboardService();