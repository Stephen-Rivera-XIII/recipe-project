// tests/unit/ComponentName.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import ComponentName from '../../components/ComponentName.vue'; //<-- placeholder

describe('ComponentName', () => {
  it('renders the component properly', () => {
    const wrapper = mount(ComponentName);

    expect(wrapper.exists()).toBe(true);
  });

  it('displays some text', () => {
    const wrapper = mount(ComponentName, {
      props: {
        text: 'Hello World'
      }
    });

    expect(wrapper.text()).toContain('Hello World');
  });
});