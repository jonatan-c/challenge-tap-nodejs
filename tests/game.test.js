const supertest = require("supertest");
const app = "http://localhost:3000";
const api = supertest(app);

describe("POST /game", () => {
  it("It should return 200 when activity successfully created", async () => {
    const newGame = {
      celds: "[]",
      state: 1,
    };

    const { body } = await api
      .post("/game")
      .send(newGame)
      .expect(200)
      .expect("Content-Type", /application\/json/);

    // expect(body.game.celds).toBe(newGame.celds);
    expect(body.game.state.code).toBe(newGame.state);
  });
});

describe("GET /game/id", () => {
  it("It should return 200 when activity successfully created", async () => {
    const getGame = {
      game: {
        id: 1,
        cells: "[]",
        createdAt: "2022-04-10T21:06:54.000Z",
        updatedAt: "2022-04-10T21:06:54.000Z",
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
      console.log(body.game);
    expect(body.game).toStrictEqual(getGame.game);
  });
});
