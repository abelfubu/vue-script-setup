import { Directive } from 'vue';

function classlist(el: HTMLElement, binding: any) {
  const [className] = Object.keys(binding.modifiers);
  if (binding.value) {
    return el.classList.add(className);
  }

  el.classList.remove(className);
}

export const dynamicClassDirective: Directive = {
  mounted: classlist,
  updated: classlist,
};
