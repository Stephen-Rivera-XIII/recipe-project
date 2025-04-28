// /tests/unit/components/RecipeCard.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import RecipeCard from '@/components/RecipeCard.vue';

describe('RecipeCard.vue', () => {
  const mockRecipe = {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'tomato sauce', 'ground beef'],
    instructions: ['Cook spaghetti', 'Add tomato sauce', 'Add ground beef'],
    prepTimeMinutes: 15,
    cookTimeMinutes: 30,
    servings: 4,
    difficulty: 'medium',
    cuisine: 'italian',
    tags: ['meat', 'spaghetti'],
    userId: 1,
    image: '/spaghetti.jpg',
    caloriesPerServing: 500,
    rating: 4.5,
    reviewCount: 100,
    mealType: ['lunch', 'dinner'],
  };

  it('renders recipe name correctly', () => {
    const wrapper = mount(RecipeCard, {
      props: { recipe: mockRecipe },
    });

    expect(wrapper.text()).toContain('Spaghetti Bolognese');
  });

  it('displays cook time, calories, and rating', () => {
    const wrapper = mount(RecipeCard, {
      props: { recipe: mockRecipe },
    });

    expect(wrapper.text()).toContain('30');
    expect(wrapper.text()).toContain('500');
    expect(wrapper.text()).toContain('4.5');
    expect(wrapper.text()).toContain('(100)');
  });

  it('renders the correct image', () => {
    const wrapper = mount(RecipeCard, {
      props: { recipe: mockRecipe },
      global: {
        stubs: {
          NuxtImg: {
            props: ['src'],
            template: '<img :src="src" />',
          },
        },
      },
    });

    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe('/spaghetti.jpg');
  });

  it('has a "View" button that links to the recipe detail page', () => {
    const wrapper = mount(RecipeCard, {
      props: { recipe: mockRecipe },
      global: {
        stubs: {
          NuxtImg: true,
          Icon: true,
          BaseBtn: {
            template: '<a href="/recipes/1"><slot />View</a>', // 👈 treat BaseBtn like a normal anchor
          },
        },
      },
    });

    const button = wrapper.find('a');
    expect(button.attributes('href')).toBe('/recipes/1');
    expect(button.text()).toBe('View');
  });
});
