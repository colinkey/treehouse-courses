import * as PlayerActionTypes from "../actiontypes/player.js";

const initialState = {
  players: [
    {
      name: "Jim Hoskins",
      score: 31,
      created: "1/2/2013",
      updated: "1/3/2013"
    },
    {
      name: "Andrew Chalkley",
      score: 20,
      created: "1/4/2013",
      updated: "1/5/2013"
    },
    {
      name: "Alena Holligan",
      score: 50,
      created: "1/6/2013",
      updated: "1/7/2013"
    }
  ],
  selectedPlayerIndex: -1
};

export default function Player(state = initialState, action) {
  switch (action.type) {
    case PlayerActionTypes.ADD_PLAYER:
      return [
        ...state,
        {
          name: action.name,
          score: 0
        }
      ];
    case PlayerActionTypes.REMOVE_PLAYER:
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    case PlayerActionTypes.UPDATE_PLAYER_SCORE:
      return state.map((player, index) => {
        if (index === action.index) {
          return {
            ...player,
            score: player.score + action.score
          };
        }
        return player;
      });
    case PlayerActionTypes.SELECT_PLAYER:
      return [
        ...state,
        {
          updated: Date.now()
        }
      ];
    default:
      return state;
  }
}
