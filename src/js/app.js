function getDescription(hero) {
  const special = [];
  for (const element of hero.special) {
    const {
      id, name, icon, description = 'Описание недоступно',
    } = element;
    const result = {
      id,
      name,
      icon,
      description,
    };
    special.push(result);
  }
  return special;
}

export default getDescription;
