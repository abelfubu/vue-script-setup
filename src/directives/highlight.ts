import { Directive } from 'vue';

export const highlight: Directive = {
  mounted(element, binding) {
    const [color] = Object.keys(binding.modifiers);
    element.style.backgroundColor = color;
  },
};
