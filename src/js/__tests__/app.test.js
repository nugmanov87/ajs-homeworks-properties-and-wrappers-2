import getDescription from '../app';

const heroWithDescription = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
  ],
};

const heroWithoutDescription = {
  name: 'Лучник',
  type: 'Bowman',
  health: 50,
  level: 3,
  attack: 40,
  defence: 10,
  special: [{ id: 9, name: 'Тройной выстрел', icon: 'http://...' }],
};

test('should return description from hero special', () => {
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
  ];
  const recieved = getDescription(heroWithDescription);
  expect(recieved).toEqual(expected);
});

test('should return default description', () => {
  const expected = [
    {
      id: 9,
      name: 'Тройной выстрел',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  const recieved = getDescription(heroWithoutDescription);
  expect(recieved).toEqual(expected);
});
