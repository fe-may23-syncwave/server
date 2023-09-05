import { Category } from '../models';

export async function getCategoryIdByName(categoryName: string) {
  const category = await Category.findOne({
    where: {
      name: categoryName,
    },
  });

  if (category) {
    return category.id;
  }
  return null;
}
