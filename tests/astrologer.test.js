const request = require('supertest');
const app = require('../index');

describe('Astrologer API', () => {
  it('should fetch all astrologers', async () => {
    const res = await request(app).get('/api/astrologers/list');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
});
