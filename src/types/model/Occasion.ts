export interface Occasion {
  occasionName: string;
  customerId: string;
  occasionType: OccasionType;

  //TODO - date type in typescript?
  occasionDate: string;
  relationship: Relationship;
  reminderEmailAddress: string;
  cardType: CardType;
  occasionAction: OccasionAction;
}

export interface Relationship {
	name: string;
	relationshipType: RelationshipType;
}

export enum CardType {
	FUNNY,
	SENTIMENTAL,
	SERIOUS
}

export enum OccasionType {
	BIRTHDAY,
	ANNIVERSARY,
	WEDDING,
	CHRISTMAS,
	EASTER,
	GRADUATION
}

export interface OccasionAction {
	sendCard: boolean;
	sendGift: boolean;
}
