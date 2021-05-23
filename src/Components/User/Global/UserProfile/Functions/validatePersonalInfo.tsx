import IPersonalInfo from "../../../../../Utils/Types/IPersonalInfo";
import IValidatedPersonalInfo from "../Types/IValidatedPersonalInfo";

const validatePersonalInfo = (personalInfo: IPersonalInfo): IValidatedPersonalInfo => {
    const { aboutMe, favouriteMovies, favouriteMusic, interestedIn, interests, lookingFor, partner, relationshipStatus } = personalInfo;

    let fullRelationshipInfo = relationshipStatus;

    if (relationshipStatus && partner)
        fullRelationshipInfo = `${relationshipStatus} with ${partner}`;
    else if (relationshipStatus)
        fullRelationshipInfo = relationshipStatus;

    return {
        "Looking For": lookingFor,
        "Interested In": interestedIn,
        "Relationship Status": fullRelationshipInfo,
        "Interests": interests,
        "Favourite Music": favouriteMusic,
        "Favourite Movies": favouriteMovies,
        "About Me": aboutMe
    }
}

export default validatePersonalInfo;