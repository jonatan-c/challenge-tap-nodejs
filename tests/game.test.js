const supertest = require("supertest");
const app = "http://localhost:3000";
const api = supertest(app);

describe("POST /game", () => {
  it("It should return 200 when game successfully created", async () => {
    const newGame = {
      cells: "[]",
      state: 1,
    };

    const { body } = await api
      .post("/game")
      .send(newGame)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    expect(body.game.state.code).toBe(newGame.state);
  });
});

describe("GET /game/id", () => {
  it("It should return 200 when game successfully is return ", async () => {
    const getGame = {
      game: {
        id: 1,
        cells: "[]",
        createdAt: "2020-05-05T00:00:00.000Z",
        updatedAt: "2020-05-05T00:00:00.000Z",
        state: {
          code: 1,
          description: "CREATED",
        },
      },
    };

    const { body } = await api
      .get("/game/1")
      .expect(200)
      .expect("Content-Type", /application\/json/);
    expect(body.game.id).toBe(getGame.game.id);
    expect(body.game.cells).toBe(getGame.game.cells);
    expect(body.game.state.code).toBe(getGame.game.state.code);
    expect(body.game.state.description).toBe(getGame.game.state.description);

  });
});
